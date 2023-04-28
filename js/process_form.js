//when focus, hint
//when blur, validate
//do invis to visible with css for survey with DOM to trigger
//at very end, submit button if all valid
//return information

window.addEventListener("load", startup, false);
function startup() {
  //VARIABLES FOR STORAGE
  var resultFirstName = 0;
  var resultLastName = 0;
  var resultPhone = 0;
  var resultEmail = 0;
  var resultWeb = 0;
  //FOCUS FUNCTIONS
  //First name
  document
    .getElementById("firstName")
    .addEventListener("focus", firstNameFocus, false);
  function firstNameFocus() {
    check = "checkFirstName";
    var firstName = document.getElementById("hintFirstName");
    var paraFN = document.createElement("p");
    var hintFN = document.createTextNode("Please enter letters only");
    while (firstName.firstChild) {
      firstName.removeChild(firstName.lastChild);
    }
    paraFN.appendChild(hintFN);
    firstName.appendChild(paraFN);
    document
      .getElementById("firstName")
      .addEventListener("blur", validateData, false);
  }
  //last name
  document
    .getElementById("lastName")
    .addEventListener("focus", lastNameFocus, false);
  function lastNameFocus() {
    check = "checkLastName";
    var lastName = document.getElementById("hintLastName");
    var para = document.createElement("p");
    var textHint = document.createTextNode("Please enter letters only");
    while (lastName.firstChild) {
      lastName.removeChild(lastName.lastChild);
    }
    para.appendChild(textHint);
    lastName.appendChild(para);
    document
      .getElementById("lastName")
      .addEventListener("blur", validateData, false);
  }
  //phone number
  document
    .getElementById("phoneNumber")
    .addEventListener("focus", phoneNumberFocus, false);
  function phoneNumberFocus() {
    check = "checkPhoneNumber";
    var phoneNumber = document.getElementById("hintPhone");
    var para = document.createElement("p");
    var textHint = document.createTextNode(
      "Please use the format XXX-XXX-XXXX"
    );
    while (phoneNumber.firstChild) {
      phoneNumber.removeChild(phoneNumber.lastChild);
    }
    para.appendChild(textHint);
    phoneNumber.appendChild(para);
    document
      .getElementById("phoneNumber")
      .addEventListener("blur", validateData, false);
  }
  //email
  document
    .getElementById("emailAddress")
    .addEventListener("focus", emailFocus, false);
  function emailFocus() {
    check = "checkEmail";
    var emailAddress = document.getElementById("hintEmail");
    var para = document.createElement("p");
    var textHint = document.createTextNode(
      "Valid e-mail addresses must contain @"
    );
    while (emailAddress.firstChild) {
      emailAddress.removeChild(emailAddress.lastChild);
    }
    para.appendChild(textHint);
    emailAddress.appendChild(para);
    document
      .getElementById("emailAddress")
      .addEventListener("blur", validateData, false);
  }
  //website
  document
    .getElementById("webAddress")
    .addEventListener("focus", webFocus, false);
  function webFocus() {
    check = "checkWeb";
    var webAddress = document.getElementById("hintWeb");
    var para = document.createElement("p");
    var textHint = document.createTextNode(
      "Please use your UCF website address (https://students.cah.ucf.edu/~yourNID)"
    );
    while (webAddress.firstChild) {
      webAddress.removeChild(webAddress.lastChild);
    }
    para.appendChild(textHint);
    webAddress.appendChild(para);
    document
      .getElementById("webAddress")
      .addEventListener("blur", validateData, false);
  }

  function validateData() {
    switch (check) {
      //FIRST NAME VALIDATE
      case "checkFirstName":
        var myRegEx = /^[a-zA-Z]+$/;
        var firstName = document.getElementById("firstName").value;
        var hintFirstName = document.getElementById("hintFirstName");
        //if valid good
        if (firstName.match(myRegEx) != null) {
          while (hintFirstName.firstChild) {
            hintFirstName.removeChild(hintFirstName.lastChild);
          }
          var photo = document.createElement("img");
          photo.setAttribute("src", "img/check.png");
          photo.style.width = "10%";
          hintFirstName.appendChild(photo);
          resultFirstName = firstName;
        }
        //if valid bad
        else {
          while (hintFirstName.firstChild) {
            hintFirstName.removeChild(hintFirstName.lastChild);
          }
          var photo = document.createElement("img");
          photo.setAttribute("src", "img/ex.png");
          photo.style.width = "10%";
          var myPara = document.createElement("p");
          myPara.style.color = "red";
          var myText = document.createTextNode("This name is not valid.");
          hintFirstName.appendChild(photo);
          myPara.appendChild(myText);
          hintFirstName.appendChild(myPara);
        }
        break;
      //LAST NAME VALIDATE
      case "checkLastName":
        var myRegEx = /^[a-zA-Z]+$/;
        var lastName = document.getElementById("lastName").value;
        var hintLastName = document.getElementById("hintLastName");
        //if valid good
        if (lastName.match(myRegEx) != null) {
          while (hintLastName.firstChild) {
            hintLastName.removeChild(hintLastName.lastChild);
          }
          var photo = document.createElement("img");
          photo.setAttribute("src", "img/check.png");
          photo.style.width = "10%";
          hintLastName.appendChild(photo);
          resultLastName = lastName;
        }
        //if valid bad
        else {
          while (hintLastName.firstChild) {
            hintLastName.removeChild(hintLastName.lastChild);
          }
          var photo = document.createElement("img");
          photo.setAttribute("src", "img/ex.png");
          photo.style.width = "10%";
          var myPara = document.createElement("p");
          myPara.style.color = "red";
          var myText = document.createTextNode("This name is not valid.");
          hintLastName.appendChild(photo);
          myPara.appendChild(myText);
          hintLastName.appendChild(myPara);
        }
        break;
      //PHONE NUMBER VALIDATE
      case "checkPhoneNumber":
        var myRegEx = /^\d{3}-\d{3}-\d{4}$/;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var hintPhone = document.getElementById("hintPhone");
        //if valid good
        if (phoneNumber.match(myRegEx) != null) {
          while (hintPhone.firstChild) {
            hintPhone.removeChild(hintPhone.lastChild);
          }
          var photo = document.createElement("img");
          photo.setAttribute("src", "img/check.png");
          photo.style.width = "10%";
          hintPhone.appendChild(photo);
          resultPhone = phoneNumber;
        }
        //if valid bad
        else {
          while (hintPhone.firstChild) {
            hintPhone.removeChild(hintPhone.lastChild);
          }
          var photo = document.createElement("img");
          photo.setAttribute("src", "img/ex.png");
          photo.style.width = "10%";
          var myPara = document.createElement("p");
          myPara.style.color = "red";
          var myText = document.createTextNode(
            "This phone number is not valid."
          );
          hintPhone.appendChild(photo);
          myPara.appendChild(myText);
          hintPhone.appendChild(myPara);
        }
        break;
      //EMAIL VALIDATE
      case "checkEmail":
        var myRegEx = /^[a-zA-Z0-9]+@[a-zA-Z0-9.]+.[a-zA-Z0-9]+$/;
        var emailAddress = document.getElementById("emailAddress").value;
        var hintEmail = document.getElementById("hintEmail");
        //if valid good
        if (emailAddress.match(myRegEx) != null) {
          while (hintEmail.firstChild) {
            hintEmail.removeChild(hintEmail.lastChild);
          }
          var photo = document.createElement("img");
          photo.setAttribute("src", "img/check.png");
          photo.style.width = "10%";
          hintEmail.appendChild(photo);
          resultEmail = emailAddress;
        }
        //if valid bad
        else {
          while (hintEmail.firstChild) {
            hintEmail.removeChild(hintEmail.lastChild);
          }
          var photo = document.createElement("img");
          photo.setAttribute("src", "img/ex.png");
          photo.style.width = "10%";
          var myPara = document.createElement("p");
          myPara.style.color = "red";
          var myText = document.createTextNode("This email is not valid.");
          hintEmail.appendChild(photo);
          myPara.appendChild(myText);
          hintEmail.appendChild(myPara);
        }
        break;
      //WEB VALIDATE
      case "checkWeb":
        var myRegEx = /^https:\/\/students.cah.ucf.edu\/~[a-z]{2}\d{6}/gm;
        var webAddress = document.getElementById("webAddress").value;
        var hintWeb = document.getElementById("hintWeb");
        //if valid good
        if (webAddress.match(myRegEx) != null) {
          while (hintWeb.firstChild) {
            hintWeb.removeChild(hintWeb.lastChild);
          }
          var photo = document.createElement("img");
          photo.setAttribute("src", "img/check.png");
          photo.style.width = "10%";
          hintWeb.appendChild(photo);
          resultWeb = webAddress;
        }
        //if valid bad
        else {
          while (hintWeb.firstChild) {
            hintWeb.removeChild(hintWeb.lastChild);
          }
          var photo = document.createElement("img");
          photo.setAttribute("src", "img/ex.png");
          photo.style.width = "10%";
          var myPara = document.createElement("p");
          myPara.style.color = "red";
          var myText = document.createTextNode(
            "This URL is not a valid UCF address."
          );
          hintWeb.appendChild(photo);
          myPara.appendChild(myText);
          hintWeb.appendChild(myPara);
        }
        break;
      default:
        break;
    }
  }

  var myButton = document.getElementById("submit");
  myButton.addEventListener("click", buttonFunction);
  myFlag = false;

  function buttonFunction() {
    if (
      resultFirstName != 0 &&
      resultLastName != 0 &&
      resultPhone != 0 &&
      resultEmail != 0 &&
      resultWeb != 0
    ) {
      var content = document.getElementById("content");
      if (document.getElementById("css").checked) {
        myFlag = true;
      } else {
        myFlag = false;
      }
      while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
      //create elements
      var myTitle = document.createElement("h2");
      var titleText = document.createTextNode("Your Information:");
      var myPara = document.createElement("p");
      var textFN = document.createTextNode("First Name: " + resultFirstName);
      var textLN = document.createTextNode("Last Name: " + resultLastName);
      var textPN = document.createTextNode("Phone Number: " + resultPhone);
      var textEmail = document.createTextNode("Email: " + resultEmail);
      var textWeb = document.createTextNode("Website: " + resultWeb);
      //assemble children
      myTitle.appendChild(titleText);
      myPara.appendChild(textFN);
      myPara.appendChild(document.createElement("br"));
      myPara.appendChild(textLN);
      myPara.appendChild(document.createElement("br"));
      myPara.appendChild(textPN);
      myPara.appendChild(document.createElement("br"));
      myPara.appendChild(textEmail);
      myPara.appendChild(document.createElement("br"));
      myPara.appendChild(textWeb);
      content.appendChild(myTitle);
      content.appendChild(myPara);
      content.style.marginTop = "125px";
      //add badge
      switch (myFlag) {
        case true:
          //fertilize children
          var myResult = document.createElement("h3");
          myResult.style.width = "175px";
          myResult.setAttribute("class", "myResult");
          var youGot = document.createTextNode("You got: Artist");
          var artistPic = document.createElement("img");
          artistPic.setAttribute("src", "img/palette.png");
          artistPic.style.width = "150px";
          //assemble children
          myResult.appendChild(youGot);
          myResult.appendChild(document.createElement("br"));
          myResult.appendChild(artistPic);
          document.getElementById("content").appendChild(myResult);
          break;
        default:
          //fertilize children
          var myResult = document.createElement("h3");
          myResult.style.width = "175px";
          myResult.setAttribute("class", "myResult");
          var youGot = document.createTextNode("You got: Programmer");
          var artistPic = document.createElement("img");
          artistPic.setAttribute("src", "img/coder.png");
          artistPic.style.width = "150px";
          artistPic.style.paddingLeft = "12px";
          //assemble children
          myResult.appendChild(youGot);
          myResult.appendChild(document.createElement("br"));
          myResult.appendChild(artistPic);
          document.getElementById("content").appendChild(myResult);
          break;
      }
    } else {
      divButton = document.getElementById("booton");
      var myPara = document.createElement("p");
      myPara.style.color = "red";
      var warning = document.createTextNode(
        "All form sections must be filled out correctly"
      );
      myPara.appendChild(warning);
      divButton.appendChild(myPara);
    }
  }
}
