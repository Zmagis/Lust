// https://www.youtube.com/watch?v=w1Ylc4aw2V8
// https://www.youtube.com/watch?v=s0gg70kzfIE
// https://www.youtube.com/watch?v=E7oz3vDssKQ
// https://www.youtube.com/watch?v=EDyWXJN09cA
// https://www.youtube.com/watch?v=tiH5WiA5I2E  random color picker

import React from "react";

import "./App.css";

import BusinessList from "../BussinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

import Yelp from "../../util/Yelp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then(businesses => {
      this.setState({ businesses: businesses });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>LUST</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
        {this.props.Spinners}
      </div>
    );
  }
}

export default App;
