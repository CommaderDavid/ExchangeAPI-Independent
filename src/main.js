import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ExchangeRate } from './exchange.js';

$(document).ready(function() {
  $("form.exchange-select").submit(function(e) {
    e.preventDefault();

    let usaDollar = $("#user-dollar").val();
    let newExchange = $("exchange-type").val();

    (async () => {
      let exchangeSelect = new ExchangeRate();
      const response = await exchangeSelect.getExchangeRateByCountry(newExchange);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $("#total").text(`Your total is ${response[8].newExchange}`)
      } else {

      }
    }
  });
});
