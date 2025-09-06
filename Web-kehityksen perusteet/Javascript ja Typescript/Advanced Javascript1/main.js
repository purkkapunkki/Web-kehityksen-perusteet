"use strict";

import { restaurantRow, restaurantModal } from "./components.js";
import { apiUrl } from "./variables.js";
import { fetchData } from "./utils.js";

const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");
const closeButtons = document.querySelectorAll(".close-button");
const tableBody = document.querySelector("table tbody");

const highlight = (evt) => {
  document.querySelector(".highlight")?.classList.remove("highlight");
  evt.currentTarget.classList.add("highlight");
};

const showRestaurantModal = async (restaurant) => {
  const dailyMenu = await fetchData(
    `${apiUrl}/restaurants/daily/${restaurant._id}/fi`
  );
  modalContent.innerHTML = restaurantModal(restaurant, dailyMenu);
  modal.showModal();
};

const showRestaurants = (restaurants) => {
  restaurants.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  restaurants.forEach((restaurant) => {
    const tableRow = restaurantRow(restaurant);
    tableRow.addEventListener("click", highlight);
    tableRow.addEventListener("click", async () => {
      showRestaurantModal(restaurant);
    });
    tableBody.append(tableRow);
  });
};

const showRestaurantFetchingError = (reason) => {
  const errorMessage = `Failed to fetch restaurant data: ${reason}`;
  console.error(errorMessage);
};

const fetchRestaurants = async () => {
  return await fetchData(`${apiUrl}/restaurants`);
};

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", (evt) => {
    evt.currentTarget.parentElement.parentElement.close();
  });
});

modal.addEventListener("close", (evt) => {
  document.querySelector(".highlight")?.classList.remove("highlight");
});

fetchRestaurants().then(showRestaurants, showRestaurantFetchingError);
