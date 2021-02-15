import request from "../utils/request";

export function getBooks() {
  return request({ url: "/books", method: "get" });
}

export function getBookById(id) {
  return request({ url: `/books/${id}`, method: "get" });
}

export function createBook(data) {
  return request({
    url: `/books`,
    method: "post",
    body: data,
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export function updateBook(data) {
  return request({
    url: `/books/${data.get("id")}`,
    method: "put",
    body: data,
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export function deleteBookById(id) {
  return request({ url: `/books/${id}`, method: "delete" });
}
