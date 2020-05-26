setTimeout(() => {
    document.querySelector('.container-yellow').classList.add('expand')
    document.querySelector('.container .half img.notebook-yellow').classList.add('show')
    document.querySelector('.info').classList.add('show')
    setTimeout(() => {
        const offsetWidth = document.querySelector('.container-yellow.expand').offsetWidth;
        console.log(offsetWidth);
        const imgBlue = document.querySelector('div.container-yellow.expand > img.notebook-blue')
        imgBlue.style.right = "calc(" + offsetWidth + "px - 110px)"
        imgBlue.classList.add('show');

    }, 500);
}, 1000);
