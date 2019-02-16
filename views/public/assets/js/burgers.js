$(document).ready(function () {

   $('#submit-burger').on('click', function (e) {
      e.preventDefault();

      var newBurg = {
         name: $('#burg-name-input').val().trim()
      }

      // $.post("/api/burgers", { data: newBurg }, function (result) {
      //    console.log('created new burger');
      //    location.reload();
      // });

      $.ajax("/api/burgers", {
         type: "POST",
         data: newBurg
      }).then(
         function () {
            console.log("created new burg");
            // Reload the page to get the updated list
            location.reload();
         }
      );

   });

});

