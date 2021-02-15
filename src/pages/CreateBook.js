import React from "react";
import "./createBook.css";
import { createBook } from "../services/bookService";
import Form from "../components/Form";
import AlertGoToHero from "../components/AlertGoToHero";
import { changeAlertCreateBook } from "../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const CreateBook = function ({ showAlert, goMainAlertActive }) {
  const alertTitle = "Книга добавлена";
  const history = useHistory();

  const fn = () => {
    history.push("/");
  };

  return (
    <section className="container">
      <Form
        serverAction={createBook}
        buttonText={"Add book"}
        changeAlert={changeAlertCreateBook}
      />
      <AlertGoToHero
        goMainAlert={goMainAlertActive}
        alertTitle={alertTitle}
        cleanBookPage={() => showAlert(fn)}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return { goMainAlertActive: state.isSubmitAlert };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAlert: (callback) => {
      dispatch(changeAlertCreateBook());
      callback();
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateBook);
