const display = document.querySelector("#input-field");
const button = document.querySelectorAll("button");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "equal") {
      display.value = eval(display.value.replace(",", ".")).toLocaleString();
    } else if (btn.id === "AC") {
      display.value = "";
    } else if (btn.id == "C") {
      display.value = display.value.slice(0, -1);
    } else {
      if (btn.id === ".") {
        if (!display.value.includes(".")) {
          display.value += ".";
        }
      } else {
        display.value += btn.id;
      }
    }
  });
});
