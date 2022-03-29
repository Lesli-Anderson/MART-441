let travel = {
  code: "LAS",
  airport: "Las Vegas",
  Time: {
    Label: "Bob",
    lastName: "Jones",
  },
  sizes: ["small", "medium", "large", "x-large"],
};

$(function () {
  $("button").click(function () {
    showTravelInfo();
  });
});

function showTravelInfo() {
  $("#travelInformation").html(
    "Manufacturer: " +
      travel.manufacturer +
      "<br>Model:" +
      bike.model +
      "<br>First Name:" +
      bike.owner.firstName +
      "<br>Last Name:" +
      bike.owner.lastName +
      "<br>Sizes Available:<br>" +
      bike.sizes[0] +
      "<br>" +
      bike.sizes[1] +
      "<br>" +
      bike.sizes[2] +
      "<br>" +
      bike.sizes[3]
  );
}
