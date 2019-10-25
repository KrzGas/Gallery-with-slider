import React, { Component } from "react";
import ReactDom from "react-dom";
import {Gallery} from "./Components/Gallery/Gallery";
import "../scss/style.scss";

class App extends Component {

  render() {
    return (
      <Gallery />
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.querySelector("#app"));
});
