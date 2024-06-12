const firstName = document.getElementById("fist-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const generalEnq = document.getElementById("gen-enq");
const supportReq = document.getElementById("sup-req");
const queryBox1 = document.getElementById("query-box-1");
const queryBox2 = document.getElementById("query-box-2");
const userTextMessage = document.getElementById("user-text-message");
const consent = document.getElementById("consent");

const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

const errorFname = document.getElementById("error-fName");
const errorLname = document.getElementById("error-lName");
const errorEmail1 = document.getElementById("error-email-1");
const errorEmail2 = document.getElementById("error-email-2");
const errorQuery = document.getElementById("error-query");
const errorUserMessage = document.getElementById("error-user-message");
const errorConsent = document.getElementById("error-consent");

// variables
let firstNameValue, lastNameValue, emailValue, consentIsChecked, userMessageValue, generalEnqChecked, supportReqChecked;
let isFormReady = false;

// show-hide error message
const showErrorMessage = (element) => (element.style.display = "block");
const hideErrorMessage = (element) => (element.style.display = "none");

// first name validation
const validateFirstName = () => {
  hideErrorMessage(errorFname);
  if (!firstNameValue) {
    isFormReady = false;
    showErrorMessage(errorFname);
  } else {
    isFormReady = true;
  }
};

// last name validation
const validateLastName = () => {
  hideErrorMessage(errorLname);
  if (!lastNameValue) {
    isFormReady = false;
    showErrorMessage(errorLname);
  } else {
    isFormReady = true;
  }
};

// email validation
const validateEmail = () => {
  hideErrorMessage(errorEmail1);
  hideErrorMessage(errorEmail2);
  !emailValue && showErrorMessage(errorEmail1);
  if (emailValue && !emailValue.includes("@")) {
    isFormReady = false;
    showErrorMessage(errorEmail2);
  } else {
    isFormReady = true;
  }
};

// query type validation
const validateQueries = () => {
  hideErrorMessage(errorQuery);

  if (!generalEnqChecked && !supportReqChecked) {
    isFormReady = false;
    showErrorMessage(errorQuery);
  } else {
    isFormReady = true;
  }
};

// user text message validation
const validateUserMessage = () => {
  hideErrorMessage(errorUserMessage);
  if (!userMessageValue) {
    isFormReady = false;
    showErrorMessage(errorUserMessage);
  } else {
    isFormReady = true;
  }
};

const validationConsent = () => {
  hideErrorMessage(errorConsent);
  if (!consentIsChecked) {
    isFormReady = false;
    showErrorMessage(errorConsent);
  } else {
    isFormReady = true;
  }
};

const submitForm = (e) => {
  e.preventDefault();
  successMessage.style.display = "none";
  validateFirstName();
  validateLastName();
  validateEmail();
  validateQueries();
  validateUserMessage();
  validationConsent();
  isFormReady && (successMessage.style.display = "block");
};

firstName.addEventListener("change", (e) => (firstNameValue = e.target.value));
lastName.addEventListener("change", (e) => (lastNameValue = e.target.value));
email.addEventListener("change", (e) => (emailValue = e.target.value));
userTextMessage.addEventListener("change", (e) => (userMessageValue = e.target.value));

generalEnq.addEventListener("change", (e) => {
  generalEnqChecked = e.target.checked;
  queryBox1.style.backgroundColor = generalEnqChecked ? "#e0f1e8" : "#fff";
});

supportReq.addEventListener("change", (e) => {
  supportReqChecked = e.target.checked;
  queryBox2.style.backgroundColor = supportReqChecked ? "#e0f1e8" : "#fff";
});
consent.addEventListener("change", (e) => (consentIsChecked = e.target.checked));

contactForm.addEventListener("submit", submitForm);
