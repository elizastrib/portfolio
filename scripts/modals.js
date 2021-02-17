

const projectList = document.querySelector('section#projects-list')
const projects = projectList.querySelectorAll('div.project')


const modal = document.querySelector('div#modal')
const modalBG = document.querySelector('div#modal-bg')

const closeLinks = document.querySelectorAll('div.close a')




projects.forEach(project => {
    project.addEventListener('click', function(event){
        modalBG.classList.toggle('show')
        modal.classList.toggle('show')
        console.log('hello')
    })
})



closeLinks.forEach(close => {
    close.addEventListener('click', function(event) {
        modal.classList.remove('show')
        modalBG.classList.remove('show')
    })
})

modalBG.addEventListener('click', function(event) {
    modal.classList.remove('show')
    modalBG.classList.remove('show')
})
