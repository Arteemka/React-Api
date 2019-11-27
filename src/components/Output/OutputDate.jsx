import React from "react";

class Output extends React.Component {
  render() {
    const list = this.props.list;
    if (!list) {
      return false;
    }
    return (
      <div className="output-date">
        {list.map((item, index) => (
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
