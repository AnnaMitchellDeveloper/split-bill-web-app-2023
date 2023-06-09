const calculateButton = document.querySelector("#calculateBtn");
calculateButton.addEventListener("click", calculateAmount);

const tipButton = document.querySelector("#addTip");
tipButton.addEventListener("click", showTip);

function showTip(event){
	event.preventDefault();
	tip.style.display = "block";
}

function calculateAmount(event) {
  event.preventDefault();
  const billInput = document.querySelector("#bill").value;
  const numberOfPeopleInput = document.querySelector("#people").value;
  const tipInput = document.querySelector("#tip").value;

  if (billInput === "" || numberOfPeopleInput === "" || numberOfPeopleInput < 1 || billInput < 1) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please, enter your information!",
    });
  }

  let amountPerPerson = billInput / numberOfPeopleInput;
  let tipPerPerson = (billInput * tipInput) / numberOfPeopleInput;
  let totalSum = amountPerPerson + tipPerPerson;

  amountPerPerson = amountPerPerson.toFixed(2);
  tipPerPerson = tipPerPerson.toFixed(2);
  totalSum = totalSum.toFixed(2);

  document.querySelector("#dividedBill").textContent = amountPerPerson;
  document.querySelector("#dividedTip").textContent = tipPerPerson;
  document.querySelector("#billAndTip").textContent = totalSum;
}
