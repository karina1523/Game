let input = document.querySelector('.input'),
    button = document.querySelector('.btn'),
    gameTime = document.querySelector('.time'),
    gameBox = document.querySelector('.game__box'),
    score = 0,
    time = 0,
    interval = 0;

button.addEventListener('click', () => {
    if (input.value > 4) {
        time = input.value
        input.value = ''
        gameBox.innerHTML = ''
        score = 0
        startGame()
    } else {
        alert('Минимум 5 секунд для старта игры')
    }
})

gameBox.addEventListener('click', (event) => {
    if (event.target.classList.contains('ball') ||
        event.target.classList.contains('square') ||
        event.target.classList.contains('triangle')) {
        score++
        event.target.remove()
        createBall()
    }
})

function startGame() {
    createBall()
    gameTime.innerHTML = time
    interval = setInterval(() => decreaseTime(), 1000)
}

function decreaseTime() {
    if (time == 1) {
        gameTime.innerHTML = 0
        endGame()
    } else {
        gameTime.innerHTML = --time
    }
}

function endGame() {
    clearInterval(interval)
    gameBox.innerHTML = `<h2 class="result">Вы набрали ${score} </h2>`
}



function createBall() {
    let ball = document.createElement('div')
    let shapeType = random(1, 3)
    if (shapeType === 3) {
        ball.classList.add('ball')
        let size = random(20, 100)
        ball.style.width = size + 'px'
        ball.style.height = size + 'px'
        ball.style.background = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
        ball.style.transition = "transform 0.2s ease-in-out";
        ball.style.boxShadow = " inset 0px 5px 15px rgba(0, 0, 0, 0.3)";
        ball.style.background = 'rgba(0, 0, 0, 0.1);'



        let params = gameBox.getBoundingClientRect()

        let leftValue = random(0, params.width - size)
        let topValue = random(0, params.height - size)

        ball.style.position = "absolute"
        ball.style.left = leftValue + 'px'
        ball.style.top = topValue + 'px'

        gameBox.append(ball)

    } else if (shapeType === 2) {
        ball.classList.add('triangle')
        let size = random(20, 100)
        ball.style.width = size + 'px'
        ball.style.height = size + 'px'
        ball.style.background = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
        ball.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
        ball.style.transition = "transform 0.2s ease-in-out";
        ball.style.boxShadow = " inset 0px 5px 15px rgba(0, 0, 0, 0.3)";
        ball.style.background = 'rgba(0, 0, 0, 0.1);'

        let params = gameBox.getBoundingClientRect()

        let leftValue = random(0, params.width - size)
        let topValue = random(0, params.height - size)

        ball.style.position = "absolute"
        ball.style.left = leftValue + 'px'
        ball.style.top = topValue + 'px'

        gameBox.append(ball)
    } else {
        ball.classList.add('square')
        let size = random(20, 100)
        ball.style.width = size + 'px'
        ball.style.height = size + 'px'
        ball.style.background = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
        ball.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
        ball.style.transition = "transform 0.2s ease-in-out";
        ball.style.boxShadow = " inset 0px 5px 15px rgba(0, 0, 0, 0.3)";
        ball.style.background = 'rgba(0, 0, 0, 0.1);'




        let params = gameBox.getBoundingClientRect()

        let leftValue = random(0, params.width - size)
        let topValue = random(0, params.height - size)

        ball.style.position = "absolute"
        ball.style.left = leftValue + 'px'
        ball.style.top = topValue + 'px'

        gameBox.append(ball)
    }

    ball.style.background = getRandomGradient();

}

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

function getRandomGradient() {
    return `linear-gradient(45deg, rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}), 
                                       rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}))`;
}





