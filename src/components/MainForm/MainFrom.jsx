import React from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Items from "../Items/Items";
import Modal from "../Modal/Modal";
import ToggledItem from "../ToggledItem/ToggledItem";
import FavoritesItems from "../FavoritesItems/FavoritesItems";
import Pagination from "../Pagination/Pagination";
import LoadMore from "../LoadMore/LoadMore";
import box from "../../bask.jpg";

class MainForm extends React.Component {
  state = {
    text: "",
    list: [],
    isModal: false,
    itemIndex: null,
    favoritesItems: [],
    favoritesIsModal: false,
    page: 1,
    currentPage: 1,
    endPage: 100,
    pages: [1, 2, 3, 4, 5],
    pagination: false,
    loadMore: false
  };

  gettingDate = () => {
    this.setState(this.getDate);
  };

  changePagination = event => {
    if (event.target.id === "pagination-button") {
      this.setState({ pagination: true, loadMore: false });
    } else if (event.target.id === "LoadMore-button") {
      this.setState({ loadMore: true, pagination: false });
    }
  };

  getDate = page => {
    fetch(
      `https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=rent&page=${page}&place_name=${this.state.text}`
    )
      .then(res => res.json())
      .then(date => {
        if (this.state.pagination) {
          this.setState({
            list: date.response.listings
          });
        } else {
          this.setState(prev => ({
            list: [...prev.list, ...date.response.listings]
          }));
        }
      })
      .catch(error => this.setState({ error }));
  };

  onChange = event => {
    this.setState({ text: event.target.value });
  };

  toggleModal = (event, indexId) => {
    event.target.id === "img_box" || event.target.id === "close_modal_box"
      ? this.setState(state => ({
          favoritesIsModal: !state.favoritesIsModal
        }))
      : this.setState(state => ({
          isModal: !state.isModal,
          itemIndex: this.state.list.find((item, index) => index === indexId)
        }));
  };

  addedInFovorites = (event, id) => {
    event.stopPropagation();

    this.setState(state => ({
      favoritesItems: [
        ...state.favoritesItems,
        this.state.list.find((item, index) => index === id)
      ]
    }));
  };

  deleteItem = id => {
    this.setState({
      favoritesItems: this.state.favoritesItems.filter(
        (item, index) => index !== id
      )
    });
  };

  upPage = () => {
    this.setState(
      prev => ({ page: prev.page + 1 }),
      () => this.getDate(this.state.page)
    );
  };

  setPage = page => {
    let arr = this.state.pages;

    if (page < 5) {
      this.setState({ pages: [1, 2, 3, 4, 5] });
    } else if (page > 97) {
      this.setState({ pages: [96, 97, 98, 99, 100] });
    } else {
      this.setState(() => ({
        pages: arr
      }));
      arr.splice(0, 5, page - 2, page - 1, page, page + 1, page + 2);
    }
    this.setState({ page: page }, () => this.getDate(this.state.page));
  };

  render() {
    return (
      <div>
        <div className="block_find">
          <Input
            placeholder="Find"
            type="text"
            className="input-find"
            onChange={this.onChange}
          />
          <Button
            onClick={this.gettingDate}
            buttonName="Find"
            id="button-find"
          />
          <img
            onClick={this.toggleModal}
            id="img_box"
            src={box}
            alt="изображение"
          />
          <Button
            onClick={this.changePagination}
            buttonName="LoadMore"
            id="LoadMore-button"
          />
          <Button
            onClick={this.changePagination}
            buttonName="Pagination"
            id="pagination-button"
          />
        </div>
        {this.state.isModal && (
          <Modal>
            <ToggledItem
              onClose={this.toggleModal}
              item={this.state.itemIndex}
            />
          </Modal>
        )}
        {this.state.favoritesIsModal && (
          <Modal>
            <FavoritesItems
              onClose={this.toggleModal}
              items={this.state.favoritesItems}
              deleteItem={this.deleteItem}
            />
          </Modal>
        )}
        <Items
          favorites={this.addedInFovorites}
          onClick={this.toggleModal}
          list={this.state.list}
        />
        {this.state.pagination && (
          <Pagination
            endPage={this.state.endPage}
            setPage={this.setPage}
            pages={this.state.pages}
            page={this.state.page}
          />
        )}
        {this.state.loadMore && <LoadMore upPage={this.upPage} />}
      </div>
    );
  }
}

export default MainForm;
