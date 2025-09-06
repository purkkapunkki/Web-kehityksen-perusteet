"use strict";

import { restaurantRow, restaurantModal } from "./components.js";
import { apiUrl } from "./variables.js";
import { fetchData } from "./utils.js";

const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");
const closeButtons = document.querySelectorAll(".close-button");
const tableBody = document.querySelector("table tbody");
const resetButton = document.querySelector("#reset");
const sodexoButton = document.querySelector("#sodexo");
const compassButton = document.querySelector("#compass");
const restaurantFetchingError = document.querySelector(
  "#restaurant-fetching-error"
);

const highlight = (evt) => {
  document.querySelector(".highlight")?.classList.remove("highlight");
  evt.currentTarget.classList.add("highlight");
};

const showRestaurantModal = async (restaurant) => {
  let dailyMenu;
  let errorMessage;
  try {
    dailyMenu = await fetchData(
      `${apiUrl}/restaurants/daily/${restaurant._id}/fi`
    );
  } catch (exception) {
    errorMessage = `<p class="error">Failed to fetch the daily menu: ${exception}</p>`;
  }
  if (dailyMenu) {
    modalContent.innerHTML = restaurantModal(restaurant, dailyMenu);
  } else {
    modalContent.innerHTML = errorMessage;
  }
  modal.showModal();
};

const showRestaurants = (restaurants) => {
  tableBody.textContent = "";
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
  restaurantFetchingError.textContent = errorMessage;
  restaurantFetchingError.classList.remove("hidden");
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

let restaurants;
try {
  restaurants = await fetchRestaurants();
} catch (exception) {
  restaurants = [];
  showRestaurantFetchingError(exception);
}

showRestaurants(restaurants);

sodexoButton.addEventListener("click", () => {
  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.company === "Sodexo"
  );
  showRestaurants(filteredRestaurants);
});

compassButton.addEventListener("click", () => {
  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.company === "Compass Group"
  );
  showRestaurants(filteredRestaurants);
});

resetButton.addEventListener("click", () => {
  showRestaurants(restaurants);
});
