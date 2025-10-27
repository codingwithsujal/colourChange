const buttons = document.querySelectorAll(".buttons");
const body = document.querySelector("body");
const headings = document.querySelector(".mainHeading");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "Blue") {
      body.style.backgroundColor = e.target.id;
      headings.style.color = "white";
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
      headings.style.color = "white";
    }
    if (e.target.id === "White") {
      body.style.backgroundColor = e.target.id;
      headings.style.color = "black";
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
      headings.style.color = "white";
    }
    if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
      headings.style.color = "white";
    }
    if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id;
      headings.style.color = "white";
    }
  });
});
