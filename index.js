document.getElementById('marksForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var rollNo = document.getElementById('rollNo').value;
    var english = parseInt(document.getElementById('english').value);
    var math = parseInt(document.getElementById('math').value);
    var science = parseInt(document.getElementById('science').value);
    var physics = parseInt(document.getElementById('physics').value);
    var chemistry = parseInt(document.getElementById('chemistry').value);
    var total_marks = 500;

    var obtained_marks = (english + math + science + physics + chemistry);
    var percentage = (obtained_marks / total_marks) * 100;

    if (percentage >= 80 && percentage <= 100) {
        alert("NAME:" + firstName + "\nROLL NO: " + rollNo + "\nTOTAL MARKS: " + total_marks + "\nOBTAINED MARKS: " + obtained_marks + "\nPERCENTAGE: " + percentage.toFixed(2) + "%\nGRADE: A+");
    } else if (percentage >= 70 && percentage < 80) {
        alert("NAME: " + firstName + "\nROLL NO: " + rollNo + "\nTOTAL MARKS: " + total_marks + "\nOBTAINED MARKS: " + obtained_marks + "\nPERCENTAGE: " + percentage.toFixed(2) + "%\nGRADE: B");
    } else if (percentage >= 60 && percentage < 70) {
        alert("NAME: " + firstName + "\nROLL NO: " + rollNo + "\nTOTAL MARKS: " + total_marks + "\nOBTAINED MARKS: " + obtained_marks + "\nPERCENTAGE: " + percentage.toFixed(2) + "%\nGRADE: C");
    } else if (percentage >= 50 && percentage < 60) {
        alert("NAME: " + firstName + "\nROLL NO: " + rollNo + "\nTOTAL MARKS: " + total_marks + "\nOBTAINED MARKS: " + obtained_marks + "\nPERCENTAGE: " + percentage.toFixed(2) + "%\nGRADE: D");
    } else {
        alert("NAME: " + firstName + "\nROLL NO: " + rollNo + "\nTOTAL MARKS: " + total_marks + "\nOBTAINED MARKS: " + obtained_marks + "\nPERCENTAGE: " + percentage.toFixed(2) + "%\nGRADE: Fail");
    }
});