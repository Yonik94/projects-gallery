'use strict'
var projects = [
    { name: 'minesweeper', description: 'Over all the board without touching the mines', publishedAt: 1591013959 },
    { name: 'pacman', description: 'eat all the food and run away from the ghosts', publishedAt: 1591013959 },
    { name: 'touch-nums', description: `touch the nums from low to high at the shortest time
    - it is not so easy as it heard`, publishedAt: 1591013959 }
]
var gProjs = createProjs(projects)

function createProj(name, description, publishedAt) {
    function getTitle() {
        return name.replace(/-/g, ' ').replace(/\b./g, letter => letter.toUpperCase())
    }
    var proj = {
        name: name,
        title: getTitle(),
        img: `img/portfolio/${name}.jpg`,
        description: description,
        url: `https://yonik94.github.io/${name}`,
        publishedAt: publishedAt,
        lables: []
    }
    return proj
}

function createProjs(projects) {
    var projs = projects.map(proj => {
        return createProj(proj.name, proj.description, proj.publishedAt)
    })
    return projs
}

function getProjs() {
    return gProjs
}

function getProjById(name){
    var proj = gProjs.find(proj => proj.name === name)
    return proj
}