const apiKey = import.meta.env.VITE_API_KEY;

async function getData(local) {

    const url = `https://api.weatherapi.com/v1/forecast.json?q=${local}&days=7&key=${apiKey}`;

    let response = await fetch(url);
    let data = response.json();

    return data;
}

export default getData;