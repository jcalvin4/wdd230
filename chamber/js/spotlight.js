const resultEl = document.querySelector(".spotlight");

fetch('https://jcalvin4.github.io/wdd230/chamber/json/directory.json')
.then(response => response.json())
.then( businesses => {
    console.log(businesses);
    let spotarr = [];
    businesses = businesses.directory;
    businesses.forEach(business => {
            if (business["m-lvl"] == "Gold" || business["m-lvl"] == "Silver"){
                spotarr.push({address: business["address"], business: business["business"], number: business["phone-number"], website: business["website"], image: business["image"] });


           }
        
    })
    function populate() {
    

        for (i = 0; i <= 3; i++){

            let y = 4;
            let index= Math.floor(Math.random() * y);
            console.log(spotarr)
            if (i == 1){
            const section = document.createElement('section');
            section.setAttribute('class', 'gold')
            section.setAttribute('id', 'spot1') 
    
            const bname = document.createElement('h1');
            bname.textContent = `${spotarr[index]["business"]}`;
    
            const contact = document.createElement('h3');
            contact.textContent = `Phone Number: ${spotarr[index]["number"]}`;

            const website = document.createElement('p');
            website.textContent = `Website: ${spotarr[index]["website"]}`;
    
            const image = document.createElement('img');
            image.setAttribute('src', `${spotarr[index]["image"]}`);
            image.setAttribute('alt', `${spotarr[index]["business"]}`);
            image.setAttribute('class', 'logos')
    
            section.appendChild(bname);
            section.appendChild(contact);
            section.appendChild(website);
            section.appendChild(image);
            resultEl.appendChild(section);
            spotarr.shift([index]);
            } else if (i == 2){
                const section = document.createElement('section');
            section.setAttribute('class', 'gold')
            section.setAttribute('id', 'spot2') 
    
            const bname = document.createElement('h1');
            bname.textContent = `${spotarr[index]["business"]}`;
    
            const contact = document.createElement('h3');
            contact.textContent = `Phone Number: ${spotarr[index]["number"]}`;

            const website = document.createElement('p');
            website.textContent = `Website: ${spotarr[index]["website"]}`;
    
            const image = document.createElement('img');
            image.setAttribute('src', `${spotarr[index]["image"]}`);
            image.setAttribute('alt', `${spotarr[index]["business"]}`);
            image.setAttribute('class', 'logos')
    
            section.appendChild(bname);
            section.appendChild(contact);
            section.appendChild(website);
            section.appendChild(image);
            resultEl.appendChild(section);
            spotarr.shift([index]);
            } else if (i == 3){
                const section = document.createElement('section');
            section.setAttribute('class', 'gold')
            section.setAttribute('id', 'spot3') 
    
            const bname = document.createElement('h1');
            bname.textContent = `${spotarr[index]["business"]}`;
    
            const contact = document.createElement('h3');
            contact.textContent = `Phone Number: ${spotarr[index]["number"]}`;

            const website = document.createElement('p');
            website.textContent = `Website: ${spotarr[index]["website"]}`;
    
            const image = document.createElement('img');
            image.setAttribute('src', `${spotarr[index]["image"]}`);
            image.setAttribute('alt', `${spotarr[index]["business"]}`);
            image.setAttribute('class', 'logos')
    
            section.appendChild(bname);
            section.appendChild(contact);
            section.appendChild(website);
            section.appendChild(image);
            resultEl.appendChild(section);
            spotarr.shift([index]);
            }


        }
}



populate();
})