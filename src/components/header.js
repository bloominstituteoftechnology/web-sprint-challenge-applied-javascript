const Header = ({ title, date, temp }) => {
    // TASK 1
    // ---------------------
    // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
    // THhe tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
    // The text inside elements will be set using their `textContent` property (NOT `innerText`).
    //
    //  <div class="header">
    //    <span class="date">{ date }</span>
    //    <h1>{ title }</h1>
    //    <span class="temp">{ temp }</span>
    //  </div>
    //

    let newHeader = document.createElement('div');
    newHeader.classList.add('header');

    let newDate = document.createElement('span');
    newDate.classList.add('date');
    newDate.textContent = date;
    newHeader.appendChild(newDate);

    let newTitle = document.createElement('h1');
    newTitle.textContent = title;
    newHeader.appendChild(newTitle);

    let newTemp = document.createElement('span');
    newTemp.classList.add('temp');
    newTemp.textContent = temp;
    newHeader.appendChild(newTemp);

    return newHeader;
};

const headerAppender = (selector) => {

    const headerContainer = document.querySelector(selector);
    headerContainer.appendChild(Header());
    // TASK 2
    // ---------------------
    // Implement this function taking a css selector as its only argument.
    // It should create a header using the Header component above, passing arguments of your choosing.
    // It should append the header to the element in the DOM that matches the given selector.
    //

};
export { Header, headerAppender };