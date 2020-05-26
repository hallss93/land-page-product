setTimeout(() => {
    const containerYellow = document.querySelector('.container-yellow')
    const notebookYellow = document.querySelector('.container .half img.notebook-yellow')
    const info = document.querySelector('.info')

    containerYellow.classList.add('expand')
    notebookYellow.classList.add('show')
    info.classList.add('show')

    setTimeout(() => {
        const offsetWidth = document.querySelector('.container-yellow.expand').offsetWidth;
        const imgBlue = document.querySelector('div.container-yellow.expand > img.notebook-blue')

        imgBlue.style.right = "calc(" + offsetWidth + "px - 110px)"
        imgBlue.classList.add('show');

    }, 500);
}, 1000);
