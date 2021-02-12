import React, { useState } from "react";
import { connect } from "react-redux";
import { changeAlertCreateBook } from "../../actions";
import { fetchBookData } from "../../operations";

const initialState = {
  label: "",
  author: "",
  logo: "",
  logoFile: "",
  description: "",
  prevueLogo: "",
};

const Form = function ({ serverAction, buttonText, onSubmit }) {
  const [formState, setFormState] = useState(initialState);
  const { label, author, logo, logoFile, description, prevueLogo } = formState;

  const handleChange = ({ target: { name, value } }) => {
    return setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeLogoUrl = (event) => {
    const targetValue = event.target.value;
    setFormState((prevState) => ({
      ...prevState,
      prevueLogo: targetValue,
    }));
    return handleChange(event);
  };

  const handleChangeLogoFile = (event) => {
    const targetFiles = event.target.files[0];
    setFormState((prevState) => ({
      ...prevState,
      prevueLogo: URL.createObjectURL(targetFiles),
    }));
    return setFormState((prevState) => ({
      ...prevState,
      logoFile: targetFiles,
    }));
  };

  return (
    <form
      className="m-auto  mt-4"
      onSubmit={(event) => {
        onSubmit(event)(formState, serverAction);
      }}
    >
      <div className="form-row">
        <div className="col-md-6 mb-3  w-80">
          <label htmlFor="bookNameInput">Book name</label>
          <input
            name="label"
            type="text"
            className="form-control "
            id="bookNameInput"
            value={label}
            placeholder="Dark Tower"
            required
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 mb-3  w-80">
          <label htmlFor="bookAuthorInput">Author</label>
          <input
            name="author"
            type="text"
            className="form-control "
            id="bookAuthorInput"
            value={author}
            placeholder="Stephen King"
            required
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 mb-3  w-80">
          <label htmlFor="bookImageUrlInput">Image url</label>
          <input
            name="logo"
            type="text"
            className="form-control "
            id="bookImageUrlInput"
            value={logo}
            placeholder="image.com"
            required
            disabled={logoFile}
            onChange={handleChangeLogoUrl}
          />
        </div>
        <div className="form-file col-md-6 mb-3  w-80">
          <label className="input-file_label" htmlFor="bookImageFileInput">
            Image file
          </label>
          <input
            name="logoFile"
            type="file"
            className="book "
            id="bookImageFileInput"
            disabled={logo}
            onChange={handleChangeLogoFile}
          />
          <label className="form-file-label" htmlFor="bookImageFileInput">
            <span className="form-file-text">Choose file...</span>
            <span className="form-file-button">Browse</span>
          </label>
        </div>
      </div>
      <div className="w-10 h-10 bg-primary"></div>
      <div className="col-md-6 mb-3  w-80">
        <label htmlFor="bookInputDescription">Book description</label>
        <textarea
          name="description"
          type="text"
          className="form-control "
          id="bookInputDescription"
          value={description}
          placeholder="First book in the World"
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <img
          id="prevueImage"
          className="prevueImage"
          src={prevueLogo || ""}
          alt=""
        />
      </div>
      <button className="btn btn-primary mt-3" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  const onSubmit = (event) => (formState, serverAction) => {
    event.preventDefault();
    const formKeys = Object.keys(formState);
    const data = new FormData();

    formKeys.forEach((key) => {
      data.append(key, formState[key]);
    });

    serverAction(data);
    dispatch(changeAlertCreateBook());
    dispatch(fetchBookData());
  };

  return { onSubmit };
};

export default connect(null, mapDispatchToProps)(Form);
