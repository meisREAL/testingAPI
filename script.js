// const img = document.querySelector('img');

// fetch('https://api.giphy.com/v1/gifs/translate?api_key=MY-API-KEY=cats', { mode: 'cors' })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (response) {
//         img.src = response.data.images.original.url;
//     })

const img = document.querySelector('img');

async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=Oh4cxwMZTwzhwwAmCzkmeyMi1MxDcBJZ&s=cats', { mode: 'cors' })
    const catData = await response.json();
    img.src = catData.data.images.original.url;
}

getCats();