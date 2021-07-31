const firstname = document.getElementById("firstname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const details = document.getElementById("details");

const firstnamevalidity = document.getElementById("firstnamevalidity");
const phonevalidity = document.getElementById("phonevalidity");
const emailvalidity = document.getElementById("emailvalidity");
const detailsvalidity = document.getElementById("detailsvalidity");
const addressvalidity = document.getElementById("addressvalidity");

const sucessfulfirstname = document.getElementById("successful");
const dangerfirstname = document.getElementById("danger");



const successfulphone = document.getElementById("successfulphone");
const dangerphone = document.getElementById("dangerphone");

const successfulemail = document.getElementById("successfulemail");
const dangeremail = document.getElementById("dangeremail");

const successfuladdress = document.getElementById("successfuladdress");
const dangeraddress = document.getElementById("dangeraddress");

const successfuldetails = document.getElementById("successfuldetails");
const dangerdetails = document.getElementById("dangerdetails");

sucessfulfirstname.style["display"] = "none";
dangerfirstname.style["display"] = "none";



successfulphone.style["display"] = "none";
dangerphone.style["display"] = "none";

successfulemail.style["display"] = "none";
dangeremail.style["display"] = "none";

successfuladdress.style["display"] = "none";
dangeraddress.style["display"] = "none";

successfuldetails.style["display"] = "none";
dangerdetails.style["display"] = "none";

let validname = false;
let validemail = false;


firstname.addEventListener("blur", () => {
  let regex = /^([a-zA-Z ]+)$/;

  let str = firstname.value;

  if (regex.test(str)) {
    console.log("Valid name");
    validname = true;
    firstnamevalidity.style["display"] = "none";
    firstnamevalidity.innerHTML += " ";
    sucessfulfirstname.style["display"] = "block";
    dangerfirstname.style["display"] = "none";
    firstname.style["border-color"] = "green";
  
  } else if (str == "") {
    console.log("InValid name");
    validname = false;
    firstnamevalidity.innerHTML = " Field cannot be empty.";
    firstnamevalidity.style["display"] = "block";
    firstname.style["border-color"] = "#ff4b5c";
    firstname.style["color"] = "";
   sucessfulfirstname.style["display"] = "none";
    dangerfirstname.style["display"] = "block";
    
  } else {
    console.log("Invlaid name");
    validname = false;
    firstnamevalidity.innerHTML = " Invalid input.";
    sucessfulfirstname.style["display"] = "none";
    dangerfirstname.style["display"] = "block";
    firstnamevalidity.style["display"] = "block";
    firstname.style["border-color"] = "#ff4b5c";
    firstname.style["color"] = "black";
   
  }
});




email.addEventListener("blur", () => {
  // let regex = /^([_\-\. 0-9 a-z A-Z]+)@([a-z A-Z]+)\.([a-zA-Z]){2,7}$/;
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var str = email.value;

  if (regex.test(str)) {
    validemail = true;
    console.log("valid email");
    emailvalidity.style["display"] = "none";
    successfulemail.style["display"] = "block";
    dangeremail.style["display"] = "none";
    emailvalidity.innerHTML = "";
    email.style["border-color"] = "green";
    email.style["color"] = "black";
  } else {
    validemail = false;
    console.log("Invalid email");
    emailvalidity.style["display"] = "block";

    successfulemail.style["display"] = "none";
    dangeremail.style["display"] = "block";
    emailvalidity.innerHTML = "Field cannot be empty";
    email.style["border-color"] = "#ff4b5c";
  }
});





phone.addEventListener("blur", () => {
  let regex = /^[0-9]{10}$/;
  let str = phone.value;

  if (regex.test(str)) {
    successfulphone.style["display"] = "block";
    dangerphone.style["display"] = "none";
    phonevalidity.innerHTML = " ";
    console.log("valid phone");
    phonevalidity.style["display"] = "none";
    phone.style["border-color"] = "green";
    phone.style["color"] = "black";
  } else if (str === "") {
    phonevalidity.innerHTML = "Field cannot be empty";
    phonevalidity.style["display"] = "block";
    phone.style["border-color"] = "#ff4b5c";
    phone.style["color"] = "black";
    phone.style["border-color"] = "#ff4b5c";

    successfulphone.style["display"] = "none";
    dangerphone.style["display"] = "block";
    console.log("invalid phone empty");
  } else {
    phonevalidity.innerHTML =
      "Phone no. contain only digits and its length must be 10!";
    console.log("invalid phone");
    phonevalidity.style["display"] = "block";

    successfulphone.style["display"] = "none";
    dangerphone.style["display"] = "block";
    phone.style["border-color"] = "#ff4b5c";
  }
});


address.addEventListener("blur", () => {
  let str = address.value;

  let regex = /^[a-zA-Z0-9]+$/;

  if (regex.test(str)) {
    successfuladdress.style["display"] = "block";
    dangeraddress.style["display"] = "none";
    addressvalidity.style["display"] = "none";
    addressvalidity.innerHTML = " ";
  address.style["border-color"] = "green";

  } else if (str === "") {
    successfuladdress.style["display"] = "none";
    dangeraddress.style["display"] = "block";
    addressvalidity.style["display"] = "block";
    addressvalidity.innerHTML = "Field cannot be empty";
    address.style["border-color"] = "#ff4b5c";

  } else {
    successfuladdress.style["display"] = "none";
    dangeraddress.style["display"] = "block";
    addressvalidity.style["display"] = "block";
    addressvalidity.innerHTML =
      "Address can only be  alphanumeric(a-z,A-Z,0-9,-)";
    address.style["border-color"] = "#ff4b5c";

  }
});

details.addEventListener("blur", () => {
  let str = details.value;

  let regex = /^[a-zA-Z0-9]+$/;

  if (regex.test(str)) {
    successfuldetails.style["display"] = "block";
    dangerdetails.style["display"] = "none";
    detailsvalidity.style["display"] = "none";
    detailsvalidity.innerHTML = " ";
  details.style["border-color"] = "green";

  } else if (str === "") {
    successfuldetails.style["display"] = "none";
    dangerdetails.style["display"] = "block";
    detailsvalidity.style["display"] = "block";
    detailsvalidity.innerHTML = "Field cannot be empty.";
    details.style["border-color"] = "#ff4b5c";

  } else {
    successfuldetails.style["display"] = "none";
    dangerdetails.style["display"] = "block";
    detailsvalidity.style["display"] = "block";
    detailsvalidity.innerHTML =
      "details can only be  alphanumeric(a-z,A-Z,0-9,-)";
    details.style["border-color"] = "#ff4b5c";

  }
});
