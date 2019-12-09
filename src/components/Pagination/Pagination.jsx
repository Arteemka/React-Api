import React from "react";

class Pagination extends React.Component {
  state = {
    filterPage: this.props.arrayPages.filter(function(number) {
      return number >= 1 && number <= 5;
    })
  };

  componentDidUpdate(prevProps, nextProps) {
    if (this.props.page === prevProps.page) return;

    if (this.props.page < 5) {
      this.setState(() => ({
        filterPage: this.props.arrayPages.filter(function(number) {
          return number >= 1 && number < 6;
        }),
        page: this.props.page
      }));
    } else if (this.props.page > this.props.endPage - 3) {
      this.setState({
        filterPage: this.props.arrayPages.filter(number => {
          return (
            number >= this.props.endPage - 4 && number <= this.props.endPage
          );
        })
      });
    } else {
      this.setState({
        filterPage: this.props.arrayPages.filter(number => {
          return number >= this.props.page - 2 && number <= this.props.page + 2;
        })
      });
    }
  }

  render() {
    return (
      <ul className="pagination">
        <li>
          <a
            onClick={() => this.props.getData(1, this.props.text, "pagination")}
          >
            First
          </a>
        </li>
        {this.state.filterPage.map((page, index) => (
          <li key={index} className={this.props.page === page ? "active" : ""}>
            {
              <a
                onClick={() =>
                  this.props.getData(page, this.props.text, "pagination")
                }
              >
                {page}
              </a>
            }
          </li>
        ))}
        <li>
          <a
            onClick={() =>
              this.props.getData(
                this.props.endPage,
                this.props.text,
                "pagination"
              )
            }
          >
            Last
          </a>
        </li>
      </ul>
    );
  }
}
export default Pagination;
