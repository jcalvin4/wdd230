const link = "person.json"
const resultElement = document.querySelector('#person');
fetch(link)
.then(response => response.json())
.then( data => {
    console.log(data)
    const name = document.createElement('h1');
    name.textContent = `${data["firstName"]} ${data["lastName"]}, AGE: ${data["age"]}`;
    resultElement.appendChild(name);
    
})

