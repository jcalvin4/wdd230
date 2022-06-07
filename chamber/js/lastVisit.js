let lastVisitDate;
        const now = Date.now();
        if (window.localStorage.getItem('last-visit-date')){
            lastVisitDate = window.localStorage.getItem('last-visit-date')
        } else { 
            lastVisitDate = 0;
        }
        window.localStorage.setItem('last-visit-date', now);

        const seconds = Math.floor((now - lastVisitDate) / 1000);
        const days = Math.floor(seconds / 86400)

        console.log(seconds);
        document.querySelector('#seconds-ago').textContent = seconds;
        document.querySelector('#days-ago').textContent = days;