const textBox = document.getElementById("textBox");
const Fahrenhiet = document.getElementById("Fahrenhiet");
const toCelsius = document.getElementById("toCelsius");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

let temp;

function convert(){

if(Fahrenhiet.checked){

  temp = Number(textBox.value);
  temp = temp * 9/5 + 32 ;
  result.textContent = temp.toFixed(1) + "°F"


}

else if(toCelsius.checked){

  temp = Number (textBox.value);
  temp = (temp - 32) * (5/9);
  result.textContent = temp.toFixed(1) + "°C"

}

else {

  result.textContent = "Select a Unit";
}



}
