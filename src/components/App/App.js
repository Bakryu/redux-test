import React from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Book from "../../pages/Book";
import Main from "../../pages/Main";
import Update from "../../pages/Update";
import Header from "../Header";
import CreateBook from "../../pages/CreateBook";

function App() {
  React.useEffect(() => {}, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/books/:id">
          <Book />
        </Route>
        <Route path="/create">
          <CreateBook />
        </Route>
        <Route path="/update">
          <Update />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;