const text = document.getElementById('quotes');
const author = document.getElementById('quotee');
const sendTweet = document.getElementById('tweet');

const generateNew = async () => {

    var url = "https://type.fit/api/quotes";

    const response = await fetch(url);
    console.log(typeof response);

    const allQuotes = await response.json();

    const indx = Math.floor(Math.random() * allQuotes.length);

    const quotes = allQuotes[indx].text;

    const originator = allQuotes[indx].author;

    if (originator == null) {
        author = "Unknown";
    }

    text.innerHTML = quotes;
    author.innerHTML = '-' + originator;

    sendTweet.href = "https://twitter.com/intent/tweet?text=" + quotes + '-' + originator;

};

generateNew();