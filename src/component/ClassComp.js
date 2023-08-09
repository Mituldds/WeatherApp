import React, { Component } from "react";

export default class ClassComp extends Component {
  render() {

    const {charData} = this.props
    return (
      <>
        <h1>hello {charData.name}</h1>
        <h1>job {charData.job}</h1>
      </>
    );
  }
}
