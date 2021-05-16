const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerSelector = document.querySelector(".header-container")

function Header() {
  let arr = []

  const headDiv = document.createElement("div")
  headDiv.classList.add("header")



  const date = document.createElement("span")
  date.classList.add("date")
  date.textContent = "MARCH 28, 2020"
  arr.push(date)

  const h1 = document.createElement("h1")
  h1.textContent = "Lambda Times"
  arr.push(h1)

  const temp = document.createElement("span")
  temp.classList.add("temp")
  temp.textContent = "98°"
  arr.push(temp)

  arr.forEach(e => {
    headDiv.appendChild(e)
  })

  headerSelector.appendChild(headDiv)

}

Header()
}

const headerAppender = (selector) 
