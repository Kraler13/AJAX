window.addEventListener('scroll', scrollToEndOfPage);

const getData = () => {
    fetch(`https://akademia108.pl/api/ajax/get-users.php`)
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON)
            for (const iterator of resJSON) {
                let userId = iterator.id;
                console.log(userId)
                let name = iterator.name;
                console.log(name)
                let web = iterator.website;
                console.log(web);
                const pOne = (`<p>User ID: ${userId}</p>`)
                const pTwo = (`<p>User Name: ${name}</p>`)
                const pThr = (`<p>User URL: ${web}</p>`)
                $('body').append(pOne)
                $('body').append(pTwo)
                $('body').append(pThr)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}



function scrollToEndOfPage() {

    let d = document.documentElement;

    let allHeight = d.scrollHeight;
    let topHeight = d.scrollTop;
    let clientHeight = d.clientHeight;
    if (allHeight == topHeight + clientHeight) {
        getData();
    }
}