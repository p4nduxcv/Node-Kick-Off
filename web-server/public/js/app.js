console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#mid1");
const messageTwo = document.querySelector("#mid2");

messageOne.textContent = "";
messageTwo.textContent = "Processing....";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(`error`, data.error);
        messageTwo.textContent = data.error;
      } else {
        console.log(data.location);
        console.log(data.forecast);
        messageTwo.textContent =
          "Location :" + data.location + " ForeCast :" + data.forecast;
      }
    });
  });
});
