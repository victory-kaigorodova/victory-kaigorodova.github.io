let s = Math.random()
console.log(s)
console.log(s * 10)
console.log(Math.ceil(s * 10)) //округление до большего целого
console.log(Math.floor(s * 10)) //округление до меньшего целого

function getRandom(min, max) {
    return Math.random() * (max - min) + min 
}

let a = getRandom(1, 7)
console.log(a)
console.log(Math.ceil(a)) //округление до большего целого
console.log(Math.floor(a)) //округление до меньшего целого

let value

const button = document.querySelector('.button')
button.addEventListener('click', function() {
    value = Math.floor(getRandom(1, 7))
    console.log(document.querySelector('.text').innerHTML = value)
    console.log(`${value}.png`)
    console.log(document.querySelector('.img'))
    console.log(document.querySelector('.img').style)
    document.querySelector('.img').style.backgroundImage = `url(\"${value}.png\")`
    console.log(document.querySelector('.img').style.backgroundImage)
})

// document.write("<img src=\"kartinki-na-zadnij-fon-16.jpg\" width=\"300px\">")