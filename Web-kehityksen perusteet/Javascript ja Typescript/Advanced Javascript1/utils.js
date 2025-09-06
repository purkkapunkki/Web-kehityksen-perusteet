"use strict";

async function fetchData(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("HTTP error: 403 " + response.status);
  }
  const json = await response.json();
  return json;
}

export { fetchData };
