$(document).ready(function () {
  $("button").click(function () {
    $("#travelInformation").load("data/travel.json", function (responseText) {
      var travel = JSON.parse(responseText);
      $("#travelInformation").html(
        "Airport: " +
          travel.airport +
          "<br>Code:" +
          travel.code +
          "<br>First Name:" +
          travel.name.time +
        
         
      );
    });
  });
});

/* function fadeText()
{
    $("#travelInformation").fadeOut("slow").fadeIn("slow");
}
*/
