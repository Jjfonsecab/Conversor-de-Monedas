const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.getElementById("result");

fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then((data) => {
    console.log(data);
    return data.json();
  })
  .then((data) => {
    console.log(data);
    display(data);
  })
  .catch((error) => {
    console.error(error);
  });

  function display(data) {
    if (data.rates) {
      const currencies = ["USD", "COP", "GBP", "JPY", "KRW"];
      const entries = Object.entries(data.rates)
        .filter(([currency]) => currencies.includes(currency));
      for (var i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
      }
    } else {
      console.error("Cannot display rates, data.rates is null or undefined");
    }
    select[0].value = "COP";
    select[1].value = "USD";
  }

btn.addEventListener("click",() =>{
    let currency1 = select[0].value;
    let currency2 = select[1].value;
    let value = input.value;

    if(currency1 != currency2){
        convert(currency1, currency2, value);
    }else{
        alert("Escoge diferentes divisas !!!");
    }
});

function convert(currency1, currency2, value) {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
      .then((val) => {
        console.log(val);
        return val.json();
      })
      .then((val) => {
        console.log(val);
        result.value = val.rates[currency2] * value;
      })
      .catch((error) => {
        console.error(error);
      });
  }