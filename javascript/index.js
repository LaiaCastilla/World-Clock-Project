function updateTime() {
  //Los Angeles
  let losAngeles = document.querySelector("#LA");
  if (losAngeles) {
    let losAngelesDate = losAngeles.querySelector(".date");
    let losAngelesTime = losAngeles.querySelector(".time");
    losAngelesTime.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
    losAngelesDate.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");
  }
  //Barcelona
  let barcelona = document.querySelector("#bcn");
  if (barcelona) {
    let barcelonaDate = barcelona.querySelector(".date");
    let barcelonaTime = barcelona.querySelector(".time");
    barcelonaTime.innerHTML = moment()
      .tz("Europe/Andorra")
      .format("h:mm:ss [<small>]A[</small>]");
    barcelonaDate.innerHTML = moment()
      .tz("Europe/Andorra")
      .format("MMMM Do YYYY");
  }
  //Tokyo
  let tokyo = document.querySelector("#tokyo");
  if (tokyo) {
    let tokyoDate = tokyo.querySelector(".date");
    let tokyoTime = tokyo.querySelector(".time");
    tokyoTime.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("h:mm:ss [<small>]A[</small>]");
    tokyoDate.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
  }
}

function updateCity(event) {
  function updateTime() {
    let cityTZ = event.target.value;
    if (cityTZ === "current-location") {
      cityTZ = moment.tz.guess();
    }

    let cityName = cityTZ.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTZ).format("h:mm:ss");
    let cityAMPM = moment().tz(cityTZ).format("A");
    let cityDate = moment().tz(cityTZ).format("MMMM Do YYYY");

    let citiesSection = document.querySelector("#cities");
    citiesSection.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}<small>${cityAMPM}</small></div>
        </div>`;
  }
  updateTime();
  setInterval(updateTime, 1000);
}
updateTime();
setInterval(updateTime, 1000);

let selectCity = document.querySelector("#select-city");
selectCity.addEventListener("change", updateCity);
