//Displays date
$(document).ready(function() {
  var now = moment().format("dddd, MMMM DD YYYY");
  $("#currentDate").html(now);
});

// Listed variables for the function setColor().
var hour = moment().format("H"); 
var currentHour = parseInt(hour);

//allows background color to change 
$(".row").toArray().forEach(row => {
  var timeBlockRow = row.id, rowHour;
  if (timeBlockRow) {
      rowHour = parseInt(timeBlockRow);
  }
//colors for past, present, and future times
  if (rowHour) {  
      if (currentHour === rowHour) {
          setColor(row, "Thistle");
  }   else if ((currentHour < rowHour)) {
          setColor(row, "PowderBlue");
  }   else if ((currentHour > rowHour)) {
          setColor(row, "PaleGreen");
  }
}
});

//allows to change color depending on time
function setColor(element, color) {
  element.style.backgroundColor = color;
};

//adding text to 8AM
if(localStorage.getItem("8AMToDos") !="") {
  $("#8AMEntry").val(localStorage.getItem("8AMToDos"));
}

$("#SaveButton1").click(function () {
  if (window.localStorage) {
      localStorage.setItem("8AMToDos", $("#8AMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

//adding text to 830AM
if(localStorage.getItem("830AMToDos") !="") {
  $("#830AMEntry").val(localStorage.getItem("830AMToDos"));
}

$("#SaveButton2").click(function () {
  if (window.localStorage) {
      localStorage.setItem("830AMToDos", $("#830AMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

//adding text to 9AM
if(localStorage.getItem("9AMToDos") !="") {
  $("#9AMEntry").val(localStorage.getItem("9AMToDos"));
}

$("#SaveButton3").click(function () {
  if (window.localStorage) {
      localStorage.setItem("9AMToDos", $("#9AMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

//adding text to 930AM
if(localStorage.getItem("930AMToDos") !="") {
  $("#930AMEntry").val(localStorage.getItem("930AMToDos"));
}

$("#SaveButton4").click(function () {
  if (window.localStorage) {
      localStorage.setItem("930AMToDos", $("#930AMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// adding text to 10AM
if(localStorage.getItem("10AMToDos") !="") {
  $("#10AMEntry").val(localStorage.getItem("10AMToDos"));
}

$("#SaveButton5").click(function () {
  if (window.localStorage) {
      localStorage.setItem("10AMToDos", $("#10AMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

//adding text to 10:30AM
if(localStorage.getItem("1030AMToDos") !="") {
  $("#1030AMEntry").val(localStorage.getItem("1030AMToDos"));
}

$("#SaveButton6").click(function () {
  if (window.localStorage) {
      localStorage.setItem("1030AMToDos", $("#1030AMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

//adding text to 11AM
if(localStorage.getItem("11AMToDos") !="") {
  $("#11AMEntry").val(localStorage.getItem("11AMToDos"));
}

$("#SaveButton7").click(function () {
  if (window.localStorage) {
      localStorage.setItem("11AMToDos", $("#11AMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// adding text to 11:30 AM
if(localStorage.getItem("1130AMToDos") !="") {
  $("#1130AMEntry").val(localStorage.getItem("1130AMToDos"));
}

$("#SaveButton8").click(function () {
  if (window.localStorage) {
      localStorage.setItem("1130AMToDos", $("#1130AMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// adding text to 12 PM
if(localStorage.getItem("12PMToDos") !="") {
  $("#12PMEntry").val(localStorage.getItem("12PMToDos"));
}

$("#SaveButton9").click(function () {
  if (window.localStorage) {
      localStorage.setItem("12PMToDos", $("#12PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// adding text to 12:30 PM
if(localStorage.getItem("1230PMToDos") !="") {
  $("#1230PMEntry").val(localStorage.getItem("1230PMToDos"));
}

$("#SaveButton10").click(function () {
  if (window.localStorage) {
      localStorage.setItem("1230PMToDos", $("#1230PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// adding text to 1 PM
if(localStorage.getItem("1PMToDos") !="") {
  $("#1PMEntry").val(localStorage.getItem("1PMToDos"));
}

$("#SaveButton11").click(function () {
  if (window.localStorage) {
      localStorage.setItem("1PMToDos", $("#1PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// adding text to 1:30 PM
if(localStorage.getItem("130PMToDos") !="") {
  $("#130PMEntry").val(localStorage.getItem("130PMToDos"));
}

$("#SaveButton12").click(function () {
  if (window.localStorage) {
      localStorage.setItem("130PMToDos", $("#130PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

//adding text to 2PM
if(localStorage.getItem("2PMToDos") !="") {
  $("#2PMEntry").val(localStorage.getItem("2PMToDos"));
}

$("#SaveButton13").click(function () {
  if (window.localStorage) {
      localStorage.setItem("2PMToDos", $("#2PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// adding text to 2:30 PM
if(localStorage.getItem("230PMToDos") !="") {
  $("#230PMEntry").val(localStorage.getItem("230PMToDos"));
}

$("#SaveButton14").click(function () {
  if (window.localStorage) {
      localStorage.setItem("230PMToDos", $("#230PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// adding text to 3PM
if(localStorage.getItem("3PMToDos") !="") {
  $("#3PMEntry").val(localStorage.getItem("3PMToDos"));
}

$("#SaveButton15").click(function () {
  if (window.localStorage) {
      localStorage.setItem("3PMToDos", $("#3PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// adding text to 3:30 PM
if(localStorage.getItem("330PMToDos") !="") {
  $("#330PMEntry").val(localStorage.getItem("330PMToDos"));
}

$("#SaveButton16").click(function () {
  if (window.localStorage) {
      localStorage.setItem("330PMToDos", $("#330PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// adding text to 4PM
if(localStorage.getItem("4PMToDos") !="") {
  $("#4PMEntry").val(localStorage.getItem("4PMToDos"));
}

$("#SaveButton17").click(function () {
  if (window.localStorage) {
      localStorage.setItem("4PMToDos", $("#4PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// adding text to 4:30 PM
if(localStorage.getItem("430PMToDos") !="") {
  $("#430PMEntry").val(localStorage.getItem("430PMToDos"));
}

$("#SaveButton18").click(function () {
  if (window.localStorage) {
      localStorage.setItem("430PMToDos", $("#430PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// adding text to 5PM
if(localStorage.getItem("5PMToDos") !="") {
  $("#5PMEntry").val(localStorage.getItem("5PMToDos"));
}

$("#SaveButton19").click(function () {
  if (window.localStorage) {
      localStorage.setItem("5PMToDos", $("#5PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});