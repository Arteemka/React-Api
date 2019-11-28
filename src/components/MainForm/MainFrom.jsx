import React from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Output from "../Items/Items";
import Modal from "../Modal/Modal";
import ToggleItem from "../ToggleItem/ToggleItem";
import ItemBox from "../ToggleItems/ToggleItems";
import box from "../../bask.jpg";

class MainForm extends React.Component {
  state = {
    text: "",
    list: [],
    isLoading: false,
    isModal: false,
    itemIndex: null,
    favoritesItems: [],
    favoritesIsModal: false
  };

  gettingDate = () => {
    this.setState({ isLoading: true }, this.getDate);
  };

  getDate = () => {
    fetch(
      `https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=rent&page=1&place_name=${this.state.text}`
    )
      .then(res => res.json())
      .then(date => {
        this.setState({
          list: date.response.listings,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
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

  render() {
    return (
      <>
        <div className="block_find">
          <Input
            placeholder="Find"
            type="text"
            className="input-find"
            onChange={this.onChange}
          />
          <Button
            gettingDate={this.gettingDate}
            buttonName="Find"
            className="button-find"
          />
          <img
            onClick={this.toggleModal}
            id="img_box"
            src={box}
            alt="изображение"
          />
        </div>
        {this.state.isModal && (
          <Modal>
            <ToggleItem
              onClose={this.toggleModal}
              item={this.state.itemIndex}
            />
          </Modal>
        )}
        {this.state.favoritesIsModal && (
          <Modal>
            <ItemBox
              onClose={this.toggleModal}
              items={this.state.favoritesItems}
            />
          </Modal>
        )}
        <Output
          favorites={this.addedInFovorites}
          onClick={this.toggleModal}
          list={this.state.list}
        />
      </>
    );
  }
}

export default MainForm;
