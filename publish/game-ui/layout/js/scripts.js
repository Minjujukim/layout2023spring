document
    .addEventListener('DOMContentLoaded', () => {

        document
    .getElementById('sort-by-color')
        .addEventListener('click', () => {
                document.getElementById('tile-1').classList.remove()
                document.getElementById('tile-1').classList.add('red number-1')
                document.getElementById('tile-2').classList.remove()
                document.getElementById('tile-2').classList.add('red number-3')
                document.getElementById('tile-3').classList.remove()
                document.getElementById('tile-3').classList.add('hidden')
        })

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