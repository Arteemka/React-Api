import React from "react";

const Output = props =>
  props.list && (
    <div className="output-date">
      {props.list.map((item, index) => (
        <div
          key={index}
          className="item"
          onClick={event => props.onClick(event, index)}
        >
          <div
            className="favorites"
            onClick={event => props.favorites(event, index)}
          >
            ❤
          </div>
          <img className="img" src={item.img_url} alt="изображение" />
          <div className="bathroom">Bathroon: {item.bathroom_number}</div>
          <div className="bedroom">Bedroom: {item.bedroom_number}</div>
          <div className="price">{item.price_formatted}</div>
        </div>
      ))}
    </div>
  );

export default Output;
