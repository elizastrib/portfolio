

//import { documentToHtmlString } from '/node_modules/@contentful/rich-text-html-renderer';

const spaceID = "3jcgtxpd2wcc"
const environmentID = "master"
const accessToken = "a9Vb129rJEq4_NumhQVPv8z0nCNY4Un22nLFpx6vWEg"

const url = "https://cdn.contentful.com/spaces/"+spaceID+"/environments/"+environmentID+"/entries?access_token="+accessToken

const projectContainer = document.querySelector('section#projects-list')
const modalContainer = document.querySelector('section#modal-container')

const body = document.querySelector('body')


const grabData = function () {

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.items.map(item => {

                const rawContent = item.fields.content
                const rendered = documentToHtmlString(rawContent)
                
                item.fields.content = rendered

                return item.fields  
            })
        })
}


grabData()
    .then( data => {

        projectContainer.innerHTML = ""
        modalContainer.innerHTML = ""

        data.forEach(item => {

            projectContainer.innerHTML = projectContainer.innerHTML + `
                <div class="project" data-modal="${item.tag}" data-color="${item.color}">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                </div>
            `

            modalContainer.innerHTML = modalContainer.innerHTML + `
                <div id="modal" data-modal="${item.tag}">
                    <div class="close"><a>close</a></div>
                    <div class="content">${item.content}</div>
                </div>
            `

            const projects = document.querySelectorAll('div.project')
            const modals = document.querySelectorAll('div#modal')
            const modalBG = document.querySelector('div#modal-bg')
            const modalLinks = document.querySelectorAll('div#modal div.content a')
            const closeLinks = document.querySelectorAll('div.close a')


            projects.forEach(project => {
                project.addEventListener('click', function(event){
    
                    body.style.backgroundColor = project.dataset.color
                    closeLinks.forEach(link => {
                        link.style.color = project.dataset.color
                    })
                    modalLinks.forEach(link => {
                        link.style.color = project.dataset.color
                    })
            
                    modalBG.classList.toggle('show')
            
                    console.log('hello')
                    
                })

                modals.forEach(modal => {
                    project.addEventListener('click', function(event){
                        if (project.dataset.modal == modal.dataset.modal) {
                            modal.classList.toggle('show')
                        }
                    })
                    
                })
            })


            const openModal = document.querySelector('div#modal.show')

            closeLinks.forEach(close => {
                close.addEventListener('click', function(event) {
                    modals.forEach(modal => {
                        modal.classList.remove('show')
                    })
                    modalBG.classList.remove('show')
                })
            })

            modalBG.addEventListener('click', function(event) {
                modals.forEach(modal => {
                    modal.classList.remove('show')
                })
                modalBG.classList.remove('show')
            })

            

        })
    })


