const text = document.getElementById('quotes');
const author = document.getElementById('quotee');

const generateNew = async () => {

    // The below code is where the quotes are generated from through API
    var url = "https://type.fit/api/quotes";

    // The below code is needed to fetch the API
    const response = await fetch(url);
    //Converts code in JSON
    console.log(typeof response);

    const allQuotes = await response.json();

    //To generate random number for quotes from 0 until the length of quotes
    const indx = Math.floor(Math.random() * allQuotes.length);
    //Random generated index stores the quote
    const quotes = allQuotes[indx].text;
    //Random generated index stores the quotee
    const originator = allQuotes[indx].author;

    if (originator == null) {
        author = "Unknown";
    }
    //The function to display the data taken from API
    text.innerHTML = quotes;
    author.innerHTML = '-' + originator;

};

generateNew();