let travel = {
  code: "LAS",
  airport: "Las Vegas",
  Time: {
    Label: "2015/09",
    Month: "9",
    Month Name: "September",
    Year: "2015"
};

$(function () {
  $("button").click(function () {
    showTravelInfo();
  });
});

function showTravelInfo() {
  $("#travelInformation").html(
    "Airport: " +
      travel.airport +
      "<br>Code:" +
      travel.code +
      "<br>Name:" +
      travel.code.name +
  );
}
