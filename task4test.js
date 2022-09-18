/* 
- Testing without using the API 
- Fixer API free plan is limited monthly to 100 requests
 */

// Fixer API with my api key
// var myHeaders = new Headers();
// myHeaders.append("apikey", "uElQxR5TFwOOXx7mNnBoT8XMj3NIa45S");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// symbol data for testing
symbolData = {
  success: true,
  symbols: {
    AED: "United Arab Emirates Dirham",
    AFN: "Afghan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ANG: "Netherlands Antillean Guilder",
    AOA: "Angolan Kwanza",
    ARS: "Argentine Peso",
    AUD: "Australian Dollar",
    AWG: "Aruban Florin",
    AZN: "Azerbaijani Manat",
    BAM: "Bosnia-Herzegovina Convertible Mark",
    BBD: "Barbadian Dollar",
    BDT: "Bangladeshi Taka",
    BGN: "Bulgarian Lev",
    BHD: "Bahraini Dinar",
    BIF: "Burundian Franc",
    BMD: "Bermudan Dollar",
    BND: "Brunei Dollar",
    BOB: "Bolivian Boliviano",
    BRL: "Brazilian Real",
    BSD: "Bahamian Dollar",
    BTC: "Bitcoin",
    BTN: "Bhutanese Ngultrum",
    BWP: "Botswanan Pula",
    BYN: "New Belarusian Ruble",
    BYR: "Belarusian Ruble",
    BZD: "Belize Dollar",
    CAD: "Canadian Dollar",
    CDF: "Congolese Franc",
    CHF: "Swiss Franc",
    CLF: "Chilean Unit of Account (UF)",
    CLP: "Chilean Peso",
    CNY: "Chinese Yuan",
    COP: "Colombian Peso",
    CRC: "Costa Rican Col\u00f3n",
    CUC: "Cuban Convertible Peso",
    CUP: "Cuban Peso",
    CVE: "Cape Verdean Escudo",
    CZK: "Czech Republic Koruna",
    DJF: "Djiboutian Franc",
    DKK: "Danish Krone",
    DOP: "Dominican Peso",
    DZD: "Algerian Dinar",
    EGP: "Egyptian Pound",
    ERN: "Eritrean Nakfa",
    ETB: "Ethiopian Birr",
    EUR: "Euro",
    FJD: "Fijian Dollar",
    FKP: "Falkland Islands Pound",
    GBP: "British Pound Sterling",
    GEL: "Georgian Lari",
    GGP: "Guernsey Pound",
    GHS: "Ghanaian Cedi",
    GIP: "Gibraltar Pound",
    GMD: "Gambian Dalasi",
    GNF: "Guinean Franc",
    GTQ: "Guatemalan Quetzal",
    GYD: "Guyanaese Dollar",
    HKD: "Hong Kong Dollar",
    HNL: "Honduran Lempira",
    HRK: "Croatian Kuna",
    HTG: "Haitian Gourde",
    HUF: "Hungarian Forint",
    IDR: "Indonesian Rupiah",
    ILS: "Israeli New Sheqel",
    IMP: "Manx pound",
    INR: "Indian Rupee",
    IQD: "Iraqi Dinar",
    IRR: "Iranian Rial",
    ISK: "Icelandic Kr\u00f3na",
    JEP: "Jersey Pound",
    JMD: "Jamaican Dollar",
    JOD: "Jordanian Dinar",
    JPY: "Japanese Yen",
    KES: "Kenyan Shilling",
    KGS: "Kyrgystani Som",
    KHR: "Cambodian Riel",
    KMF: "Comorian Franc",
    KPW: "North Korean Won",
    KRW: "South Korean Won",
    KWD: "Kuwaiti Dinar",
    KYD: "Cayman Islands Dollar",
    KZT: "Kazakhstani Tenge",
    LAK: "Laotian Kip",
    LBP: "Lebanese Pound",
    LKR: "Sri Lankan Rupee",
    LRD: "Liberian Dollar",
    LSL: "Lesotho Loti",
    LTL: "Lithuanian Litas",
    LVL: "Latvian Lats",
    LYD: "Libyan Dinar",
    MAD: "Moroccan Dirham",
    MDL: "Moldovan Leu",
    MGA: "Malagasy Ariary",
    MKD: "Macedonian Denar",
    MMK: "Myanma Kyat",
    MNT: "Mongolian Tugrik",
    MOP: "Macanese Pataca",
    MRO: "Mauritanian Ouguiya",
    MUR: "Mauritian Rupee",
    MVR: "Maldivian Rufiyaa",
    MWK: "Malawian Kwacha",
    MXN: "Mexican Peso",
    MYR: "Malaysian Ringgit",
    MZN: "Mozambican Metical",
    NAD: "Namibian Dollar",
    NGN: "Nigerian Naira",
    NIO: "Nicaraguan C\u00f3rdoba",
    NOK: "Norwegian Krone",
    NPR: "Nepalese Rupee",
    NZD: "New Zealand Dollar",
    OMR: "Omani Rial",
    PAB: "Panamanian Balboa",
    PEN: "Peruvian Nuevo Sol",
    PGK: "Papua New Guinean Kina",
    PHP: "Philippine Peso",
    PKR: "Pakistani Rupee",
    PLN: "Polish Zloty",
    PYG: "Paraguayan Guarani",
    QAR: "Qatari Rial",
    RON: "Romanian Leu",
    RSD: "Serbian Dinar",
    RUB: "Russian Ruble",
    RWF: "Rwandan Franc",
    SAR: "Saudi Riyal",
    SBD: "Solomon Islands Dollar",
    SCR: "Seychellois Rupee",
    SDG: "Sudanese Pound",
    SEK: "Swedish Krona",
    SGD: "Singapore Dollar",
    SHP: "Saint Helena Pound",
    SLL: "Sierra Leonean Leone",
    SOS: "Somali Shilling",
    SRD: "Surinamese Dollar",
    STD: "S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra",
    SVC: "Salvadoran Col\u00f3n",
    SYP: "Syrian Pound",
    SZL: "Swazi Lilangeni",
    THB: "Thai Baht",
    TJS: "Tajikistani Somoni",
    TMT: "Turkmenistani Manat",
    TND: "Tunisian Dinar",
    TOP: "Tongan Pa\u02bbanga",
    TRY: "Turkish Lira",
    TTD: "Trinidad and Tobago Dollar",
    TWD: "New Taiwan Dollar",
    TZS: "Tanzanian Shilling",
    UAH: "Ukrainian Hryvnia",
    UGX: "Ugandan Shilling",
    USD: "United States Dollar",
    UYU: "Uruguayan Peso",
    UZS: "Uzbekistan Som",
    VEF: "Venezuelan Bol\u00edvar Fuerte",
    VND: "Vietnamese Dong",
    VUV: "Vanuatu Vatu",
    WST: "Samoan Tala",
    XAF: "CFA Franc BEAC",
    XAG: "Silver (troy ounce)",
    XAU: "Gold (troy ounce)",
    XCD: "East Caribbean Dollar",
    XDR: "Special Drawing Rights",
    XOF: "CFA Franc BCEAO",
    XPF: "CFP Franc",
    YER: "Yemeni Rial",
    ZAR: "South African Rand",
    ZMK: "Zambian Kwacha (pre-2013)",
    ZMW: "Zambian Kwacha",
    ZWL: "Zimbabwean Dollar",
  },
};

// convert sample for testing
convertSample = {
  date: "2022-09-17",
  info: {
    rate: 0.877119,
    timestamp: 1663440573,
  },
  query: {
    amount: 5,
    from: "EUR",
    to: "GBP",
  },
  result: 4.385595,
  success: true,
};

/* 
.
.
my code starts here
.
.
*/

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
  textElement2.textContent = myselect2.options[myselect2.selectedIndex].text; // to update the text in the span element
});

let inputValue = 0;
// Getting the value of #fromCurrency input and updating #fromResult number
const inputElement = document.getElementById("fromCurrency");
const numberElement = document.getElementById("num1");
inputElement.addEventListener("keyup", function changeHandler(e) {
  inputValue = inputElement.value;
  fetchingConvert();
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
}

// getting the final converted result value and display it in html
keysArr = Object.values(convertSample);
convResult = keysArr[3];
console.log(convResult);
const numberElement2 = document.getElementById("num2");
numberElement2.textContent = convResult.toFixed(2);
