const icon = document.querySelector("#dark-theme-icon");

const toggleIconAnimation = (event) => {
  event.target.classList.toggle("fa-fade");
};
icon.addEventListener("pointerenter", toggleIconAnimation);
icon.addEventListener("pointerleave", toggleIconAnimation);
