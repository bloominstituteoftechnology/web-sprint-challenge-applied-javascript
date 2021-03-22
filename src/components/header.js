const Header = (title, date, temp) => {
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
    headerContainer.appendChild(Header('Lambda Times', '3.21.2021', '67F'));


};
export { Header, headerAppender };