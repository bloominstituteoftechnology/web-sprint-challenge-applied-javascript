import axios from "axios"

const Card = (article) => {

  console.log(article.element)

  const mainCard = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const authorName = document.createElement('span')

  headline.textContent = article.headline
  img.src = article.authorPhoto
  console.log(img)
  authorName.textContent = article.authorName

  mainCard.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  mainCard.addEventListener("click", () => {
    console.log(headline)
  })

  mainCard.appendChild(headline)
  mainCard.appendChild(author)
  author.appendChild(imgContainer)
  imgContainer.appendChild(img)
  author.appendChild(authorName)
  
  return mainCard

}


const cardAppender = async (selector) => {

  try {
    let entry = document.querySelector(selector)
    let res = await axios.get('https://lambda-times-api.herokuapp.com/articles')
    let data = res.data.articles
    data.javascript.forEach(element => {
      entry.appendChild(Card(element))
    })

    data.technology.forEach(element => {
      entry.appendChild(Card(element))
    })

    data.bootstrap.forEach(element => {
      entry.appendChild(Card(element))
    })

    data.jquery.forEach(element => {
      entry.appendChild(Card(element))
    })

    data.nodejs.forEach(element => {
      entry.appendChild(Card(element))
    })
    
  } catch (err) {
    console.log(err)
  }

}

export { Card, cardAppender }
