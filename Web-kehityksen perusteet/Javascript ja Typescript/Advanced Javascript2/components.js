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
    let allDiets;
    if (typeof course.diets === "string") {
      allDiets = course.diets.split(",");
    } else {
      allDiets = course.diets;
    }

    const dietEmojis = allDiets.map((diet) => {
      switch (diet.trim()) {
        case "*":
          return "*️⃣"; // Kaikki?
        case "A":
          return "⚠️"; // Sisältää allergeeneja
        case "G":
          return "🌾"; // Gluteeniton
        case "ILM":
          return "🌍"; // Ilmastoystävällinen
        case "L":
          return "🥛🚫"; // Laktoositon
        case "M":
          return "🥛❌"; // Maidoton
        case "Veg":
          return "🥦"; // Vegaaninen
        case "VL":
          return "🥛🔽"; // Vähälaktoosinen
        case "VS":
          return "🧄"; // Valkosipuli
        default:
          return "❓";
      }
    });

    menuHtml += `
    <tr>
      <td>${course.name}</td>
      <td>${course.price}</td>
      <td>${dietEmojis.join("|")}</td>
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
