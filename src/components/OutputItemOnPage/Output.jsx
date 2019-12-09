import React from "react";

class Output extends React.Component {
  render() {
    return (
      <div className="output-title">
        <div className="output-item-title">
          <div className="output-item__title text-title">
            Поставленные задачи
          </div>
          <div className="output-item__title date-title">Дата</div>
          <div className="output-item__title close-title">&#10007;</div>
        </div>
        {this.props.lists.map(item => (
          <div
            key={item.id}
            className="output-item"
            onClick={() => this.props.toggleItemCheck(item.id)}
          >
            <div
              className={
                item.check
                  ? "output-item__info text checked"
                  : "output-item__info text"
              }
            >
              {item.text}
            </div>
            <div
              className={
                item.check
                  ? "output-item__info date checked"
                  : "output-item__info date"
              }
            >
              {item.date}
            </div>
            <div
              className="output-item__info close"
              onClick={event => this.props.deleteItem(event, item.id)}
            >
              X
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Output;
