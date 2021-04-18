
const Header = (title, date, temp) => {

  const mainHeader = document.createElement('div')
  const dateSpan = document.createElement('span')
  const h1Title = document.createElement('h1')
  const tempSpan = document.createElement('span')

  mainHeader.classList.add('header')
  dateSpan.classList.add('date')
  tempSpan.classList.add('temp')

  dateSpan.textContent = `Published: ${date}`
  h1Title.textContent = title
  tempSpan.textContent = `Temperature: ${temp}`

  mainHeader.appendChild(dateSpan)
  mainHeader.appendChild(h1Title)
  mainHeader.appendChild(tempSpan)

  return mainHeader

}

const headerAppender = (selector) => {

  let entry = document.querySelector(selector)
  entry.appendChild(Header('The NY Times', '3/17/21', '52 Degrees'))
  
}

export { Header, headerAppender }
