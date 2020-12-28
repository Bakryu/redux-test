import React from "react";

export default function CreateBook() {
  return (
    <section className="container">
      <form className="m-auto  mt-4">
        <div className="form-row">
          <div className="col-md-6 mb-3  w-80">
            <label htmlFor="validationDefault01">Book name</label>
            <input
              type="text"
              className="form-control "
              id="validationDefault01"
              value=""
              placeholder="Dark Tower"
              required
            />
          </div>
          <div className="col-md-6 mb-3  w-80">
            <label htmlFor="validationDefault02">Author</label>
            <input
              type="text"
              class="form-control "
              id="validationDefault02"
              value=""
              placeholder="Stephen King"
              required
            />
          </div>
          <div className="col-md-6 mb-3  w-80">
            <label htmlFor="validationDefault02">Image url</label>
            <input
              type="text"
              className="form-control "
              id="validationDefault02"
              value=""
              placeholder="image.com"
              required
            />
          </div>
          <div className="form-file col-md-6 mb-3  w-80" id="divnik">
            <input
              type="file"
              className="form-file-input"
              id="bookImage"
              //   onchange={showFile(this)}
            />
            <label className="form-file-label" for="customFile">
              <span className="form-file-text">Choose file...</span>
              <span className="form-file-button">Browse</span>
            </label>
          </div>
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Submit form
        </button>
        <div className="w-10 h-10 bg-primary"></div>
      </form>
    </section>
  );
}
