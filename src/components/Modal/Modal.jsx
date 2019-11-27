import React from "react";

import ToggleItem from "../toggleItem/ToggleItem";

const Modal = () => (
  <div className="modal">
    <div className="item-modal">
      <div className="item_image">
        <img
          className="modal_img"
          src={this.props.children.img_url}
          alt="изображения"
        />
      </div>
      <ToggleItem onClose={this.props.onClose}>
        {this.props.children}
      </ToggleItem>
    </div>
  </div>
);

export default Modal;
