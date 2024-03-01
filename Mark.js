// Function to convert mark to grade and display it on the webpage
function MarkToGrade() {
    var Student_Mark = document.getElementById("inputValue").value;
    var gradeDisplay = document.getElementById("gradeDisplay");
    
    // Check if the input is not empty, is a number, and is an integer
    if (Student_Mark.trim() !== "" && !isNaN(Student_Mark) && Number.isInteger(parseFloat(Student_Mark))) {
        var mark = parseFloat(Student_Mark);
        
        // Convert mark to grade
        if (mark > 90) {
            gradeDisplay.textContent = "Grade A";
        } else if (mark > 80) {
            gradeDisplay.textContent = "Grade B";
        } else if (mark > 70) {
            gradeDisplay.textContent = "Grade C";
        } else if (mark > 50) {
            gradeDisplay.textContent = "Grade D";
        } else if (mark > 100 & mark < 0) {
            gradeDisplay.textContent = "That's not within the range";
        } else {
            gradeDisplay.textContent = "Grade F";
        }
    } else {
        gradeDisplay.textContent = "Invalid input. Please enter a valid integer.";
    }
}

// Get the button element
var button = document.getElementById("myButton");

// Add click event listener to the button
button.addEventListener("click", MarkToGrade);
