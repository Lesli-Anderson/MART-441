$(document).ready(function () {
  $("button").click(function () {
    $("#travelInformation").load("data/travelInfo.txt", fadeText);
  });
});

function fadeText() {
  $("#travelInformation").fadeOut("slow").fadeIn("slow");
}
