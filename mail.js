const firebaseConfig = {
  apiKey: "AIzaSyCukQw2NyqAc4uVt6wNB34xT6NR5VgoxtA",
  authDomain: "personal-contact-form-d.firebaseapp.com",
  databaseURL: "https://personal-contact-form-d-default-rtdb.firebaseio.com",
  projectId: "personal-contact-form-d",
  storageBucket: "personal-contact-form-d.appspot.com",
  messagingSenderId: "554061202039",
  appId: "1:554061202039:web:d8f5ec0f30ad93eb483c72",
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
