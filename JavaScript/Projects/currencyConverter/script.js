const country = [
  {
    countryCode: "IN",
    countryName: "INDIA",
    countryCode: "INR",
  },
  {
    countryCode: "IN",
    countryName: "INDIA",
    countryCode: "INR",
  },
];

function LoadSelectOption(){
    const country1 = document.getElementById("country1");

    country.forEach((country) => {
        const op = document.createElement("option");
        op.value = country.countryCode + "_" + country.currencyCode;
        op.innerText = country.countryName;
        country1.appendChild(op);

    })
}

LoadSelectOption();


async function Fetchflag1(){
    const code =document.getElementById("country1").value
    console.log(code);
    
    const countryCode = code.split("_")[0];
    const currencyCode = code.split("_")[1];

    document.getElementById("counryFlag").src

}