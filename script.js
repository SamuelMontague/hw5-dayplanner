var date = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(date);


$(document).ready(function (){
    $('#button-addon2').on("click", function(){
        var text = $(this).siblings('.form-control').val();
        var time = $(this).parent().attr("id")

        localStorage.setItem(text, time);
    })

    function currentTime() {
        var timeNow = moment().hour();

        $(".time-block").each(function (){
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
        

        if (timeBlock < timeNow){
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }

        else if (timeBlock === timeNow){
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
    }
        
    $("#9am .form-control").val(localStorage.getItem("9am"));
    $("#10am .form-control").val(localStorage.getItem("10am"));
    $("#11am .form-control").val(localStorage.getItem("11am"));
    $("#12pm .form-control").val(localStorage.getItem("12pm"));
    $("#1pm .form-control").val(localStorage.getItem("1pm"));
    $("#2pm .form-control").val(localStorage.getItem("2pm"));
    $("#3pm .form-control").val(localStorage.getItem("3pm"));
    $("#4pm .form-control").val(localStorage.getItem("4pm"));
    $("#5pm .form-control").val(localStorage.getItem("5pm"));



    currentTime();
})

