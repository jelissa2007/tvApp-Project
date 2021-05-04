const addPoster = (data) => {
    console.log(data)
    for (let i = 0; i < data.length; i++) { //changed from 10 to data.length to avoid error
        const poster = document.createElement('img')
        const title = document.createElement('h3')
        const genres = document.createElement('h5')
        const summary = document.createElement('p')
        const streamingPlatform = document.createElement('h5')

        if (data[i].show.image != null && data[i].show.webChannel != null) { // will not show shows that have no poster and that don't have a streaming channelgit

            poster.src = data[i].show.image.medium
            title.innerHTML = data[i].show.name
            genres.innerHTML = data[i].show.genres
            summary.innerHTML = data[i].show.summary
            streamingPlatform.innerHTML = data[i].show.webChannel.name
            console.log(poster)
            document.body.appendChild(poster)
            document.body.appendChild(title)
            document.body.appendChild(genres)
            document.body.appendChild(summary)
            document.body.appendChild(streamingPlatform)

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















