// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

var selectMe = function () {
  var mySections = document.querySelectorAll(".article-section");
  console.log("my sections",  mySections);
  for (var i = 0; i < mySections.length; i++) {

    mySections[i].addEventListener("click", function(evt) {
      // var happy = mySections[i];
      // debugger
      document.querySelector("#output-target").innerHTML = evt.target.innerHTML;
      console.log("My function!");
    });
  }

}
selectMe();


// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

var headerTag = function() {
  document.querySelector("#output-target").innerHTML = "You moved your mouse over the header";
}


document.querySelector("#page-title").addEventListener("mouseenter", headerTag);

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
var headerLeave = function() {
  document.querySelector("#output-target").innerHTML = "You left me!!";
}


document.querySelector("#page-title").addEventListener("mouseout", headerLeave);

// When you type characters into the input field, the output element should mirror the text in the input field.
var mirror = function() {
  document.querySelector("#output-target").innerHTML = document.querySelector("#keypress-input").value;
}

document.querySelector("#keypress-input").addEventListener("keyup", mirror);

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
var turnBlue = function() {
  document.querySelector("#guinea-pig").classList.toggle("blue");
}


document.querySelector("#add-color").addEventListener("click", turnBlue);
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
var larger = function() {
  document.querySelector("#guinea-pig").classList.toggle("hulkify");
}

document.querySelector("#make-large").addEventListener("click", larger);
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
var border = function() {
  document.querySelector("#guinea-pig").classList.toggle("capture");
}


document.querySelector("#add-border").addEventListener("click", border);
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
var rounded = function() {
  document.querySelector("#guinea-pig").classList.toggle("rounded");
}


document.querySelector("#add-rounding").addEventListener("click", rounded);



// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
