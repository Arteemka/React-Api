import React from "react";

class Output extends React.Component {
  render() {
    return (
      !this.props.list || <div className="output-date">
        {this.props.list.map((item, index) => (
          <div key={index} className="item">
            <img className="img" src={item.img_url} alt="изображение" />
            <div className="bathroom">Bathroon: {item.bathroom_number}</div>
            <div className="bedroom">Bedroom: {item.bedroom_number}</div>
            <div className="price">{item.price_formatted}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Output;
