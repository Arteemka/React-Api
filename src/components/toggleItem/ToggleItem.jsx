import React from "react";

const ToggleItem = props => (
  <>
    <div className="item_info">
      <span
        className="item_info_modal_block close_modal"
        onClick={props.onClose}
      >
        &#10007;
      </span>
      <div className="item_info_modal_block modal_title">
        Title: {props.children.title}
      </div>
      <div className="item_info_modal_block modal_bathroom">
        Bathroom: {props.children.bathroom_number}
      </div>
      <div className="item_info_modal_block modal_bedroom">
        Bedroom: {props.children.bedroom_number}
      </div>
    </div>
  </>
);

export default ToggleItem;
