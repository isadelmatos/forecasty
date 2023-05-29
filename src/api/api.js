const apiKey = '854883ce7a54470abe4224043232205';

async function getData(local) {

    const url = `https://api.weatherapi.com/v1/forecast.json?q=${local}&days=5&key=${apiKey}`;

    let response = await fetch(url);
    let data = response.json();

    return data;
}

export default getData;