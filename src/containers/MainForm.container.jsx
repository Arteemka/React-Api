import { connect } from "react-redux";

import MainForm from "../components/MainForm/MainFrom";
import { getData } from "../actions/items";
import { setFavorite } from "../actions/favoriteItems";
import { setPage } from "../actions/items";

const mapStateToProps = state => ({
  items: state.items.items,
  itemsFavorite: state.itemsFavorite.itemsFavorite,
  endPage: state.items.endPage,
  page: state.items.page,
  error: state.items.error
});

const mapDispatchToProps = {
  getData,
  setFavorite,
  setPage
};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
