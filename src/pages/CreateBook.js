import React from "react";
import "./createBook.css";

export default function CreateBook() {
  const getImage = (event) => {
    return event.target.values[0];
  };
  return (
    <section className="container">
      <form className="m-auto  mt-4">
        <div className="form-row">
          <div className="col-md-6 mb-3  w-80">
            <label htmlFor="bookNameInput">Book name</label>
            <input
              type="text"
              className="form-control "
              id="bookNameInput"
              value=""
              placeholder="Dark Tower"
              required
            />
          </div>
          <div className="col-md-6 mb-3  w-80">
            <label htmlFor="bookAuthorInput">Author</label>
            <input
              type="text"
              className="form-control "
              id="bookAuthorInput"
              value=""
              placeholder="Stephen King"
              required
            />
          </div>
          <div className="col-md-6 mb-3  w-80">
            <label htmlFor="bookImageUrlInput">Image url</label>
            <input
              type="text"
              className="form-control "
              id="bookImageUrlInput"
              value=""
              placeholder="image.com"
              required
            />
          </div>
          <div className="form-file col-md-6 mb-3  w-80" id="divnik">
            <label className="p-a t-0 l-0 " htmlFor="bookImageFileInput">
              kdnondson
            </label>
            <input
              type="file"
              className="book "
              id="bookImageFileInput"
              onChange={getImage}
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
            type="text"
            className="form-control "
            id="bookInputDescription"
            value=""
            placeholder="First book in the World"
            required
          />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Submit form
        </button>
      </form>
    </section>
  );
}
