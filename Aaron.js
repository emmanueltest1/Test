class FormValidation {
  formValues = {
    name: "",
    country: "",
    contact: "",
    book: "",
    twitter: "",
    instagram: "",
    select: "",
    about: "",
    feel: "",
    plan: "",
    other: "",
  };
  errorValues = {
    nameErr: "",
    countryErr: "",
    contactErr: "",
    bookErr: "",
    twitterErr: "",
    instagramErr: "",
    selectErr: "",
    aboutErr: "",
    feelErr: "",
    planErr: "",
    otherErr: "",
  };
  showErrorMsg(index, msg) {
    const form_grp = document.getElementsByClassName("form-grp")[index];
    form_grp.classList.add("error");
    form_grp.getElementsByTagName("span")[0].textContent = msg;
  }
  showSuccessMsg(index) {
    const form_grp = document.getElementsByClassName("form-grp")[index];
    form_grp.classList.remove("error");
    form_grp.classList.add("success");
  }
  getInputs() {
    this.formValues.name = document.getElementById("name").value.trim();
    this.formValues.country = document.getElementById("country").value.trim();
    // this.formValues.contact = document.getElementById("contact").value.trim();
    this.formValues.book = document.getElementById("book").value.trim();
    this.formValues.twitter = document.getElementById("twitter").value.trim();
    this.formValues.instagram = document
      .getElementById("instagram")
      .value.trim();
    this.formValues.instagram = document
      .getElementById("instagram")
      .value.trim();
    // this.formValues.select = document.getElementById("select").value.trim();
    this.formValues.about = document.getElementById("about").value.trim();
    this.formValues.feel = document.getElementById("feel").value.trim();
    this.formValues.plan = document.getElementById("plan").value.trim();
    this.formValues.other = document.getElementById("other").value.trim();
  }
  validateName() {
    if (this.formValues.name === "") {
      this.errorValues.nameErr = "* Please Enter Your Brand Name";
      this.showErrorMsg(0, this.errorValues.nameErr);
    } else if (this.formValues.name.length <= 5) {
      this.errorValues.nameErr = "* Brand Name must be at least 10 Characters";
      this.showErrorMsg(0, this.errorValues.nameErr);
    } else if (this.formValues.name.length > 20) {
      this.errorValues.nameErr =
        "*  Brand Name should not exceed 20 Characters";
      this.showErrorMsg(0, this.errorValues.nameErr);
    } else {
      this.errorValues.nameErr = "";
      this.showSuccessMsg(0);
    }
  }
  validateCountry() {
    if (this.formValues.country === "") {
      this.errorValues.countryErr = "* Please Enter Your Brand Name";
      this.showErrorMsg(1, this.errorValues.countryErr);
    } else if (this.formValues.country.length <= 5) {
      this.errorValues.countryErr =
        "* Brand Name must be at least 10 Characters";
      this.showErrorMsg(1, this.errorValues.countryErr);
    } else if (this.formValues.country.length > 20) {
      this.errorValues.countryErr =
        "*  Brand Name should not exceed 20 Characters";
      this.showErrorMsg(1, this.errorValues.countryErr);
    } else {
      this.errorValues.countryErr = "";
      this.showSuccessMsg(1);
    }
  }
  validateCountry() {}
  validateBook() {
    if (this.formValues.book === "") {
      this.errorValues.bookErr = "* Please Enter Your Facebook username or url";
      this.showErrorMsg(3, this.errorValues.bookErr);
    } else if (this.formValues.book.length <= 100) {
      this.errorValues.nameErr =
        "* Facebook username or url must be at least 100 Characters";
      this.showErrorMsg(3, this.errorValues.bookErr);
    } else if (this.formValues.book.length > 20) {
      this.errorValues.bookErr =
        "* Facebook username or url should not exceed 20 Characters";
      this.showErrorMsg(3, this.errorValues.bookErr);
    } else {
      this.errorValues.bookErr = "";
      this.showSuccessMsg(3);
    }
  }
  validateTwitter() {
    if (this.formValues.twitter === "") {
      this.errorValues.bookErr = "* Please Enter Your Twitter username or url";
      this.showErrorMsg(4, this.errorValues.twitterErr);
    } else if (this.formValues.twitter.length <= 100) {
      this.errorValues.twitterErr =
        "* Twitter username or url must be at least 100 Characters";
      this.showErrorMsg(4, this.errorValues.twitterErr);
    } else if (this.formValues.twitter.length > 20) {
      this.errorValues.twitterErr =
        "* Twitter username should not exceed 20 Characters";
      this.showErrorMsg(4, this.errorValues.bookErr);
    } else {
      this.errorValues.bookErr = "";
      this.showSuccessMsg(4);
    }
  }
  validateInstagram() {
    if (this.formValues.instagram === "") {
      this.errorValues.instagramErr =
        "* Please Enter Your Instagram username or url";
      this.showErrorMsg(5, this.errorValues.instagramErr);
    } else if (this.formValues.instagram.length <= 100) {
      this.errorValues.instagramErr =
        "* Instagram username or url must be at least 100 Characters";
      this.showErrorMsg(5, this.errorValues.instagramErr);
    } else if (this.formValues.instagram.length > 20) {
      this.errorValues.instagramErr =
        "* Instagram username or url should not exceed 20 Characters";
      this.showErrorMsg(5, this.errorValues.instagramErr);
    } else {
      this.errorValues.instagramErr = "";
      this.showSuccessMsg(5);
    }
  }
  validateSelect() {
    if (this.formValues.select === "") {
      this.errorValues.selectErr =
        "* Please Enter Your Instagram username or url";
      this.showErrorMsg(6, this.errorValues.selectErr);
    } else if (this.formValues.select.length <= 100) {
      this.errorValues.selectErr =
        "* Instagram username or url must be at least 100 Characters";
      this.showErrorMsg(6, this.errorValues.selectErr);
    } else if (this.formValues.select.length > 20) {
      this.errorValues.selectErr =
        "* Instagram username or url should not exceed 20 Characters";
      this.showErrorMsg(6, this.errorValues.selectErr);
    } else {
      this.errorValues.selectErr = "";
      this.showSuccessMsg(6);
    }
  }
  validateAbout() {
    if (this.formValues.about === "") {
      this.errorValues.aboutErr = "* Please tell us briefly about your product";
      this.showErrorMsg(7, this.errorValues.aboutErr);
    } else if (this.formValues.about.length <= 100) {
      this.errorValues.aboutErr =
        "* Please tell us briefly about your product  must be at least 100 Characters";
      this.showErrorMsg(7, this.errorValues.aboutErr);
    } else if (this.formValues.about.length > 20) {
      this.errorValues.aboutErr =
        "* Please tell us briefly about your product should not exceed 20 Characters";
      this.showErrorMsg(7, this.errorValues.aboutErr);
    } else {
      this.errorValues.aboutErr = "";
      this.showSuccessMsg(7);
    }
  }
  validateFeel() {
    if (this.formValues.feel === "") {
      this.errorValues.feelErr = "* Please tell us briefly about your product";
      this.showErrorMsg(8, this.errorValues.feelErr);
    } else if (this.formValues.feel.length <= 100) {
      this.errorValues.feelErr =
        "* Please tell us briefly about your product  must be at least 100 Characters";
      this.showErrorMsg(8, this.errorValues.feelErr);
    } else if (this.formValues.feel.length > 20) {
      this.errorValues.feelErr =
        "* Please tell us briefly about your product should not exceed 20 Characters";
      this.showErrorMsg(8, this.errorValues.feelErr);
    } else {
      this.errorValues.feelErr = "";
      this.showSuccessMsg(8);
    }
  }
  validatePlan() {
    if (this.formValues.plan === "") {
      this.errorValues.planErr = "* Please tell us briefly about your product";
      this.showErrorMsg(9, this.errorValues.planErr);
    } else if (this.formValues.plan.length <= 100) {
      this.errorValues.planErr =
        "* Please tell us briefly about your product  must be at least 100 Characters";
      this.showErrorMsg(9, this.errorValues.planErr);
    } else if (this.formValues.plan.length > 20) {
      this.errorValues.planErr =
        "* Please tell us briefly about your product should not exceed 20 Characters";
      this.showErrorMsg(9, this.errorValues.planErr);
    } else {
      this.errorValues.planErr = "";
      this.showSuccessMsg(9);
    }
  }
  validateOther() {
    if (this.formValues.other === "") {
      this.errorValues.otherErr = "* Please tell us briefly about your product";
      this.showErrorMsg(10, this.errorValues.otherErr);
    } else if (this.formValues.other.length <= 100) {
      this.errorValues.otherErr =
        "* Please tell us briefly about your product  must be at least 100 Characters";
      this.showErrorMsg(10, this.errorValues.otherErr);
    } else if (this.formValues.other.length > 20) {
      this.errorValues.otherErr =
        "* Please tell us briefly about your product should not exceed 20 Characters";
      this.showErrorMsg(10, this.errorValues.otherErr);
    } else {
      this.errorValues.otherErr = "";
      this.showSuccessMsg(10);
    }
  }
  alertMessage() {}
  removeInputs() {}
}
const validateUserInputs = new FormValidation();
document
  .getElementsByClassName("form")[0]
  .addEventListener("submit", (event) => {
    event.preventDefault();
    validateUserInputs.getInputs();
    validateUserInputs.validateName();
    validateUserInputs.validateCountry();
    // validateUserInputs.validateContact();
    validateUserInputs.validateBook();
    validateUserInputs.validateTwitter();
    validateUserInputs.validateFeel();
    validateUserInputs.validateAbout();
    validateUserInputs.validateInstagram();
    validateUserInputs.validatePlan();
    validateUserInputs.validateOther();
  });
