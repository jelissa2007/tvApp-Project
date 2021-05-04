const posterDiv = document.getElementById('poster_container')


const addPoster = (data) => {
    console.log(data)
    for (let i = 0; i < 10; i++) {
        const poster = document.createElement('img')
        const bttn = document.createElement('button')

        if (data[i].show.image != null) {
            bttn.innerHTML = "Add to List";
            bttn.className = 'bttn'
            posterDiv.appendChild(bttn)
            poster.src = data[i].show.image.medium
            console.log(poster)

            posterDiv.appendChild(poster)
            poster.className = `pic${[i]}`



        }
    }

}

function doSearch(event) {
    event.preventDefault()

    const form = event.target
    console.log(form.tvChoice)
    const title = form.tvChoice.value
    fetch(`http://api.tvmaze.com/search/shows?q=${title}`)
        .then(reply => reply.json())
        .then(reply => addPoster(reply))

}

// adding streaming url in linked image 
document.getElementById('netflix').addEventListener('click', function (e) {
    window.open('http://www.netflix.com', '_blank');
});

