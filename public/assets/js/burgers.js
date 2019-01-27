$(function (){
    $(".devour-burger").on('click', function(event){
        var id=$(event.currentTarget).burger_data("id");
        var newDevour = $(event.currentTarget).burger_data("newdevour");

        var newDevourState = {
            devoured: newDevour
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function(){
                console.log("Changed devoured to", newDevour);
                location.reload();
            }
        );
    });

    $(".create-form").on('submit', function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: true
        }

        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("new burger created");

            location.reload();
        })
    });
});