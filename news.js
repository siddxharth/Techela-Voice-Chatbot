const api_key = "e2dc63efa5d3401fa9cceab29953c86b";

const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e2dc63efa5d3401fa9cceab29953c86b";

// store the response in a variable
var xhReq = new XMLHttpRequest();
xhReq.open("GET", url, false);
xhReq.send(null);
var newsObj = JSON.parse(xhReq.responseText)

// create card for each news
newsObj.articles.forEach((element, i) => {
    const news_main = document.querySelector(".news-main");

    // create card
    const card = document.createElement("div");
    card.classList.add("card");

    let date = new Date(element.publishedAt);
    let dateString = date.toDateString();

    let description = newsObj.articles[i].description;
    if(description===null){
        description = "No description available";
    }

    const newsCard = `
        <div class="news-card">
            <div class="news-title">${newsObj.articles[i].title}</div>
            <div class="news-date">${dateString}</div>
            <div class="news-content">${description}</div>
        </div>
    `;

    card.innerHTML += newsCard;

    news_main.appendChild(card);
});