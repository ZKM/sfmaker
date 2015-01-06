$(document).ready(function(){
    $('#submit').click(function(){
        // $strength1 = $('#strength1').val();
        // $strength2 = $('#strength2').val();
        // $strength3 = $('#strength3').val();
        // $strength4 = $('#strength4').val();
        // $strength5 = $('#strength5').val();
        
        var response = $("#strengthFinder").serialize();

        // findStrength($strength1,$strength2,$strength3,$strength4,$strength5,function(response){
        //     $('#thanks').html(JSON.stringify(response));
        // });

        $('#thanks').html(response); 
        

        return false;
    });
});



// function findStrength(strength_1,strength_2,strength_3,strength_4,strength_5,callback) {
//     var response;

//     response = JSON.stringify({
//         success: true,
//         user: {
//             strength_1: strength_1,
//             strength_2: strength_2,
//             strength_3: strength_3,
//             strength_4: strength_4,
//             strength_5: strength_5
//         }
//     });   
    
//     console.log(callback);
//     $.ajax({
// //        url: '/echo/json/',
//         url: './process.html',
//         type: "POST",
//         data: {
//             json: response
//         },
//         success: callback
//     });
// };