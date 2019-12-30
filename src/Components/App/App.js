import React from "react";

import "./App.css";

import BusinessList from "../BussinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Spinner from "../Spinner";

import Yelp from "../../util/Yelp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      spinner: false
    };
    this.searchYelp = this.searchYelp.bind(this);
    this.spinner = this.spinner.bind(this);
  }

  searchYelp(term, location, sortBy) {
    this.setState({ spinner: true });
    Yelp.searchYelp(term, location, sortBy).then(businesses => {
      this.setState({ businesses: businesses });
    });
  }

  spinner() {
    if (this.state.businesses.length === 0 && this.state.spinner === true) {
      return <Spinner />;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>LUST</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
        {this.spinner()}
      </div>
    );
  }
}

export default App;
