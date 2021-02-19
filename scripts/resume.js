const spaceID = "3jcgtxpd2wcc"
const environmentID = "master"
const accessToken = "a9Vb129rJEq4_NumhQVPv8z0nCNY4Un22nLFpx6vWEg"
const contentType = "resume"

let url = "https://cdn.contentful.com/spaces/"+spaceID+"/environments/"+environmentID+"/entries?access_token="+accessToken+"&order=fields.order&content_type="+contentType


const body = document.querySelector('body')
const resumeInner = document.querySelector('section#resume-container div#modal')
const resumeLink = document.querySelector('a.resume')
const modalBG = document.querySelector('div#modal-bg')
const resumeClose = resumeInner.querySelector('div.close a')


resumeLink.addEventListener('click', function () {
    body.style.backgroundColor = ""
    resumeInner.classList.toggle('show')
    modalBG.classList.toggle('show')
})

resumeClose.addEventListener('click', function () {
    console.log('close')
    resumeInner.classList.toggle('show')
    modalBG.classList.remove('show')
})


const grabData = function () {

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.items.map(item => {

                const rawContent = item.fields.sectionList
                const rendered = documentToHtmlString(rawContent)
                
                item.fields.sectionList = rendered
                return item.fields  
                
            })

        })
}

grabData()


    .then( data => {
        
        data.forEach(item => {

            resumeInner.innerHTML = resumeInner.innerHTML + `
                <h1>${item.sectionTitle}</h1>
                <div class="content">${item.sectionList}</div>
            `  
        })
        
    }) 

