import React from "react";
import _ from "lodash";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Items from "../Items/Items";
import Modal from "../Modal/Modal";
import ToggledItem from "../ToggledItem/ToggledItem";
import FavoriteItems from "../FavoriteItems/FavoriteItems";
import Pagination from "../Pagination/Pagination";
import LoadMore from "../LoadMore/LoadMore";
import box from "../../bask.jpg";

export default class MainForm extends React.Component {
  state = {
    text: "",
    isModalOpen: false,
    itemIndex: null,
    favoritesIsModalOpen: false,
    pagination: false,
    loadMore: false,
    arrayPages: null
  };

  onChange = event => {
    this.setState({ text: event.target.value });
  };

  gettingDate = () => {
    this.props.getData(this.props.page, this.state.text, "");
  };

  changePagination = event => {
    if (event.target.id === "pagination-button") {
      this.setState(() => ({
        pagination: true,
        loadMore: false,
        arrayPages: _.range(1, this.props.endPage + 1)
      }));
    } else if (event.target.id === "LoadMore-button") {
      this.setState({ loadMore: true, pagination: false });
    }
  };

  toggleModal = (event, indexId) => {
    event.target.id === "img_box" || event.target.id === "close_modal_box"
      ? this.setState(state => ({
          favoritesIsModalOpen: !state.favoritesIsModalOpen
        }))
      : this.setState(state => ({
          isModalOpen: !state.isModalOpen,
          itemIndex: this.props.items.find((item, index) => index === indexId)
        }));
  };

  addedInFovorite = (event, id) => {
    event.stopPropagation();

    this.props.setFavorite([
      ...this.props.itemsFavorite,
      this.props.items.find((item, index) => index === id)
    ]);
  };

  deleteItem = id => {
    this.props.setFavorite(
      this.props.itemsFavorite.filter((item, index) => index !== id)
    );
  };

  upPage = () => {
    this.props.getData(this.props.page + 1, this.state.text, "loadMore");
    this.props.setPage(this.props.page + 1);
  };

  render() {
    if (this.props.error) {
      return (
        <div className="error">
          <p>404!</p>
        </div>
      );
    }

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
        {this.state.isModalOpen && (
          <Modal>
            <ToggledItem
              onClose={this.toggleModal}
              item={this.state.itemIndex}
            />
          </Modal>
        )}
        {this.state.favoritesIsModalOpen && (
          <Modal>
            <FavoriteItems
              onClose={this.toggleModal}
              items={this.props.itemsFavorite}
              deleteItem={this.deleteItem}
            />
          </Modal>
        )}
        <Items
          favorites={this.addedInFovorite}
          onClick={this.toggleModal}
          items={this.props.items}
        />
        {this.state.pagination && (
          <Pagination
            getData={this.props.getData}
            endPage={this.props.endPage}
            page={this.props.page}
            arrayPages={this.state.arrayPages}
            text={this.state.text}
          />
        )}
        {this.state.loadMore && <LoadMore upPage={this.upPage} />}
      </div>
    );
  }
}
