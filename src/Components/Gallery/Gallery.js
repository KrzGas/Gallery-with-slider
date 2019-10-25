import React, { Component, Fragment } from "react";
import { data } from "./data";
import { slider } from "./slider";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [],
      click: false,
      hide: false,
      sliderArr: slider,
      filter: []
    };
  }

  showDetails = name => {
    const index = this.state.sliderArr.findIndex(v => v.name === name);
    const slide = this.state.sliderArr[index];
    this.setState({
      person: [name],
      hide: true,
      click: true,
      filter: [slide]
    });
  };

  hideDetails = name => {
    this.setState({
      person: [],
      hide: false,
      click: false
    });
  };

  nextPerson = name => {
    let index = this.state.sliderArr.findIndex(v => v.name === name);
    let slide;
    if (index > 8) {
      index = 0;
      slide = this.state.sliderArr[index];
    } else {
      slide = this.state.sliderArr[index + 1];
    }

    this.setState({
      filter: [slide]
    });
  };

  previousPerson = name => {
    let index = this.state.sliderArr.findIndex(v => v.name === name);
    let slide;
    if (index < 1) {
      index = 9;
      slide = this.state.sliderArr[index];
    } else {
      slide = this.state.sliderArr[index - 1];
    }

    this.setState({
      filter: [slide]
    });
  };

  render() {
    return (
      <>
        <h1>Meet our team</h1>
        <div className="gallery__wrapper">
          {data.map(v => {
            return (
              <Fragment key={v.name}>
                {this.state.click && this.state.person.includes(v.name) ? (
                  <Fragment>
                    {this.state.filter.map(x => {
                      return (
                        <div key={x.name} className="gallery__details">
                          <button className="button__close" onClick={() => this.hideDetails(x.name)}>
                            X
                          </button>
                          <div className="arrow__box">
                          <i className="fas fa-arrow-left" onClick={() => this.previousPerson(x.name)}></i>
                          <div className="details__box">
                          <h4>{x.title}</h4>
                          <h3>{x.name}</h3>
                          </div>
                          <i className="fas fa-arrow-right" onClick={() => this.nextPerson(x.name)}></i>
                          </div>
                        
                        </div>
                      );
                    })}
                  </Fragment>
                ) : (
                  <Fragment>
                    {this.state.hide ? null : (
                      <div
                        key={v.image}
                        className="gallery__image"
                        onClick={() => this.showDetails(v.name)}
                      >
                        <i className="fas fa-envelope"></i>
                        <img src={v.image} />
                        <p>{v.name}</p>
                        <span className="title">{v.title}</span>
                        <span className="localization">{v.localization}</span>
                      </div>
                    )}
                  </Fragment>
                )}
              </Fragment>
            );
          })}
        </div>
      </>
    );
  }
}

export { Gallery };
