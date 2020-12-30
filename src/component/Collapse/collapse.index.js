import React, { Component } from "react";
import "./collpase.style.scss";

export default class Collapse extends Component {
  state = {
    isClose: true,
  };
  handleCollapsible = () => {
    this.setState({ isClose: !this.state.isClose }, () =>
      console.log("this is to handle collpasible open close", this.state)
    );
  };
  render() {
    return (
      <div className="collapsibleWrap">
        <button
          className={
            this.state.isClose ? "collapse" : "collapse collapse_active"
          }
          onClick={this.handleCollapsible}
        >
          {this.props.title}
        </button>
        <div
          className={this.state.isClose ? "content content_show" : "content"}
        >
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
  1;
}
