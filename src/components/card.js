const Card = (article) => {
  article.forEach(data => {
    const Ncard = document.createElement('div')
    Ncard.classList.add('card')
    
    const hLine = document.createElement('div')
    hLine.classList.add('headline')
    hLine.textContent = `${data.headline}`
    Ncard.appendChild(hLine)
    
    const auth = document.createElement('div')
    auth.classList.add('author')
    Ncard.appendChild(auth)
    
    const imgBox = document.createElement('div')
    imgBox.classList.add('img-container')
    auth.appendChild(imgBox)
    
    const authImg = document.createElement('img')
    authImg.src = `${data.authorPhoto}`
    imgBox.appendChild(authImg)
    
    const authSpan = document.createElement('span')
    authSpan.textContent = `${data.authorName}`
    auth.appendChild(authSpan)
    
    Ncard.addEventListener('click', (event) => {
      console.log(`${data.headline}`)
    })
    
    });
 
  return Ncard 
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
