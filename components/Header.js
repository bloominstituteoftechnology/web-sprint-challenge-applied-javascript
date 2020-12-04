

function Header() {
    // instantiating elements
    const headerDiv = document.createElement("Div");
    const dates = document.createElement("span");
    const title = document.createElement("h1");
    const temperature = document.createElement("span");
    //setting class names
    headerDiv.classList.add("header");
    dates.classList.add("date");
    title.textContent = "Lambda Times";
    temperature.classList.add("temp");
    temperature.textContent = "98";
    //append elements
    headerDiv.append(dates, title, temperature);
    //return
    return headerDiv;
}

document.querySelector("div.header-container").appendChild(Header());


