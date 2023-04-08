const calculateButton = document.querySelector("#calculateBtn");
calculateButton.addEventListener("click", calculateAmount);

function calculateAmount(event){
	event.preventDefault();
	const billInput = document.querySelector("#bill").value;
	const numberOfPeopleInput = document.querySelector("#people").value;
	const tipInput = document.querySelector("#tip").value;

	if (billInput === "" || numberOfPeopleInput === "" ){
		alert("Error");
	}

	let amountPerPerson = billInput/numberOfPeopleInput;
	console.log(amountPerPerson);

	let tipPerPerson = (billInput * tipInput) /numberOfPeopleInput;
	console.log(tipPerPerson);

	let totalSum = amountPerPerson + tipPerPerson;
	console.log(totalSum);

}