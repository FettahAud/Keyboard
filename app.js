const keys = document.querySelectorAll('.row div')
const textArea = document.querySelector('textarea')
const deleteKey = document.querySelector('.delete')
const shiftKey = document.querySelector('.shift')
const enterKey = document.querySelector('.enter')
const spaceKey = document.querySelector('.space')

let shift = false
keys.forEach( key => {
    key.addEventListener('click', function () {
        // Global case if shift is true is transform letters to upper if is not just witing the letter as it
        shift ? textArea.textContent += this.textContent.toUpperCase() : textArea.textContent += this.textContent 

        switch (this) {
            // Shift key case
            case shiftKey:
                shift = !shift
                for (let i = 0; i < keys.length; i++) {
                    if (shift)
                        keys[i].style.textTransform = 'uppercase'
                    else 
                        keys[i].style.textTransform = 'lowercase'
                    
                }
            break;

            // Delete key case 
            case deleteKey:
                textArea.textContent = textArea.textContent.substring(0, textArea.textContent.length - 1)
            break;

            // enter key case
            case enterKey:
                textArea.textContent += '\n'
            break;

            // Space key case
            case spaceKey:
                textArea.textContent += ' '
            break;
        }
    })
})