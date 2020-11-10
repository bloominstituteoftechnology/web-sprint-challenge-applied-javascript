axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then((response) => {
    console.log(response.data.articles);
    console.log(Object.values(response.data.articles));
    Object.values(response.data.articles).forEach((element) => {
        element.forEach(element => {
            let newCard = cardCreator(element);
            let entryPoint = document.querySelector('.cards-container');
            entryPoint.appendChild(newCard);
        });
    });
})

function cardCreator (data) {
    // <div class="card">
    const card = document.createElement('div');
    card.classList.add('card');

    //<div class="headline">{Headline of article}</div>
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = data.headline;
    card.appendChild(headline);

    //<div class="author">
    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    //<div class="img-container">
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);

    //<img src={url of authors image} />
    const img = document.createElement('img');
    img.src = data.authorPhoto;
    imgContainer.appendChild(img);

    //<span>By {author's name}</span>
    const authorName = document.createElement('span');
    authorName.textContent = `By ${data.authorName}`;
    author.appendChild(authorName);

    //event listener
    card.addEventListener('click', event => {
        console.log(headline.textContent);
    });

    //return card
    return card;
}