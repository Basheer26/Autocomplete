//const { reset } = require("nodemon");

const searchLetter = document.querySelector(".search");
const form = document.querySelector(".submit");
const suggestion = document.querySelector("#suggestions");
const covidSearch = document.getElementById("covidSearch");
const search = covidSearch.querySelector("#search");
var dataFetch = {};
searchLetter.addEventListener("keyup", () => {
   fetch("/autocomplete", {
      method: "POST",
      // parsedBody.search takes search from { search: search.value } and returns search.value
      body: JSON.stringify({ search: searchLetter.value }),
   })
      .then((response) => {
         return response.json();
      })
      .then((data) => {
         while (suggestions.firstChild) {
            suggestions.removeChild(suggestions.firstChild);
         }
         data.forEach((element) => {
            let newOption = document.createElement("option");
            newOption.value = element.location;
            // newOption.textContent = element.location;

            suggestions.appendChild(newOption);
         });
         dataFetch = data;
      })

      .catch((error) => {
         console.error(error);
      });
});
//getCountryCovidData
covidSearch.addEventListener("submit", (e) => {
   e.preventDefault();
   const country = search.value;
   console.log("country search value: ", country);
   covidSearch.reset();
   if (country === "") {
      // make an html element instead of log
      console.log("please enter a country");
   } else {
      console.log(country);
      getCountryCovidData(country, dataFetch);
   }
});

function getCountryCovidData(country, getdata) {
   const searchResult = document.querySelector(".search_results");
   const countryName = country;
   const countryStats = getdata.filter(
      (countryData) =>
         countryData.location.toLowerCase() === countryName.toLowerCase()
   );

   searchResult.innerHTML = `
<div classe="container">
<h2>COVID-19 cases in <span id="country">${countryName} at 29/07/2020</span><img src="" id="flag"></h2>
      <div class="board">
        <!-- 1- total cases -->
        <div class="card tc">
          <i class="fa fa-fa-th-list"></i>
            <h5>Total cases</h5>
            <span id="cases">${countryStats[0].total_cases}</span>
        </div>
        <!-- 2- new cases -->
        <div class="card nc">
          <i class="fa fa-fa-th-list"></i>
            <h5>New cases</h5>
            <span id="cases">${countryStats[0].new_cases}</span>
        </div>
        <!-- 3- total death -->
        <div class="card td">
          <i class="fa fa-fa-th-list"></i>
            <h5>Total death</h5>
            <span id="cases">${countryStats[0].total_deaths}</span>
        </div>
        <!-- 4- continent -->
        <div class="card c">
          <i class="fa fa-fa-th-list"></i>
            <h5>Continent</h5>
            <span id="cases">${countryStats[0].continent}</span>
        </div>
        <!-- 5- population -->
        <div class="card p">
          <i class="fa fa-fa-th-list"></i>
            <h5>Population</h5>
            <span id="cases">${countryStats[0].population}</span>
        </div>
        <!-- 6- Diabetes Prevalence -->
        <div class="card dp">
          <i class="fa fa-fa-th-list"></i>
            <h5>Diabetes Prevalence</h5>
            <span id="cases">${countryStats[0].diabetes_prevalence}</span>
        </div>

      <!-- end of board -->
      </div>

   `;
}
