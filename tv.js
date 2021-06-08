const container=document.getElementById('allPosters')
const addPoster=(data) => {

  while (container.firstChild) {

    container.removeChild(container.firstChild)
  }

  console.log(data)
  for (let i=0; i<data.length; i++) {



    // let finalUrl=getUrl(data[i].show.image.medium)

    if (data[i].show.image!=null) {
      const border=document.createElement('div')
      border.className='cell'

      const wrapper=document.createElement('div')
      wrapper.className='wrapper'

      const poster=document.createElement('div')
      poster.className='content'

      const detail=document.createElement('div')
      detail.className='detail'

      const h4=document.createElement('h4')
      const paragraphtag=document.createElement('p')

      container.appendChild(border)
      border.append(wrapper)
      wrapper.append(poster)
      poster.append(detail)
      detail.append(h4)
      detail.append(paragraphtag)

      let url=data[i].show.image.original
      let summary=data[i].show.summary
      let summaryp=getUrl(summary)
      // poster.src=data[i].show.image.medium
      h4.innerHTML=data[i].show.name
      paragraphtag.innerHTML=summaryp
      poster.style.backgroundImage=`url(${url})`;
      // poster.style.backgroundImage="url("+data[i].show.image.medium+")"

      console.log(border)

    }
  }
}

function doSearch(event) {
  event.preventDefault()

  const form=event.target
  console.log(form.tvChoice)
  const title=form.tvChoice.value
  fetch(`http://api.tvmaze.com/search/shows?q=${title}`)
    .then(reply => reply.json())
    .then(reply => addPoster(reply))

}





{/* <div class="cell">
  <div class="wrapper">
    <div class="content" style="src">
      <div class="detail">
      

      <h4>Show Title</h4>
        <p>info</p>
      </div>
    </div>
  </div>
</div> */}

// function getUrl(str) {
//   let url=[]
//   for (i=0; i<str.length; i++) {
//     url+=str[i]

//   }
//   url.toString()
//   console.log(url)
//   return url
// }

function getUrl(str) {
  let url=''
  for (i=3; i<str.length-4; i++) {
    url+=str[i]

  }

  console.log(url)
  return url
}