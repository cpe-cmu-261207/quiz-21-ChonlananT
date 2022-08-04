callApi();
const tGender = document.getElementById("span-gender-icon");
const tImage = document.getElementById("img-profile");
const tName = document.getElementById("p-name");
const tEmail = document.getElementById("p-email");
const tAddress = document.getElementById("p-address");
const btn = document.getElementById("btn-random");

let gender;

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  if (resp.data.results[0].gender == "female") {
    tGender.innerText = "👩";
  } else tGender.innerText = "👨";

  tImage.src = resp.data.results[0].picture.large;
  tName.innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  tEmail.innerText = resp.data.results[0].email;

  tAddress.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country +
    " " +
    resp.data.results[0].location.postcode;

  btn.onclick = () => {
    callApi();
  };
}
