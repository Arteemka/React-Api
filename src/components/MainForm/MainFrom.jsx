import React from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Output from "../Output/OutputDate";

class MainForm extends React.Component {
  state = {
    text: "",
    list: [],
    isLoading: false
  };

  gettingDate = () => {
    this.setState({ isLoading: true });
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
            findButton="Find"
            className="button-find"
          />
        </div>
        <Output list={this.state.list} />
      </>
    );
  }
}

export default MainForm;
