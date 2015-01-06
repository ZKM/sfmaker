$(document).ready(function(){
    $('#submit').click(function(){
        var response = $("#strengthFinder").serialize();

        $('#thanks').html(response); 
        
        return false;
    });
});
