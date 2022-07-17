const resultElement = document.querySelector("#temples");
fetch("https://jcalvin4.github.io/wdd230/final-website/json/temples.json")
.then(response => response.json())
.then(temples => {
    console.log(temples);

   temples = temples.temples;
   temples.forEach(temple => {
    const section = document.createElement('section');
    section.setAttribute('class', 'card');

    const tname = document.createElement('h1');
    tname.textContent = `${temple["name"]}`;

    const timage = document.createElement('img');
    timage.setAttribute('class', 'image');
    timage.setAttribute('src', `${temple["images"]}`);
    timage.setAttribute('alt', `${temple["name"]}`);

    const locale = document.createElement('h3');
    locale.textContent = `${temple["address"]}`;

    const email = document.createElement('p');
    email.textContent = `${temple["email"]}`;

    const service = document.createElement('p');
    service.textContent = `Services: ${temple["services"]}`;

    const closure = document.createElement('ul');
        closure.setAttribute('class', 'schedule');;
    for (i=0; i<temple["closure"].length; i++){
        console.log(temple["closure"][i]);
        const item = document.createElement('li');
        item.textContent = `Closure Schedule:${temple["closure"][i]}`;

        closure.appendChild(item);
    }

    const history = document.createElement('ul');
    history.setAttribute('class', 'history');
    for (i=0; i<temple["history"].length; i++){
        const history = document.createElement('ul');
        history.setAttribute('class', 'history');
        console.log(temple["history"][i])
        const data = document.createElement('li')
        data.textContent = `${temple["history"][i]}`;

        history.appendChild(data);
    }

    section.appendChild(tname);
    section.appendChild(timage);
    section.appendChild(locale);
    section.appendChild(email); 
    section.appendChild(service);
    section.appendChild(closure);
    section.appendChild(history);
    resultElement.appendChild(section);




   })
})