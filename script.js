// Exercice 1
function generateForm1() {
  // form creation
  let form1 = document.createElement("form");
  document.body.appendChild(form1);


  // creating paragraphs
  let pFirstName = document.createElement("p");
  let pLastName = document.createElement("p");
  let pButtonOk = document.createElement("p");
  let pErrorMessage = document.createElement("p");
  let pSuccessMessage = document.createElement("p");


  // creation of paragraphs content
  // pFirstName
  let labelFirstName = document.createElement("label");
  labelFirstName.textContent = "Quel est votre prénom ? ";
  let inputFirstName = document.createElement("input");
  inputFirstName.type = "text";
  pFirstName.appendChild(labelFirstName);
  pFirstName.appendChild(inputFirstName);
  // pLastName
  let labelLastName = document.createElement("label");
  labelLastName.textContent = "Quel est votre nom ? ";
  let inputLastName = document.createElement("input");
  inputLastName.type = "text";
  pLastName.appendChild(labelLastName);
  pLastName.appendChild(inputLastName);
  // pButtonOk
  let buttonOk = document.createElement("input");
  buttonOk.type = "button";
  buttonOk.value = "OK";
  pButtonOk.appendChild(buttonOk);
  // pErrorMessage
  let labelErrorMessage = document.createElement("label");
  labelErrorMessage.textContent = "Vous devez remplir entièrement le formulaire !";
  pErrorMessage.appendChild(labelErrorMessage);
  pErrorMessage.style.display = "none";
  // pSuccessMessage
  let labelSuccessMessage = document.createElement("label");
  pSuccessMessage.appendChild(labelSuccessMessage);


  // adding paragraphs to the form
  form1.appendChild(pFirstName);
  form1.appendChild(pLastName);
  form1.appendChild(pButtonOk);
  form1.appendChild(pErrorMessage);
  form1.appendChild(pSuccessMessage);


  // EventListener on the buttonOk
  buttonOk.addEventListener("click", function() {
    // test if one of the two inputs is empty
    if (inputFirstName.value === "" || inputLastName.value === "") {
      // display the error message
      pErrorMessage.style.display = "inherit";
    } else {
      // display the success message
      pFirstName.style.display = "none";
      pLastName.style.display = "none";
      pButtonOk.style.display = "none";
      pErrorMessage.style.display = "none";
      let firstName = inputFirstName.value;
      let lastName = inputLastName.value;
      pSuccessMessage.textContent = "Bonjour " + firstName + " " + lastName + " !";
      pSuccessMessage.style.display = "inherit";
    }
  }, false);
}



// Exercice 2
function generateForm2() {
  // form creation
  let form2 = document.createElement("form");
  document.body.appendChild(form2);


  // creating paragraphs
  let pGrossMonthlySalary = document.createElement("p");
  let pNetMonthlySalary = document.createElement("p");
  let pGrossAnnualSalary = document.createElement("p");
  let pNetAnnualSalary = document.createElement("p");


  // creation of paragraphs content
  // pGrossMonthlySalary
  let labelGrossMonthlySalary = document.createElement("label");
  labelGrossMonthlySalary.textContent = "Salaire mensuel brut ";
  let inputGrossMonthlySalary = document.createElement("input");
  inputGrossMonthlySalary.type = "number";
  pGrossMonthlySalary.appendChild(labelGrossMonthlySalary);
  pGrossMonthlySalary.appendChild(inputGrossMonthlySalary);
  // pNetMonthlySalary
  let labelNetMonthlySalary = document.createElement("label");
  labelNetMonthlySalary.textContent = "Salaire mensuel net ";
  let inputNetMonthlySalary = document.createElement("input");
  inputNetMonthlySalary.type = "number";
  pNetMonthlySalary.appendChild(labelNetMonthlySalary);
  pNetMonthlySalary.appendChild(inputNetMonthlySalary);
  // pGrossAnnualSalary
  let labelGrossAnnualSalary = document.createElement("label");
  labelGrossAnnualSalary.textContent = "Salaire annuel brut ";
  let inputGrossAnnualSalary = document.createElement("input");
  inputGrossAnnualSalary.type = "number";
  pGrossAnnualSalary.appendChild(labelGrossAnnualSalary);
  pGrossAnnualSalary.appendChild(inputGrossAnnualSalary);
  // pNetAnnualSalary
  let labelNetAnnualSalary = document.createElement("label");
  labelNetAnnualSalary.textContent = "Salaire annuel net ";
  let inputNetAnnualSalary = document.createElement("input");
  inputNetAnnualSalary.type = "number";
  pNetAnnualSalary.appendChild(labelNetAnnualSalary);
  pNetAnnualSalary.appendChild(inputNetAnnualSalary);


  // adding paragraphs to the form
  form2.appendChild(pGrossMonthlySalary);
  form2.appendChild(pNetMonthlySalary);
  form2.appendChild(pGrossAnnualSalary);
  form2.appendChild(pNetAnnualSalary);


  // variables containing the values of the inputs
  let gMS; // grossMonthlySalary
  let nMS; // netMonthlySalary
  let gAS; // grossAnnualSalary
  let nAS; // netAnnualSalary


  // EventListener on the inputs
  // gross monthly salary
  inputGrossMonthlySalary.addEventListener("change", function() {
    // calculations
    gMS = inputGrossMonthlySalary.value;
    nMS = gMS / 1.298;
    gAS = gMS * 12;
    nAS = gAS / 1.298;

    // values change
    inputNetMonthlySalary.value = nMS;
    inputGrossAnnualSalary.value = gAS;
    inputNetAnnualSalary.value = nAS;
  }, false);

  // net monthly salary
  inputNetMonthlySalary.addEventListener("change", function() {
    // calculations
    nMS = inputNetMonthlySalary.value;
    gMS = nMS * 1.298;
    nAS = nMS * 12;
    gAS = nAS * 1.298;

    // values change
    inputGrossMonthlySalary.value = gMS;
    inputNetAnnualSalary.value = nAS;
    inputGrossAnnualSalary.value = gAS;
  }, false);

  // gross annual salary
  inputGrossAnnualSalary.addEventListener("change", function() {
    // calculations
    gAS = inputGrossAnnualSalary.value;
    nAS = gAS / 1.298;
    gMS = gAS / 12;
    nMS = gMS / 1.298;

    // values change
    inputNetAnnualSalary.value = nAS;
    inputGrossMonthlySalary.value = gMS;
    inputNetMonthlySalary.value = nMS;
  }, false);

  // net annual salary
  inputNetAnnualSalary.addEventListener("change", function() {
    // calculations
    nAS = inputNetAnnualSalary.value;
    gAS = nAS * 1.298;
    nMS = nAS / 12;
    gMS = nMS * 1.298;

    // values change
    inputGrossAnnualSalary.value = gAS;
    inputNetMonthlySalary.value = nMS;
    inputGrossMonthlySalary.value = gMS;
  }, false);
}



// Exercice 3
function returnOnlyEvenValuesOfAnArray(array) {
  let i = 0; // variable for loop incrementing
  let currentElement; // variable saving the current element
  let arrayWithEvenValues = []; // array that will contain the even values
  while (i < array.length) {
    currentElement = array[i];
    i++;
    if (currentElement % 2 === 0) { // test if the currentElement is even
      arrayWithEvenValues.push(currentElement);
    }
  }
  return arrayWithEvenValues;
}



// Exercice 4
function returnOnlyCoordinationConjunctions(array){
  let i = 0; // variable for loop incrementing
  let currentElement; // variable saving the current element
  let arrayWithTheCoordinationConjunctions = []; // array that will contain the coordination conjuctions
  while(i < array.length){
    currentElement = array[i];
    i++;
    if(currentElement.toLowerCase() === "mais" || // test if the word is a coordination conjunction
     currentElement.toLowerCase() === "ou" ||
     currentElement.toLowerCase() === "et" ||
     currentElement.toLowerCase() === "donc" ||
     currentElement.toLowerCase() === "or" ||
     currentElement.toLowerCase() === "ni" ||
     currentElement.toLowerCase() === "car"){
       arrayWithTheCoordinationConjunctions.push(currentElement);
     }
  }
  return arrayWithTheCoordinationConjunctions;
}



// Exercice 5
function return128RandomNumbersBetween0And100(){
  let i = 0; // variable for loop incrementing
  let currentElement; // variable saving the current element
  let the128RandomNumbers = []; // array that will contain the 128 rendom numbers between 0 and 100
  while(i < 128){
    currentElement = Math.floor(Math.random() * Math.floor(101)); // generates a random number between 0 and 100 and puts it in the current element
    i++;
    the128RandomNumbers.push(currentElement);
  }
  return the128RandomNumbers;
}
