"use strict";

async function fetchData(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const json = await response.json();
  return json;
}

const url = "https://reqres.in/api/users/1";
const options = {
  headers: { "x-api-key": "reqres-free-v1" },
};
fetchData(url, options).then(
  (response) => console.log(response),
  (reason) => console.error(reason)
);
