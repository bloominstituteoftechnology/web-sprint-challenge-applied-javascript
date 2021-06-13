const Header = (title, date, temp)  =>  {
  const top = document.createElement('div')
  top.classList.add('header')
  
  const span1 = document.createElement('span')
  span1.classList.add('date')
  span1.textContent = `${date}`
  
  const h1 = document.createElement('h1')
  h1.textContent = `${title}`
  
  const span2 = document.createElement('span')
  span2.classList.add('temp')
  span2.textContent = `${temp}`
  
  top.appendChild(span1)
  top.appendChild(h1)
  top.appendChild(span2)
  
  console.log(top)
  return top
  
}

const headerAppender = (selector) => {
  const newHeader = Header("stuff", "stuff2", "stuff3")
  selector.appendChild(newHeader)
  console.log(selector)
 }

export { Header, headerAppender }




