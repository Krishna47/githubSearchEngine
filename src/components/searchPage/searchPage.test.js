import React from 'react';
import ReactDOM from 'react-dom';
import SearchPage from "./SearchPage";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import { Query } from 'react-apollo';
afterEach(cleanup);

it("Renders Searchpage without issues",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<SearchPage></SearchPage>,div);
});

it("Search Text should be empty by default",()=>{
    const { getByTestId } = render(<SearchPage></SearchPage>);
    expect(getByTestId('searchField')).toHaveTextContent("");    
});


it("Search Text should be empty after clicking clear Icon", () => {
    const { getByTestId } = render(<SearchPage></SearchPage>);
    fireEvent.click(getByTestId('clearIcon'));
    expect(getByTestId('searchField')).toHaveTextContent("");
    
});



