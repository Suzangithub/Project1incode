const form = document.getElementById("form");
const lname = document.getElementById("lname");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (lname === "") alert("name must not be empty");
});
