import React from "react";

const ToggleItems = props => (
  <div className="modal_font">
    <span id="close_modal_box" onClick={props.onClose}>
      &#10007;
    </span>
    {props.items.map((item, index) => (
      <div key={index} className="item_box">
        <img className="modal_box__img" src={item.img_url} alt="изображение" />
        <div className="modal_box__title">Title: {item.title}</div>
        <div className="modal_box__type">type: {item.property_type}</div>
        <div className="modal_box__price">Price: {item.price_formatted}</div>
      </div>
    ))}
  </div>
);

export default ToggleItems;
