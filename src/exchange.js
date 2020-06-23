export class ExchangeRate {
  async getExchangeRateByCountry(){
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
        alert(`There was an error, with the response: ${response.status}`);
      }
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  }
}
