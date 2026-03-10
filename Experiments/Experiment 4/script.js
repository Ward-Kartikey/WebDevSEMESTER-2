function calculateMarks() {
  var n = parseInt(document.getElementById("numSubjects").value);

  var total = 0;
  var marksList = "";

  for (var i = 1; i <= n; i++) {
    var mark = parseInt(prompt("Enter marks for subject " + i)) || 0;
    total = total + mark;
    marksList = marksList + "Subject " + i + ": " + mark + "<br>";
  }

  // Grade based on total out of 100
  var grade;
  if (total >= 90) {
    grade = "A";
  } else if (total >= 75) {
    grade = "B";
  } else if (total >= 50) {
    grade = "C";
  } else {
    grade = "F";
  }

  document.getElementById("output").innerHTML =
    marksList + "<br>Total Marks: " + total + "<br>Grade: " + grade;
}