function updateTime() {
  //Los Angeles
  let losAngeles = document.querySelector("#LA");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTime = losAngeles.querySelector(".time");
  losAngelesTime.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");
  losAngelesDate.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  //Barcelona
  let barcelona = document.querySelector("#bcn");
  let barcelonaDate = barcelona.querySelector(".date");
  let barcelonaTime = barcelona.querySelector(".time");
  barcelonaTime.innerHTML = moment()
    .tz("Europe/Andorra")
    .format("h:mm:ss [<small>]A[</small>]");
  barcelonaDate.innerHTML = moment()
    .tz("Europe/Andorra")
    .format("MMMM Do YYYY");
  //Tokyo
  let tokyo = document.querySelector("#tokyo");
  let tokyoDate = tokyo.querySelector(".date");
  let tokyoTime = tokyo.querySelector(".time");
  tokyoTime.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>]A[</small>]");
  tokyoDate.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
}
updateTime();
setInterval(updateTime, 1000);
