"use strict";

// your code here

const apiUrl = "https://media1.edu.metropolia.fi/restaurant/api/v1";

const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");
const closeButtons = document.querySelectorAll(".close-button");
const restaurantCloseButton = document.querySelector("#modal .close-button");
const tableBody = document.querySelector("table tbody");
const restaurantFetchingError = document.querySelector(
  "#restaurant-fetching-error"
);
const dailyMenuFetchingError = document.querySelector(
  "#daily-menu-fetching-error"
);

function highlight(evt) {
  document.querySelector(".highlight")?.classList.remove("highlight");
  evt.currentTarget.classList.add("highlight");
}

async function fetchDailyMenu(restaurant) {
  return await fetchData(`${apiUrl}/restaurants/daily/${restaurant._id}/fi`);
}

function showDailyMenu(dailyMenu) {
  const menuHeader = document.createElement("h4");
  menuHeader.textContent = "Today's menu";
  modalContent.append(menuHeader);

  if (dailyMenu.courses.length > 0) {
    const table = document.createElement("table");
    const tableHeader = document.createElement("thead");
    table.append(tableHeader);
    const tableHeaderRow = document.createElement("tr");
    tableHeader.append(tableHeaderRow);
    const nameColumn = document.createElement("td");
    nameColumn.textContent = "Name";
    const priceColumn = document.createElement("td");
    priceColumn.textContent = "Price";
    const dietsColumn = document.createElement("td");
    dietsColumn.textContent = "Diets";
    tableHeaderRow.append(nameColumn, priceColumn, dietsColumn);

    const tableBody = document.createElement("tbody");
    table.append(tableBody);
    for (const course of dailyMenu.courses) {
      const tableRow = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.textContent = course.name;
      const priceCell = document.createElement("td");
      priceCell.textContent = course.price;
      const dietsCell = document.createElement("td");
      dietsCell.textContent = course.diets;
      tableRow.append(nameCell, priceCell, dietsCell);
      tableBody.append(tableRow);
    }

    modalContent.append(table);
  } else {
    const noFoodMessage = document.createElement("p");
    noFoodMessage.textContent = "No food today :(";
    modalContent.append(noFoodMessage);
  }
}

function showDailyMenuFetchingError(reason) {
  const errorMessage = `Failed to fetch daily menu data: ${reason}`;
  dailyMenuFetchingError.textContent = errorMessage;
  dailyMenuFetchingError.classList.remove("hidden");
}

async function showRestaurantModal(restaurant) {
  modalContent.innerHTML = `
  <h3>${restaurant.name}</h3>
  <address>
  ${restaurant.address} <br>
  ${restaurant.postalCode} ${restaurant.city} <br>
  ${restaurant.phone} <br>
  ${restaurant.company} <br>
  </address>
  `;
  await fetchDailyMenu(restaurant).then(
    showDailyMenu,
    showDailyMenuFetchingError
  );

  modal.showModal();
}

function showRestaurants(restaurants) {
  restaurants.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  for (const restaurant of restaurants) {
    const tableRow = document.createElement("tr");
    tableRow.addEventListener("click", highlight);
    tableRow.addEventListener("click", async function () {
      showRestaurantModal(restaurant);
    });
    tableBody.append(tableRow);

    const nameCell = document.createElement("td");
    nameCell.innerText = restaurant.name;

    const addressCell = document.createElement("td");
    addressCell.innerText = `${restaurant.address} ${restaurant.postalCode} ${restaurant.city}`;

    tableRow.append(nameCell, addressCell);
  }
}

function showRestaurantFetchingError(reason) {
  const errorMessage = `Failed to fetch restaurant data: ${reason}`;
  restaurantFetchingError.textContent = errorMessage;
  restaurantFetchingError.classList.remove("hidden");
}

async function fetchRestaurants() {
  return await fetchData(`${apiUrl}/restaurants`);
}

for (const closeButton of closeButtons) {
  closeButton.addEventListener("click", function (evt) {
    evt.currentTarget.parentElement.parentElement.close();
  });
}

modal.addEventListener("close", function (evt) {
  document.querySelector(".highlight")?.classList.remove("highlight");
});

fetchRestaurants().then(showRestaurants, showRestaurantFetchingError);
