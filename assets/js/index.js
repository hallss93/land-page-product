setTimeout(() => {
    const containerYellow = document.querySelector('.container-yellow')
    const notebookYellow = document.querySelector('.container .half img.notebook-yellow')
    const info = document.querySelector('.info')
    const navbar = document.querySelector('.navbar');

    containerYellow.classList.add('expand')
    notebookYellow.classList.add('show')
    info.classList.add('show')

    setTimeout(() => {
        navbar.style.width = `${(document.body.clientWidth - 100 - containerYellow.offsetWidth)}px`
        navbar.classList.add("show");
        const offsetWidth = document.querySelector('.container-yellow.expand').offsetWidth;
        const imgBlue = document.querySelector('div.container-yellow.expand > img.notebook-blue')
        const supermarket = document.querySelector("#supermarket")

        supermarket.classList.add("margin")
        /* let linear = 85.0;
        const body = document.body
        setTimeout(() => {

            const time = setInterval(() => {
                if (linear >= 82) {
                    linear = linear - 0.1;
                    body.style.background = "linear-gradient(90deg, #b4c0e7 " + linear + "%, #fee140 85%)"
                } else {
                    clearInterval(time);
                }
            }, 10);
        }, 300); */


        imgBlue.style.right = "calc(" + offsetWidth + "px - 110px)"
        imgBlue.classList.add('show');

    }, 500);
}, 1000);
