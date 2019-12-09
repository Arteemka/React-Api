import React from "react";
import { connect } from "react-redux";

import MainForm from "../components/MainForm/MainFrom";
import { setFieldText } from "../actions/input";
import { getData } from "../actions/items";
import { getFavorites } from "../actions/favoritesItems";
import { setPage } from "../actions/items";

class MainFormContainer extends React.Component {
  render() {
    return (
      <MainForm
        text={this.props.text}
        getData={this.props.getData}
        items={this.props.items}
        setFieldText={this.props.setFieldText}
        itemsFavorites={this.props.itemsFavorites}
        getFavorites={this.props.getFavorites}
        endPage={this.props.endPage}
        setPage={this.props.setPage}
        page={this.props.page}
        error={this.props.error}
      />
    );
  }
}

const mapStateToProps = state => ({
  text: state.text.text,
  items: state.items.items,
  itemsFavorites: state.itemsFavorites.itemsFavorites,
  endPage: state.items.endPage,
  page: state.items.page,
  error: state.items.error
});

const mapDispatchToProps = dispatch => {
  return {
    setFieldText: text => dispatch(setFieldText(text)),
    getData: (page, name, bool) => dispatch(getData(page, name, bool)),
    getFavorites: itemsFavorites => dispatch(getFavorites(itemsFavorites)),
    setPage: page => dispatch(setPage(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainFormContainer);
