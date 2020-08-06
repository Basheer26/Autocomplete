//const { reset } = require("nodemon");

const searchLetter = document.querySelector(".search");
const form = document.querySelector(".submit");
const suggestion = document.querySelector("#suggestions");
const covidSearch = document.getElementById("covidSearch");
const search = covidSearch.querySelector("#search");
var fetchedData = {};
searchLetter.addEventListener("keyup", () => {
   // The fetch redirect to /autocomplete which is routed to filterHandler in the router
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
      // fetching the
      fetch("/data", {
         method: "POST",
         body: JSON.stringify({ countryname: country }),
      })
         .then((response) => {
            // axios result
            return response.json();
         })
         .then((data) => {
            console.log(data);
            // fetchedData = data;
            printCountryData(country, data);
         });
      // data access check outside fetch
      // console.log("outside fetch ", data);
   }
});

function printCountryData(country, getdata) {
   console.log("print data");
   const countryName = country;
   const totalCards = 6;
   const cardsInfo = {
      cards: {
         1: {
            title: "Total cases",
            number: `${getdata[0].cases}`,
         },
         2: {
            title: "Critical cases",
            number: "getdata[0].cases",
         },
         3: {
            title: "Total death",
            number: "getdata[0].cases",
         },
         4: {
            title: "Active cases per one million",
            number: "getdata[0].cases",
         },
         5: {
            title: "Population",
            number: "getdata[0].cases",
         },
         6: {
            title: "Recovered",
            number: "getdata[0].cases",
         },
      },
   };
   // building card in search result div
   const wrapper = document.createElement("DIV");
   wrapper.className = "wrapper";
   const searchResult = document.getElementById("resultttt");
   // <h2>COVID-19 cases in <span id="country">${countryName} updated</span><img src="" id="flag"></h2>
   // const title = document.createElement("h2");
   // flag
   searchResult.appendChild(wrapper);
   for (var i = 1; i <= 1; i++) {
      var card = document.createElement("div");
      card.setAttribute("class", `card card${i}`);
      var cardTitle = document.createElement("h5");
      cardTitle.textContent = cardsInfo.cards[i].title;
      var numbers = document.createElement("span");
      numbers.textContent = cardsInfo.cards[i].number;
      wrapper.appendChild(card);
      card.appendChild(cardTitle);
      card.appendChild(numbers);
   }

   // searchResult.innerHTML = `
   // <div classe="container">
   // <h2>COVID-19 cases in <span id="country">${countryName} updated</span><img src="" id="flag"></h2>
   //       <div class="board">
   //         <!-- 1- total cases -->
   //         <div class="card tc">
   //           <i class="fa fa-fa-th-list"></i>
   //             <h5>Total cases</h5>
   //             <span id="cases">${getdata[0].cases}</span>
   //         </div>
   //         <!-- 2- new cases -->
   //         <div class="card nc">
   //           <i class="fa fa-fa-th-list"></i>
   //             <h5>Critical</h5>
   //             <span id="cases">${getdata[0].critical}</span>
   //         </div>
   //         <!-- 3- total death -->
   //         <div class="card td">
   //           <i class="fa fa-fa-th-list"></i>
   //             <h5>Total death</h5>
   //             <span id="cases">${getdata[0].deaths}</span>
   //         </div>
   //         <!-- 4- continent -->
   //         <div class="card c">
   //           <i class="fa fa-fa-th-list"></i>
   //             <h5>Active Per One Million</h5>
   //             <span id="cases">${getdata[0].activePerOneMillion}</span>
   //         </div>
   //         <!-- 5- population -->
   //         <div class="card p">
   //           <i class="fa fa-fa-th-list"></i>
   //             <h5>Population</h5>
   //             <span id="cases">${getdata[0].population}</span>
   //         </div>
   //         <!-- 6- Recovered -->
   //         <div class="card dp">
   //           <i class="fa fa-fa-th-list"></i>
   //             <h5>Recovered</h5>
   //             <span id="cases">${getdata[0].recovered}</span>
   //         </div>
   //       <!-- end of board -->
   //       </div>
   //    `;
}

// IMPLEMENT CSS GRID

//    searchResult.innerHTML = `
// <div classe="container">
// <h2>COVID-19 cases in <span id="country">${countryName} at 29/07/2020</span><img src="" id="flag"></h2>
//       <div class="board">
//         <!-- 1- total cases -->
//         <div class="card tc">
//           <i class="fa fa-fa-th-list"></i>
//             <h5>Total cases</h5>
//             <span id="cases">${countryStats[0].total_cases}</span>
//         </div>
//         <!-- 2- new cases -->
//         <div class="card nc">
//           <i class="fa fa-fa-th-list"></i>
//             <h5>New cases</h5>
//             <span id="cases">${countryStats[0].new_cases}</span>
//         </div>
//         <!-- 3- total death -->
//         <div class="card td">
//           <i class="fa fa-fa-th-list"></i>
//             <h5>Total death</h5>
//             <span id="cases">${countryStats[0].total_deaths}</span>
//         </div>
//         <!-- 4- continent -->
//         <div class="card c">
//           <i class="fa fa-fa-th-list"></i>
//             <h5>Continent</h5>
//             <span id="cases">${countryStats[0].continent}</span>
//         </div>
//         <!-- 5- population -->
//         <div class="card p">
//           <i class="fa fa-fa-th-list"></i>
//             <h5>Population</h5>
//             <span id="cases">${countryStats[0].population}</span>
//         </div>
//         <!-- 6- Diabetes Prevalence -->
//         <div class="card dp">
//           <i class="fa fa-fa-th-list"></i>
//             <h5>Diabetes Prevalence</h5>
//             <span id="cases">${countryStats[0].diabetes_prevalence}</span>
//         </div>

//       <!-- end of board -->
//       </div>

//    `;
// }
