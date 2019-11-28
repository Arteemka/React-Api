import React from "react";

import ToggleItem from "../toggleItem/ToggleItem";

const Modal = props => (
  <div className="modal">
    <div className="item-modal">
      <div className="item_image">
        <img
          className="modal_img"
          src={props.children.img_url}
          alt="изображения"
        />
      </div>
      <ToggleItem onClose={props.onClose}>{props.children}</ToggleItem>
    </div>
  </div>
);

export default Modal;
