// to show the day and date at the top of the page
let d = new Date()
document.getElementById("currentDay").innerHTML = d.toString();

// wrap everything in this function
$(document).ready(function() {

// jquery save button
    $(".saveBtn").on("click", function(){
    
        var activity = $(this).siblings(".description").val();

        var time = $(this).parent().attr("id")

// save to local storage
        localStorage.setItem(time, activity);
        console.log(localStorage)
    });

// clear items from local storage
    
        

// color code text area dependant on the time; past, present, future
    function checkHour() {
        var momentHour = moment().hours();
        console.log(momentHour)

        $(".timeblock").each(function(){
            var calendar = parseInt($(this).attr("id").split("-")[1]);
            console.log(calendar)
            if(momentHour > calendar) {
                $(this).addClass("past")
            } else if(momentHour === calendar) {
                $(this).removeClass("past");
                $(this).addClass("present")
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }

        })

    }

// get item local storage
    checkHour();

    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});

