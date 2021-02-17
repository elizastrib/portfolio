const body = document.querySelector('body')

const projects = document.querySelectorAll('div.project')

const modals = document.querySelectorAll('div#modal')
const modalBG = document.querySelector('div#modal-bg')
const modalLinks = modal.querySelectorAll('a')

const openModal = document.querySelector('div#modal.show')

const closeLinks = document.querySelectorAll('div.close a')


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
    
        modals.forEach(modal => {
            project.addEventListener('click', function(e){
                if (project.dataset.modal == modal.dataset.modal) {
                    modal.classList.toggle('show')
                  }
            })
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


