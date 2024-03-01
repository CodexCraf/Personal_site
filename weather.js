// Function to convert mark to grade and display it on the webpage
var myFunction = function() {
    var Degrees = $("#DegreeValue").val();
    var weatherDisplay = $("#weatherDisplay");
    
    // Check if the input is not empty, is a number, and is an integer
    if ($.trim(Degrees) !== "" && !isNaN(Degrees) && Number.isInteger(parseFloat(Degrees))) {
        var degree = parseFloat(Degrees);
        
        // Convert mark to grade
        var ans = degree * -17.2222222;
        var ans2 = ans * 274.15;
        weatherDisplay.text("The value in Celcuis is: " + ans + ", the Value in Kelvin is: " + ans2);
    }
}

// Get the button element
var button = $("#myButton");

// Add click event listener to the button
button.on("click", myFunction);
