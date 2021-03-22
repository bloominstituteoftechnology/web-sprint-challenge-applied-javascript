const Header = (title, date, temp) => {
  const header = document.createElement('div');
  header.classList.add('header');

  const headerDate = document.createElement('span');
  headerDate.classList.add('date');
  headerDate.textContent = `${date}`;
  header.appendChild(headerDate);

  const headerH1 = document.createElement('h1')
  headerH1.textContent = `${title}`
  header.appendChild(headerH1)

  const headerTemp = document.createElement('span')
  headerTemp.classList.add('temp')
  headerTemp.textContent = `${temp}`
  header.appendChild(headerTemp)

  console.log(header);
  return header;
}

const headerAppender = (selector) => {
  document.querySelector(selector).appendChild(Header('Lambda Times', 'February 12th, 2021', '15 degrees'));
}

export { Header, headerAppender }
