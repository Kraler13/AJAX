let btnGetRandomUser = document.getElementById('get-random-user');

const getUser = () => {
    fetch(`https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php`, {
        mode: 'cors',
        method: 'GET', 
      })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON)
            let name = resJSON.imie;
            console.log(name)
            let lastName = resJSON.nazwisko;
            console.log(lastName)
            let job = resJSON.zawod;
            console.log(job)
            let workPlace = resJSON.firma;
            console.log(workPlace);
            const newDiv = (`<div class="dane-programisty">${name} ${lastName} ${workPlace} ${job} </div>`)
            $('body').append(newDiv)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

btnGetRandomUser.addEventListener('click', getUser);