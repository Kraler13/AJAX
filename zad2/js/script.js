let btnGetRandomUser = document.getElementById('get-random-user');

const getData = () => {
    fetch(`https://akademia108.pl/api/ajax/get-post.php`, {
        mode: 'cors',
        method: 'GET', 
      })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON)
            let userId = resJSON.userId;
            console.log(userId)
            let id = resJSON.id;
            console.log(id)
            let title = resJSON.title;
            console.log(title)
            let body = resJSON.body;
            console.log(body);
            const newDiv = (`<div>${userId} ${id} ${title} ${body} </div>`)
            $('body').append(newDiv)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

btnGetRandomUser.addEventListener('click', getData);