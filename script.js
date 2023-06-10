let addBtn = document.getElementById('add');
let inputText = document.getElementById('inputText')
let toDo = document.getElementById('to-do')
let clearBtn = document.getElementById('clean')

addBtn.addEventListener('click', () => {
    let newPrg = document.createElement('div');
    toDo.appendChild(newPrg);
    newPrg.innerHTML = inputText.value;
    newPrg.classList.add('todoTitle')
    inputText.value = ''

    newPrg.addEventListener('click', () => {
        newPrg.style.textDecoration = 'line-through'
        newPrg.style.backgroundColor = 'green'
    })

    newPrg.addEventListener('dblclick', () => {
        newPrg.remove()
    })

    clearBtn.addEventListener('click', () => {
        while (toDo.firstChild) {
            toDo.removeChild(toDo.firstChild)
        }
    })
})

