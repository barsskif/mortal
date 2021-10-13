const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [''],
    attack: () => {
        console.log(`${player1.name} Fight...`)
    }
}

const player2 = {
    name: 'Kitana',
    hp: 60,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: [''],
    attack: () => {
        console.log(`${player2.name} Fight...`)
    }
}


const createPlayer = (player, name, hp, imgSrc) => {
    const $player = document.createElement('div');
    $player.classList.add(player)
    const $areas = document.querySelector('div.arenas')
    $areas.appendChild($player)


    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    const $areasprogres = document.querySelector(`div.${player}`)
    $areasprogres.appendChild($progressbar)

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = `${hp}%`
    const $lifearea = document.querySelector(`div.${player} div.progressbar`)
    $lifearea.appendChild($life)

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name
    const $nameArea = document.querySelector(`div.${player} div.progressbar`)
    $nameArea.appendChild($name)



    const $character = document.createElement('div');
    $character.classList.add('character');
    const $areacharacter = document.querySelector(`div.${player}`)
    $areacharacter.appendChild($character)


    const $img = document.createElement('img')
    $img.src = imgSrc
    $character.appendChild($img)






}
console.log(player1.img)

createPlayer('player1', 'SCORPION', 100, player1.img)
createPlayer('player2', 'SCORPION', 50, player2.img)