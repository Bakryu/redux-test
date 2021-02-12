import React, { useEffect } from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from "../../pages/Book";
import Main from "../../pages/Main";
import Update from "../../pages/Update";
import Header from "../Header";
import CreateBook from "../../pages/CreateBook";
import { connect } from "react-redux";
import { fetchBookData } from "../../operations";

function App(props) {
  const { fetchData, booksData } = props;
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main booksData={booksData} />
        </Route>
        <Route path="/books/:id">
          <Book />
        </Route>
        <Route path="/create">
          <CreateBook />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return { booksData: state.booksData };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(fetchBookData());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
