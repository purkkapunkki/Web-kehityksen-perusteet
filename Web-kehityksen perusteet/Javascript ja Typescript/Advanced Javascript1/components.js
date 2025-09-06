const restaurantRow = (restaurant) => {
  const { name, address, postalCode, city } = restaurant;
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    <td>${name}</td>
    <td>${address} ${postalCode} ${city}</td>
  `;
  return tableRow;
};

const restaurantModal = (restaurant, menu) => {
  const { name, address, postalCode, city, phone, company } = restaurant;
  const { courses } = menu;

  let menuHtml = "";
  courses.forEach((course) => {
    menuHtml += `
    <tr>
      <td>${course.name}</td>
      <td>${course.price}</td>
      <td>${course.diets}</td>
    </tr>
  `;
  });

  return `
    <h3>${name}</h3>
    <address>
      ${address} <br>
      ${postalCode} ${city} <br>
      ${phone} <br>
      ${company} <br>
    </address>
    <h4>Today's menu</h4>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Diets</td>
        </tr>
      </thead>
      <tbody>
        ${menuHtml}
      </tbody>
    </table>
  `;
};

export { restaurantRow, restaurantModal };
