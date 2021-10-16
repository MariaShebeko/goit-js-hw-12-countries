import countryCard from "./templates/country-card.hbs";

const refs = {
  container: document.querySelector(".container"),
};

fetch("https://restcountries.com/v2/all")
  .then((response) => {
    return response.json();
  })
  .then((country) => {
    console.log(country);

    const markup = countryCard(country);
    refs.container.insertAdjacentHTML("beforeend", markup);
    console.log(markup);
  })
  .catch((error) => {
    console.log(error);
  });
