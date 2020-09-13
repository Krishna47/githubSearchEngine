import React, { Component } from 'react';
import { Query } from "react-apollo";
import GraphqlReponseHandler from "../graphQl/GraphqlReponseHandler";
import { USR_REPO_SEARCH_QUERY } from "../../constants/grpahQlQuerys";
import seachIcon from "../../resources/img/seachIcon.png";
import clearIcon from "../../resources/img/clearIcon.png";

import "./searchPage.scss";

/**
 * SearchPage is a component which searchEngine to fetch the gitHub Repositories using GraphQL
 */
const DEFAULT_SEARCH_TEXT = '';
class SearchPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchValue: DEFAULT_SEARCH_TEXT
        }
    }


    __handleSearchText(evt) {
        const searchValue = evt.target.value;
        this.setState({ searchValue });
    }

    // On Clicking on close Icon, state should reset the searchValue to default
    __handleClearSearch() {
        this.setState({ searchValue: DEFAULT_SEARCH_TEXT })
    }


    render() {
        const { searchValue } = this.state;
        const enableSearch = searchValue !== '';

        return (
            <div className="searchPage">
                <h3 className="searchPage__header">Search gitHub repositories</h3>

                <div className="searchPage__searchBar mt-3">

                    <img
                        className="searchPage__searchBar--searchIcon"
                        alt="search-icon"
                        src={seachIcon} />

                    <input
                        className="searchPage__searchBar--searchTxt"
                        placeholder="GitHub Username"
                        type="text"
                        value={this.state.searchValue}
                        onChange={evt => this.__handleSearchText(evt)}
                        data-testid={"searchField"}
                    />

                    <img
                        className="searchPage__searchBar--clearIcon"
                        alt="clear-icon"
                        data-testid={"clearIcon"}
                        src={clearIcon}
                        onClick={evt => this.__handleClearSearch(evt)} />

                </div>


                {enableSearch &&
                    <Query data-testid="graphQl" query={USR_REPO_SEARCH_QUERY} variables={{ "userId": searchValue }}>
                        {res => <GraphqlReponseHandler res={res} />}
                    </Query>}


            </div>

        )
    }
}

export default SearchPage