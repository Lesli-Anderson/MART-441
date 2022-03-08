// let's create an empty array. We will add to this later
var myViewFinderArray = new Array();

// this is the main ViewFinder class
class ViewFinder {
  // the constructor requires only one title, the description, imagePath, etc.
  // we will create multiple objects from this class
  constructor(title) {
    this.title = title;
  }

  // this just returns the title concatenated with the string "Title"
  // keep in mind only one return statement can exist in a function
  toString() {
    return "Title: " + this.title;
  }

  // this is the property theTitle which returns the title as well only the title
  get theTitle() {
    return this.title;
  }
}

// this function is called in the body of the HTML page so that the objects are created and added to the
// array myViewFinderArray
function initializeArray() {
  // create the first object from the class ViewFinder
  var myViewFinder = new ViewFinder("Invisable No More");
  // create a second object from the class ViewFinder
  var myViewFinder1 = new ViewFinder("Jermaine is Still Missing");
  // create a third object from the class ViewFinder
  var myViewFinder2 = new ViewFinder("She is Missing");
  // create a fourth object from the class ViewFinder
  var myViewFinder3 = new ViewFinder("Ripple of Loss");
  // create a fifth object from the class ViewFinder
  var myViewFinder4 = new ViewFinder("MMIW Art Installation");

  // add the first object to the array
  myViewFinderArray.push(myViewFinder);
  // add the second object to the array
  myViewFinderArray.push(myViewFinder1);
  // add the third object to the array
  myViewFinderArray.push(myViewFinder2);
  // add the fourth object to the array
  myViewFinderArray.push(myViewFinder3);
  // add the fifth object to the array
  myViewFinderArray.push(myViewFinder4);
}

// this function gets an object from the array and puts it into the element with the id title
function accessInformation() {
  // get a random number
  var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
  // get a random object from the array
  // calling the toString, but we could have gotten the property theTitle as well
  document.getElementById("title").innerHTML =
    myViewFinderArray[randomNumber].toString();
}
