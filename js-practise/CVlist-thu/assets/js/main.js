const menuExpand = document.querySelector(".fa-angle-right");
const menuClose = document.querySelector(".fa-angle-left");

const sideBar = document.querySelector(".side-bar");
const sideText = document.querySelectorAll(".side-text");
const view = document.querySelector(".cv-view");
// const main = document.querySelector(".main");
// console.log(main.style.width);

const checkBoxes = document.querySelectorAll(".check-box");
const checkAll = document.querySelector(".select-all");

// console.log(checkBoxes);

checkAll.children[0].addEventListener("click", () => {
  if (checkAll.getAttribute("data-check") != "true") {
    checkAll.setAttribute("data-check", "true");
    checkAll.children[0].classList.add("fa-check");
    checkAll.children[0].classList.add("fa-solid");
    for (let i = 1; i < checkBoxes.length; i++) {
      //   console.log(x.closest(".select"));
      if (
        checkBoxes[i].closest(".select").getAttribute("data-check") != "true"
      ) {
        checkBoxes[i].classList.add("fa-check");
        checkBoxes[i].classList.add("fa-solid");
        checkBoxes[i].closest(".select").setAttribute("data-check", "true");
      }
    }
  } else {
    checkAll.setAttribute("data-check", "false");
    checkAll.children[0].classList.remove("fa-check");
    checkAll.children[0].classList.remove("fa-solid");
    for (let i = 1; i < checkBoxes.length; i++) {
      if (
        checkBoxes[i].closest(".select").getAttribute("data-check") == "true"
      ) {
        checkBoxes[i].classList.remove("fa-check");
        checkBoxes[i].classList.remove("fa-solid");
        checkBoxes[i].closest(".select").setAttribute("data-check", "false");
      }
    }
  }
});

for (let i = 1; i < checkBoxes.length; i++) {
  let check = checkBoxes[i].closest(".select");
  checkBoxes[i].addEventListener("click", () => {
    if (check.getAttribute("data-check") != "true") {
      checkBoxes[i].classList.add("fa-check");
      checkBoxes[i].classList.add("fa-solid");
      check.setAttribute("data-check", "true");
    } else {
      checkBoxes[i].classList.remove("fa-check");
      checkBoxes[i].classList.remove("fa-check");
      check.setAttribute("data-check", "false");
    }
  });
}

menuExpand.addEventListener("click", () => {
  menuExpand.classList.add("close");
  menuClose.classList.remove("close");
  sideBar.style.width = "300px";
  view.style.setProperty("width", "calc(100% - 300px)");
  view.style.setProperty("right", "-300px");
  for (const x of sideText) {
    x.classList.add("open");
  }
});

menuClose.addEventListener("click", () => {
  menuClose.classList.add("close");
  menuExpand.classList.remove("close");
  view.style.setProperty("width", "calc(100% - 100px)");
  view.style.setProperty("right", "-100px");
  sideBar.style.width = "100px";
  for (const x of sideText) {
    x.classList.remove("open");
  }
});
