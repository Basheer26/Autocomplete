var url = "/autocomplete";
var headers = {
   "Content-Type": "application/json",
};
var data = {
   name: "Wade Wilson",
   occupation: "Murderer",
   age: "30",
};
fetch(url, { method: "POST", headers: headers, body: data })
   .then((res) => {
      return res.json();
   })
   .then((json) => {
      console.log(json);
      // Do something with the returned data.
   });
