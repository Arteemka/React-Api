import React from "react";
import _ from "lodash";

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
    endPage: null,
    pagination: false,
    loadMore: false,
    arrayPages: null
  };

  gettingDate = () => {
    this.setState(this.getDate(this.state.page));
  };

  changePagination = event => {
    if (event.target.id === "pagination-button") {
      this.setState(() => ({
        pagination: true,
        loadMore: false,
        arrayPages: _.range(1, this.state.endPage + 1)
      }));
    } else if (event.target.id === "LoadMore-button") {
      this.setState({ loadMore: true, pagination: false });
    }
  };

  getDate = pages => {
    fetch(
      `https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=rent&page=${pages}&place_name=${this.state.text}`
    )
      .then(res => res.json())
      .then(date => {
        if (date.response.total_pages > 100) {
          this.setState(() => ({
            endPage: 100
          }));
        } else {
          this.setState({
            endPage: date.response.total_pages
          });
        }
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

    this.setState({ page: pages });
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
            getData={this.getDate}
            endPage={this.state.endPage}
            page={this.state.page}
            arrayPages={this.state.arrayPages}
          />
        )}
        {this.state.loadMore && <LoadMore upPage={this.upPage} />}
      </div>
    );
  }
}

export default MainForm;
