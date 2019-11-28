import React from "react";

const ToggleItem = props => (
  <>
    <div className="item-modal">
      <div className="item_image">
        <img className="modal_img" src={props.item.img_url} alt="изображения" />
      </div>
      <div className="item_info">
        <span
          className="item_info_modal_block close_modal"
          onClick={props.onClose}
        >
          &#10007;
        </span>
        <div className="item_info_modal_block modal_title">
          Title: {props.item.title}
        </div>
        <div className="item_info_modal_block modal_bathroom">
          Bathroom: {props.item.bathroom_number}
        </div>
        <div className="item_info_modal_block modal_bedroom">
          Bedroom: {props.item.bedroom_number}
        </div>
      </div>
    </div>
  </>
);

export default ToggleItem;
