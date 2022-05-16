console.log("Drag and drop here...");
let imageBox = document.querySelector('.imageBox');
let whiteBoxes = document.getElementsByClassName('whiteBox');

imageBox.addEventListener('dragstart', (e) => {
    console.log('Dragstart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
})
imageBox.addEventListener('dragend', (e) => {
    console.log('Dragend has been triggered');
    e.target.className = 'imageBox';
})
for (const whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('Dragover has been triggered');

    })
    whiteBox.addEventListener('dragenter', (e) => {
        console.log('Dragenter has been triggered');
        e.target.className += ' dashed'
    })
    whiteBox.addEventListener('dragleave', (e) => {
        console.log('Dragleave has been triggered');
        e.target.className = 'whiteBox';
    })
    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imageBox);
    })
}