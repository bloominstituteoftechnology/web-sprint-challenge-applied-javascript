const Card = (article) => {
  article.forEach(data =>{
    const card = document.createElement('div')
    card.classList.add('card')
    
    const hLine = document.createElement('div')
    hLine.classList.add('headline')
    hLine.textContent = `${data.headline}`
    card.appendChild(hLine)
    
    const auth = document.createElement('div')
    auth.classList.add('author')
    card.appendChild(auth)
    
    const imgBox = document.createElement('div')
    imgBox.classList.add('img-container')
    auth.appendChild(imgBox)
    
    const authImg = document.createElement('img')
    authImg.src = `${data.authorPhoto}`
    imgBox.appendChild(authImg)
    
    const authSpan = document.createElement('span')
    authSpan.textContent = `${data.authorName}`
    auth.appendChild(authSpan)
    
    card.addEventListener('click', (event) => {
      console.log(`${data.headline}`)
    })
    
    });
 
  return card 
}

const cardAppender = (selector) => {
  const mountingpoint = document.querySelector(selector)
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(response => {
    response.data.articles.forEach(things =>{
      const madeCard = Card(things)
      mountingpoint.appendChild(madeCard)
    });
  })
}

export { Card, cardAppender }
