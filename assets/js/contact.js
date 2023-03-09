// contact form - firebase

var firebaseConfig = {
    apiKey: "AIzaSyB5GehVo99OEOrQlh_gVm8sRD-UCIZ8pU0",
    authDomain: "kitab-website-contact-form.firebaseapp.com",
    databaseURL: "https://kitab-website-contact-form-default-rtdb.firebaseio.com",
    projectId: "kitab-website-contact-form",
    storageBucket: "kitab-website-contact-form.appspot.com",
    messagingSenderId: "445792361259",
    appId: "1:445792361259:web:cf38dd602ed3533649c36e"
  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('New Collected Data');
  
  document.getElementById('contactForm')
  .addEventListener('submit', submitForm);
  
  function submitForm(e) {
  e.preventDefault();
  
  // Get values

  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');
  
  saveMessage(email, subject , message);
  document.getElementById('contactForm').reset();
  }
  
  // Function to get form values
  function getInputVal(id) {
  return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(email , subject , message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email: email,
    subject:subject,
    message: message,
  });
  }