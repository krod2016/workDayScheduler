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

$("#saveButton1").click(function () {
  if (window.localStorage) {
      localStorage.setItem("8AMToDos", $("#8AMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

//adding text to 830AM: left off here
if(localStorage.getItem("830AMToDos") !="") {
  $("#9AMEntry").val(localStorage.getItem("830AMToDos"));
}

$("#saveButton2").click(function () {
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

$("#saveButton3").click(function () {
  if (window.localStorage) {
      localStorage.setItem("9AMToDos", $("#9AMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

//adding text to 930AM
if(localStorage.getItem("930AMToDos") !="") {
  $("#9AMEntry").val(localStorage.getItem("930AMToDos"));
}

$("#saveButton4").click(function () {
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

$("#saveButton2").click(function () {
  if (window.localStorage) {
      localStorage.setItem("10AMToDos", $("#10AMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 11 AM time slot can be pushed into the local storage as "11AM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("11AMToDos") !="") {
  $("#11AMEntry").val(localStorage.getItem("11AMToDos"));
}

$("#saveButton3").click(function () {
  if (window.localStorage) {
      localStorage.setItem("11AMToDos", $("#11AMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 12 PM time slot can be pushed into the local storage as "12PM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("12PMToDos") !="") {
  $("#12PMEntry").val(localStorage.getItem("12PMToDos"));
}

$("#saveButton4").click(function () {
  if (window.localStorage) {
      localStorage.setItem("12PMToDos", $("#12PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 1 PM time slot can be pushed into the local storage as "1PM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("1PMToDos") !="") {
  $("#1PMEntry").val(localStorage.getItem("1PMToDos"));
}

$("#saveButton5").click(function () {
  if (window.localStorage) {
      localStorage.setItem("1PMToDos", $("#1PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

//adding text to 2PM
if(localStorage.getItem("2PMToDos") !="") {
  $("#2PMEntry").val(localStorage.getItem("2PMToDos"));
}

$("#saveButton13").click(function () {
  if (window.localStorage) {
      localStorage.setItem("2PMToDos", $("#2PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 3 PM time slot can be pushed into the local storage as "3PM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("3PMToDos") !="") {
  $("#3PMEntry").val(localStorage.getItem("3PMToDos"));
}

$("#saveButton7").click(function () {
  if (window.localStorage) {
      localStorage.setItem("3PMToDos", $("#3PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 4 PM time slot can be pushed into the local storage as "4PM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("4PMToDos") !="") {
  $("#4PMEntry").val(localStorage.getItem("4PMToDos"));
}

$("#saveButton8").click(function () {
  if (window.localStorage) {
      localStorage.setItem("4PMToDos", $("#4PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});

// A "click" function was created for the save button so that the tasks that are inputted into the textarea for the 5 PM time slot can be pushed into the local storage as "5PM To Dos" and saved onto the DOM. Once saved, the page then returns to the index.html.
if(localStorage.getItem("5PMToDos") !="") {
  $("#5PMEntry").val(localStorage.getItem("5PMToDos"));
}

$("#saveButton9").click(function () {
  if (window.localStorage) {
      localStorage.setItem("5PMToDos", $("#5PMEntry").val());
      setTimeout(function() {
      window.location.replace("index.html");
  }); 
}
});