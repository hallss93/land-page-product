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
        const body = document.body
        let linear = 85.0;
        setTimeout(() => {

            const time = setInterval(() => {
                if (linear >= 82) {
                    linear = linear - 0.1;

                    body.style.background = "linear-gradient(90deg, #8ec5fc " + linear + "%, #fee140 85%)"
                    console.log(linear)
                } else {
                    clearInterval(time);
                }
            }, 10);
        }, 300);

        imgBlue.style.right = "calc(" + offsetWidth + "px - 110px)"
        imgBlue.classList.add('show');

    }, 500);
}, 1000);
