const addPoster = (data) => {
    console.log(data)
    for (let i = 0; i < 10; i++) {
        const poster = document.createElement('img')

        if (data[i].show.image != null) {

            poster.src = data[i].show.image.medium
            console.log(poster)
            document.body.appendChild(poster)
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




