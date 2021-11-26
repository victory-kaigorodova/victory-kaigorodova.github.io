const items = document.querySelectorAll('.items')


for (let i of items) {
    i.addEventListener('dragstart', function() {
        console.log(i)
        i.classList.add('item')
    })

    i.addEventListener('dragstart', dragstart)
    i.addEventListener('dragend', dragend)
    
    const placeholders = document.querySelectorAll('.placeholder')

    for (let place of placeholders) {
        place.addEventListener('dragover', dragover)
        place.addEventListener('dragenter', dragenter)
        place.addEventListener('dragleave', dragleave)
        place.addEventListener('drop', dragdrop)
    } 
    function dragstart(event) {
        console.log('drag start ', event, event.target, this)
        event.target.classList.add('hold')
        setTimeout(() => event.target.classList.add('hidden'), 0)
    }
    
    function dragend(event) {
        console.log('drag end')
        event.target.classList.remove('hold', 'hidden')
    
    }
    
    function dragover(event) {
        event.preventDefault()
        console.log('drag over')
    }
    function dragenter(event) {
        console.log('drag enter',  event.target)
        event.target.classList.add('holdplace')
    }
    function dragleave(event) {
        console.log('drag leave')
        event.target.classList.remove('holdplace')
    
    }
    function dragdrop(event) {
        console.log('drag drop')
        event.target.classList.remove('holdplace')
        event.target.append(i)
    }

    i.addEventListener('dragend', function() {
        console.log(i)
        i.classList.remove('item')
    })

}
