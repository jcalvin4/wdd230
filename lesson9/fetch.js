const url= "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json"
fetch(url)
.then(response => response.json())
.then( data => {
    console.log(data);
    const pname = document.createElement("h1");
    h1.textContent = data["name"] + data["lastname"];
    resultElement.appendChild(h1);
    const birthdate = document.createElement("h2");
    birthdate.textContent = data["birthdate"];
    resultElement.appendChild(birthdate);
    birthplace = document.createElement("h3");
    birthplace.textContent = data["birthplace"]
})

data['members'].forEach(
    member => 
    {

    } 
)

function populateMember(member) {
    const s1 = document.createElement('section');
    const h3 = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const ul = document.createElement('ul');

    h3.textContent = member['name'];
    p1.textContent = member['age'];
    p2.textContent = member['secretIdentity'];

    member['powers'].forEach(power => {
        const li = document.createElement('li');
        li.textContent = power;
        ul.appendChild(li);
    });

    s1.appendChild(h3);
    s1.appendChild(p1);
    s1.appendChild(p2);
    s1.appendChild(p3);
    
}