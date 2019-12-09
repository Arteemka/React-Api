import React from "react";

class Input extends React.Component {
  onChange = event => {
    this.props.setFieldText(event.target.value);
  };

  render() {
    return (
      <input
        type={this.props.type}
        className={this.props.className}
        placeholder={this.props.placeholder}
        onChange={this.onChange}
      />
    );
  }
}

export default Input;
