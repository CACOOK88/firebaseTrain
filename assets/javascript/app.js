// INITIALIZE FIREBASE
var config = {
  apiKey: "AIzaSyB5IYyZaqGpBivXeJ7Q2yKbxiNkv0iLiI8",
  authDomain: "fir-train-e2503.firebaseapp.com",
  databaseURL: "https://fir-train-e2503.firebaseio.com",
  projectId: "fir-train-e2503",
  storageBucket: "fir-train-e2503.appspot.com",
  messagingSenderId: "826109818845"
};
firebase.initializeApp(config);

// database reference variable
var database = firebase.database();

//  ON VALUE FUNCTION
database.ref().on('value', function(snapshot) {
  if(snapshot.child('').exists()) {

  }
})
// check if any trains exist
// calculate time remaining
// print trains to screen
// remember error object
// update jquery with trains


// CLICK ADD TRAIN BUTTON
$('#add-train').on('click', function(event) {
  event.preventDefault();
  // grab the input values of the form
  var train = $('#train-name').val().trim();
  var destination = $('#train-destination').val().trim();
  var time = $('#train-time').val().trim();
  var freqency = $('#train-freqency').val().trim();


  // ***********************************
  // THIS WILL NOT WORK!
  database.ref().set({
    trainName: train,
    destination: destination,
    frequency: freqency,
    time: time
  })
})
// grab train input values
// check if train name exists

  // if not calculate time
  // if not add to database
  // if so, alert duplicate
