import React from "react";

class Pagination extends React.Component {
  state = {
    filterPage: this.props.arrayPages.filter(function(number) {
      return number >= 1 && number <= 5;
    })
  };

  componentDidUpdate(prevProps, nextProps) {
    let mas = this.props.arrayPages;
    let page = this.props.page;
    let endPage = this.props.endPage;

    if (this.props.page === prevProps.page) return;

    if (this.props.page < 5) {
      this.setState(() => ({
        filterPage: this.props.arrayPages.filter(function(number) {
          return number >= 1 && number < 6;
        }),
        page: this.props.page
      }));
    } else if (page > endPage - 3) {
      this.setState({
        filterPage: mas.filter(function(number) {
          return number >= endPage - 4 && number <= endPage;
        })
      });
    } else {
      this.setState({
        filterPage: mas.filter(function(number) {
          return number >= page - 2 && number <= page + 2;
        })
      });
    }
  }

  render() {
    return (
      <ul className="pagination">
        <li>
          <a onClick={() => this.props.getData(1)}>First</a>
        </li>
        {this.state.filterPage.map((page, index) => (
          <li key={index} className={this.props.page === page ? "active" : ""}>
            {<a onClick={() => this.props.getData(page)}>{page}</a>}
          </li>
        ))}
        <li>
          <a onClick={() => this.props.getData(this.props.endPage)}>Last</a>
        </li>
      </ul>
    );
  }
}
export default Pagination;
