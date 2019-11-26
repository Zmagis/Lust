import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match"
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    //avoiding anchor default behavior
    event.preventDefault();
    console.log("searching");
  }

  //changes className of chosen option to sort search results
  getSortByClass(sortByOption) {
    if (sortByOption === this.state.sortBy) {
      return "active";
    } else {
      return "";
    }
  }

  //clicked option is set to state value
  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  //rendering available sorting options
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
          <div className="SearchBar-fields">
            <input
              placeholder="What do you want to eat?"
              onChange={this.handleTermChange}
            />
            <input placeholder="Where?" onChange={this.handleLocationChange} />
          </div>
          <div className="SearchBar-submit">
            <a href="/" onClick={this.handleSearch}>
              Let's Go
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
