const BASE_URL = "http://localhost:3001/api";

export default async function ({
  method,
  body,
  url,
  headers = {
    "Content-Type": "application/json",
  },
}) {
  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    headers,
    body,
  });
  return await response.json();
}
