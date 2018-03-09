//app.js
$(document).ready(function(){
    var myul = $("#myUL");
    var name = $('#myInput').val();
    var id = $('#myInput').val();
    var myArray = [];
    // DISPLAYING list
    $.ajax({
        url: 'index.json',
        type: "GET",
        dataType: 'JSON',

        success: function(response){
            console.log("Sucess!!", response);
            if(response.TodoList) {
                myArray = response.TodoList;
                for(var i = 0; i < response.TodoList.length; i++){
                    console.log('the item is: ', response.TodoList[i].name);
                    // var item = '<li>'+response.TodoList[i].name+'</li>';
                    $("#myUL").append('<li>'+response.TodoList[i].name+'<span class="close">'+"\u00D7"+'</span>'+'</li>');
                    // myUL.append(item);

                }   
            }
            // if (response.success) {
            //     var todoList = response.TodoList;
            //     for(var i = 0; i < todoList.length; i++){

            //         var item =
            //         '<li>'+todoList[i].name+'</li>'+
            //         '<span class="close">'+x+'</span>'
            //         ;
            //         myUL.append(listItem);
            //     }
    
            // }
            // else{
            //     alert("Oops, an error occured fetching the profiles.");
            // }
        },
        error: function(err) {
            console.log('this is error: ', err);
        }
    });
    // adding list
    $(".addBtn").on('click', function(){
        var dataVal = {
            id: id,
            name: name
        }

        $.ajax({
            url: 'index.json',
            type: "POST",
            dataType: 'JSON',
            data: JSON.stringify(dataVal), 

            success: function(data){
                console.log(data);
                $("#myUL").append('<li>'+ dataVal.name+'<span class="close">'+"\u00D7"+'</span>'+'</li>');
                $("ul").on("click","span",function(event){
                        $(this).parent().remove();
                      });
            },
        
            error: function(err) {
                console.log('this is error: ', err);
             }

        });


        
      }); 
    //   //deleting the item
    //  

});
        
        