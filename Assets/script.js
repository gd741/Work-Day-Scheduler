// Variables
var saveBtn = $(".saveBtn");


// Functions

// Displays Date,Month,Time,Year at top of page
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// Color-coded time blocks 
function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        // Console log each time block

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// Save button for time block
saveBtn.on("click", function() {

    // console.log(this); //save button
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    // Text for event saved in local storage
    localStorage.setItem(time, plan);
});

// Events saved after refresh
function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        // console.log(this);
        // console.log(currHour);

        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}

// Call functions

timeBlockColor();
usePlanner();



