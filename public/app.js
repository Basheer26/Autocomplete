const search = document.querySelector(".search");
const form = document.querySelector(".submit");
const price = document.querySelector(".price");
const instructions = document.querySelector(".instructions");
const suggestion = document.querySelector("#suggestions");

// fetch("../flowers.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json.flowerlist[0].name);

//     search.textContent = json.flowerlist.name;
//     console.log(search);
//   })

//   .catch((error) => {
//     console.error(error);
//   });

function searchFlowerData() {
  let data = [
    {
      category: "Shrubs",
      price: 15.99,
      instructions:
        "Large double. Good grower, heavy bloomer. Early to mid-season, acid loving plants. Plant in moist well drained soil with pH of 4.0-5.5.",
      photo: "california_snow.jpg",
      name: "Azalea",
      productId: 1,
    },
    {
      category: "Shrubs",
      price: 33.99,
      instructions:
        "Beautiful large royal purple flowers adorn attractive satiny green leaves that turn orange\\/red in cold weather. Grows to up to 18 feet, or prune annually to shorten.",
      photo: "princess_flower.jpg",
      name: "Tibouchina Semidecandra",
      productId: 2,
    },
  ];
  return data;
}
search.addEventListener("input", () => {
  const dataSug = searchFlowerData(search.value);
  dataSug.forEach((element) => {
    let newOption = document.createElement("option");
    newOption.value = element.name;
    newOption.textContent = element.name;

    suggestions.appendChild(newOption);
  });
});

// form.addEventListener("click", () => {
//   event.preventDefault();

//   price.textContent = searchFlowerData(search.value).price;
//   instructions.textContent = searchFlowerData(search.value).instructions;
// });
