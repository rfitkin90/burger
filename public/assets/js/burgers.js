$(document).ready(function () {

   $('#submit-burger').on('click', function (e) {
      e.preventDefault();

      var newBurg = {
         name: $('#burg-name-input').val().trim()
      }

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

   $('.devour-btn').on('click', function (e) {
      e.preventDefault();
      var id = $(this).attr('data-id');
      var newBurgState = {
         devoured: true
      };

      $.ajax("/api/burgers/" + id, {
         type: "PUT",
         body: newBurgState
      }).then(
         function () {
            console.log(`devoured burg with id: ${id}`);
            // Reload the page to get the updated list
            location.reload();
         }
      );
   })

   $('.discard-btn').on('click', function (e) {
      e.preventDefault();
      var id = $(this).attr('data-id');

      $.ajax("/api/burgers/" + id, {
         type: "DELETE"
      }).then(
         function () {
            console.log(`devoured burg with id: ${id}`);
            // Reload the page to get the updated list
            location.reload();
         }
      );
   })

});