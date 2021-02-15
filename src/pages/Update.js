import React from "react";
import { connect } from "react-redux";
import Form from "../components/Form";
import { updateBook } from "../services/bookService";
import { changeAlertCreateBook } from "../actions";
import AlertGoToHero from "../components/AlertGoToHero";

const Update = function ({ goMainAlertActive, showAlert,bookId }) {
  const alertTitle = "Книга изменена";
  return (
    <section>
      <Form
        serverAction={updateBook}
        buttonText={"Update book"}
        changeAlert={changeAlertCreateBook}
        bookId = {bookId}
      />
      <AlertGoToHero
        goMainAlert={goMainAlertActive}
        alertTitle={alertTitle}
        cleanBookPage={() => showAlert()}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return { goMainAlertActive: state.isSubmitAlert };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAlert: () => {
      dispatch(changeAlertCreateBook());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Update);
