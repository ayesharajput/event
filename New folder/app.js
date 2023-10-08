
//  to show message on click
function showMessageOnClick() {
  console.log("Element clicked!");
}

// to hide element on click
function hideElementOnClick() {
  document.getElementById("targetElement").style.display = "none";
}

// to scroll to the top of the page
function scrollToTop() {
  window.scrollTo(0, 0);
}

//  to play a sound
function playSound() {
  var audio = new Audio('sound.mp3');
  audio.play();
}



//  to alert message on button click
function alertMessage() {
  alert("Button clicked!");
}

//  to display message on mouseover
function showMessageOnMouseOver() {
  console.log("Mouse over element!");
}

//  to hide element on mouseout
function hideElementOnMouseOut() {
  document.getElementById("elementToHide").style.display = "none";
}



//  registration form
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name === "") {
    alert("Name field is required");
    return false;
  }

  if (email === "") {
    alert("Email field is required");
    return false;
  }



  return true;
}
