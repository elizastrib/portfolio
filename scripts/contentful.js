

const spaceID = "3jcgtxpd2wcc"
const environmentID = "master"
const accessToken = "a9Vb129rJEq4_NumhQVPv8z0nCNY4Un22nLFpx6vWEg"

const url = "https://cdn.contentful.com/spaces/"+spaceID+"/environments/"+environmentID+"/entries?access_token="+accessToken

const projectContainer = document.querySelector('section#projects-list')
const modalContainer = document.querySelector('div#modal')


const body = document.querySelector('body')

const projects = document.querySelectorAll('div.project')

const modals = document.querySelectorAll('div#modal')
const modalBG = document.querySelector('div#modal-bg')
const modalLinks = modal.querySelectorAll('a')

const openModal = document.querySelector('div#modal.show')

const closeLinks = document.querySelectorAll('div.close a')






const grabData = function () {

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.items.map(item => {
                return item.fields
            })
        })
}


const modalFunctionality = function () {
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
    
        
    })
    
    
    
    closeLinks.forEach(close => {
        close.addEventListener('click', function(event) {
            openModal.classList.remove('show')
            modalBG.classList.remove('show')
        })
    })
    
    modalBG.addEventListener('click', function(event) {
        openModal.classList.remove('show')
        modalBG.classList.remove('show')
    })

}




grabData()
    .then( data => {
        console.log(data)

        projectContainer.innerHTML = ""
        modal.innerHTML = ""

        data.forEach(item => {

            projectContainer.innerHTML = projectContainer.innerHTML + `
                <div class="project" data-modal="${item.tag}" data-color="${item.color}">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                </div>
            `

            modalContainer.innerHTML = modalContainer.innerHTML + `
                        <div class="close"><a>close</a></div>
                        <div data-modal="${item.tag}">${item.content}</div>
            `

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
            })
            

            closeLinks.forEach(close => {
                close.addEventListener('click', function(event) {
                    openModal.classList.remove('show')
                    modalBG.classList.remove('show')
                })
            })
            
            modalBG.addEventListener('click', function(event) {
                openModal.classList.remove('show')
                modalBG.classList.remove('show')
            })
            

        })
    })


    
