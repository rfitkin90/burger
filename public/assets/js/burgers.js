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

   $('.devour-btn').on('click', function (e) {
      e.preventDefault();
      console.log('hello world');
      var id = $(this).attr('data-id');
      var newBurgState = {
         devoured: true
      };

      $.ajax("/api/burgers/", {
         type: "PUT",
         data: newBurgState
      }).then(
         function () {
            console.log("created new burg");
            // Reload the page to get the updated list
            location.reload();
         }
      );
      // $.put(`api/burgers/${id}`, { data: newBurgState }, function (result) {
      //    console.log("burger was eaten");
      //    location.reload();
      // })
   })

});