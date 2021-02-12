
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

  const Header = (title, date, temp) => {
    const newDiv = document.createElement('div');
    const newSpan = document.appendChild('span');
    newSpan.textContent = "date";
    const newTitle = document.appendChild('h1');
    newTitle.textContent = "title";
    const newerSpan = document.appendChild('span');
    newerSpan.textContent = "temp";
}
  const headerAppender = (selector) => {
    const Header = (title, date, temp) => {
      const newDiv = document.append('div');
      const newSpan = document.appendChild('span');
      newSpan.textContent = "date";
      const newTitle = document.appendChild('h1');
      newTitle.textContent = "title";
      const newerSpan = document.appendChild('span');
      newerSpan.textContent = "temp";   
    }
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  function headerCreator(){
    const button = document.createElement('header');

    button.textContent = buttonText;



export { Header, headerAppender }
