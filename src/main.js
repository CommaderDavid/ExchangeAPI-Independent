import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ExchangeRate } from './exchange.js';

$(document).ready(function() {
  $("form.exchange-select").submit(function(e) {
    e.preventDefault();

    let usaDollar = $("#user-dollar").val();
    let newExchange = $("#exchange-type").val();
    let country;

    if (newExchange === "EUR") {
      country = "Europe";
    } else if (newExchange === "GBP") {
      country = "United Kingdom";
    } else if (newExchange === "CHF") {
      country = "Switzerland";
    } else if (newExchange === "INR") {
      country = "	India";
    }

    (async () => {
      let exchangeSelect = new ExchangeRate();
      const response = await exchangeSelect.getExchangeRateByCountry(newExchange);
      getElements(response);
    })();

    $("#currency-type").empty().prepend(country);

    function getElements(response) {
      if (response) {
        let exchangeTotal = usaDollar * response.conversion_rates[newExchange];
        $("#current").text(`The exchange rate is ${response.conversion_rates[newExchange]}.`);
        $("#total").empty().append("Your total is: " + exchangeTotal.toFixed(2));
      } else {
        $("#current").text(`We had an error in completing retreving your exchange rate.`);
      }
    }
  });
});
