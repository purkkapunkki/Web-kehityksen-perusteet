"use strict";

async function fetchData(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const json = await response.json();
  return json;
}

const url = "https://reqres.in/api/users";
const body = {
  first_name: "example first name",
  last_name: "example last name",
};
const options = {
  headers: { "x-api-key": "reqres-free-v1" },
  method: "POST",
  body: JSON.stringify(body),
};
fetchData(url, options).then(
  (response) => console.log(response),
  (reason) => console.error(reason)
);
