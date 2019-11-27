import React from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Output from "../Output/OutputDate";
import Modal from "../Modal/Modal";

class MainForm extends React.Component {
  state = {
    text: "",
    list: [],
    isLoading: false,
    isModal: false,
    itemIndex: null
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

  toggleModal = id => {
    this.setState(state => ({
      isModal: !state.isModal,
      itemIndex: this.state.list.find((item, index) => index === id)
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
        </div>
        {this.state.isModal && (
          <Modal onClose={this.toggleModal}>{this.state.itemIndex}</Modal>
        )}
        <Output onClick={this.toggleModal} list={this.state.list} />
      </>
    );
  }
}

export default MainForm;
