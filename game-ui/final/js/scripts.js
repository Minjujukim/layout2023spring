document
    .addEventListener('DOMContentLoaded', () => {
        let count = 0;
        const sorted_circles = document.getElementsByClassName('tile-circle-sorted');
        for(let i = 0; i < sorted_circles.length; i++) {
            sorted_circles[i].style.display = 'none';
        }
        const sorted_color_circles = document.getElementsByClassName('tile-circle-color-sorted');
        for(let i = 0; i < sorted_color_circles.length; i++) {
            sorted_color_circles[i].style.display = 'none';
        }
        const extra_color_circles = document.getElementsByClassName('hidden-tile');
        for(let i = 0; i < extra_color_circles.length; i++) {
            extra_color_circles[i].style.display = 'none';
        }
        
        document.getElementById('sort-by-number').addEventListener('click', () => {
            const circles = document.getElementsByClassName('tile-circle');
            for (let i = 0; i < circles.length; i++) {
              circles[i].style.display = 'none';
            }
            const csc = document.getElementsByClassName('tile-circle-color-sorted');
            for (let i = 0; i < csc.length; i++) {
                csc[i].style.display = 'none';
            }
            const sc = document.getElementsByClassName('tile-circle-sorted');
            for (let i = 0; i < sc.length; i++) {
                sc[i].style.display = 'block';
            }

        })

        document.getElementById('sort-by-color').addEventListener('click', () => {
            const circles = document.getElementsByClassName('tile-circle');
            for (let i = 0; i < circles.length; i++) {
              circles[i].style.display = 'none';
            }
            const csc = document.getElementsByClassName('tile-circle-color-sorted');
            for (let i = 0; i < csc.length; i++) {
                csc[i].style.display = 'block';
            }
            const sc = document.getElementsByClassName('tile-circle-sorted');
            for (let i = 0; i < sc.length; i++) {
                sc[i].style.display = 'none';
            }
        })

        document.getElementById('more-tiles').addEventListener('click', () => {
            count++;
            let id = "hidden-tile-" + count;
            document.getElementById(id).style.display = 'flex';

        })



    //     document
    //     .getElementById('sort-by-color')
    //     .addEventListener('click', () => {
    //             document.getElementById('tile-1').classList.remove()
    //             document.getElementById('tile-1').classList.add('.threes-organizer #tile-1 .tile-circle')
    //             document.getElementById('tile-2').classList.remove()
    //             document.getElementById('tile-2').classList.add('red number-3')
    //             document.getElementById('tile-3').classList.remove()
    //             document.getElementById('tile-3').classList.add('hidden')
    //     })

 



    //     document
    // .getElementById('sort-by-color')
    //     .addEventListener('click', () => {
    //         document.getElementById('stand-container').classList.toggle("sort-by-color")

    //     })

    //     document
    // .getElementById('sort-by-number')
    //     .addEventListener('click', () => {
    //         document.getElementById('stand-container').classList.toggle("sort-by-color")

    //     })

    //     document
    // .getElementById('more-tiles')
    //     .addEventListener('click', () => {
    //         document.getElementById('stand-container').classList.toggle("pouch")

    //     })




        // document
        //     .getElementById('status-bar-1')
        //     .addEventListener('click', () => {
        //         document
        //             .getElementById('status-bar-1')
        //             .classList
        //             .toggle('high')
        //     })

        // document
        //     .getElementById('cycle-status-states-btn')
        //     .addEventListener('click', () => {
        //         const statusBar = document
        //             .getElementById('status-bar-5')
        //         const cycleClasses = statusBar.dataset.cycleclasses.split(',')
        //         const currentClass = statusBar.dataset.currentclass
        //         const position = cycleClasses.indexOf(currentClass)
        //         const nextClass = cycleClasses[position + 1] || cycleClasses[0]
        //         statusBar.dataset.currentclass = nextClass
        //         statusBar.classList.remove(currentClass)
        //         statusBar.classList.add(nextClass)
        //     })

    })