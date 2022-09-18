// Fixer API with my api key
var myHeaders = new Headers();
myHeaders.append("apikey", "uElQxR5TFwOOXx7mNnBoT8XMj3NIa45S");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

// Symbol fetching
fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
  .then((response) => response.json())
  .then((symbolData) => {
    console.log(symbolData);
    let SymbolKeysArray = [];
    let SymbolValueArray = [];
    // iterate over symbol object values
    Object.values(symbolData).forEach((sym) => {
      console.log(sym);
      SymbolValueArray = Object.values(sym);
      console.log(SymbolValueArray); // SymbolValueArray will use later to display selection menu in HTML
      SymbolKeysArray = Object.keys(sym);
      console.log(SymbolKeysArray); // SymbolKeysArray will use in js to convert
    });
    // loop through the SymbolValueArray and create option elements to be displayed in select menu
    for (let i = 0; i < SymbolValueArray.length; i++) {
      let x = document.createElement("OPTION");
      let y = document.createElement("OPTION");
      x.setAttribute("value", i);
      y.setAttribute("value", i);
      let a = document.createTextNode(SymbolValueArray[i]);
      let b = document.createTextNode(SymbolValueArray[i]);
      x.appendChild(a);
      y.appendChild(b);
      document.getElementById("mySelect1").append(x);
      document.getElementById("mySelect2").append(y);
    }

    // Change or update some text on HTML based on the selected option
    const myselect1 = document.getElementById("mySelect1");
    const textElement = document.getElementById("text1");

    let fromIndex = 0;

    myselect1.addEventListener("change", function changeHandler(e) {
      console.log(myselect1.options[myselect1.selectedIndex].text); // to get the text of selected option
      fromIndex = myselect1.options[myselect1.selectedIndex].value; // getting value of selected option (index)
      storeToFromIndex();
      textElement.textContent = myselect1.options[myselect1.selectedIndex].text; // to update the text in the span element
    });

    const myselect2 = document.getElementById("mySelect2");
    const textElement2 = document.getElementById("text2");

    let toIndex = 0;

    myselect2.addEventListener("change", function changeHandler(e) {
      console.log(myselect2.options[myselect2.selectedIndex].text); // to get the text of selected option
      toIndex = myselect2.options[myselect2.selectedIndex].value; // getting value of selected option (index)
      storeToFromIndex();
      textElement2.textContent =
        myselect2.options[myselect2.selectedIndex].text; // to update the text in the span element
    });

    let inputValue = 0;
    // Getting the value of #fromCurrency input and updating #fromResult number
    const inputElement = document.getElementById("fromCurrency");
    const numberElement = document.getElementById("num1");
    inputElement.addEventListener("keyup", function changeHandler(e) {
      inputValue = inputElement.value;
      fetchingConvert(); // to get input values and keys to be able to convert them
      console.log(inputValue); // for testing purposes

      numberElement.textContent = inputValue;
    });

    // A function to use my index values to get symbol ex. 'SAR' as String
    function storeToFromIndex() {
      fromKey = SymbolKeysArray[fromIndex];
      toKey = SymbolKeysArray[toIndex];
      fetchingConvert();
    }
    function fetchingConvert() {
      console.log(fromKey);
      console.log(toKey);
      let amount = inputValue;
      // Now we have both keys, whenever the user make a selection the key will change
      // we send our keys to the fetching convert link
      fetch(
        `https://api.apilayer.com/fixer/convert?to=${toKey}&from=${fromKey}&amount=${amount}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
        console.log(result)
        // getting the result and display it in the span element with id='num2'


        })
        .catch((error) => console.log("error", error));
    }
  })
  .catch((error) => console.log("error", error));
