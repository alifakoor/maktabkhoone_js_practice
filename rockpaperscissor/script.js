const rockPaperScissor = ['Rock', 'Paper', 'Scissor']
let play = {
    player1: {
        isPlayed: false,
        choose: null
    },
    player2: {
        isPlayed: false,
        choose: null
    }
}
const start = (e, player) => {
    let numberOfPlayer = Number(player.substr(15))
    e.target.disabled = true
    let randomChoose = Math.floor(Math.random() * rockPaperScissor.length)
    if (numberOfPlayer === 1) {
        play.player1.choose = rockPaperScissor[randomChoose]
        play.player1.isPlayed = true
    } else {
        play.player2.choose = rockPaperScissor[randomChoose]
        play.player2.isPlayed = true
    }
    document.getElementById(player).innerHTML = rockPaperScissor[randomChoose]
    winner()
}

const winner = () => {
    if (play.player1.isPlayed && play.player2.isPlayed) {
        let player1Choose = play.player1.choose
        let player2Choose = play.player2.choose
        if (player1Choose === player2Choose) {
            document.getElementById('winner').innerHTML = 'Both are Equal!'
            document.getElementById('playAgain').disabled = false
        } else if (player1Choose === 'Rock' && player2Choose === 'Paper') {
            document.getElementById('winner').innerHTML = 'Player 2'
            document.getElementById('playAgain').disabled = false
        } else if (player1Choose === 'Rock' && player2Choose === 'Scissor') {
            document.getElementById('winner').innerHTML = 'Player 1'
            document.getElementById('playAgain').disabled = false
        } else if (player1Choose === 'Paper' && player2Choose === 'Scissor') {
            document.getElementById('winner').innerHTML = 'Player 2'
            document.getElementById('playAgain').disabled = false
        } else if (player1Choose === 'Paper' && player2Choose === 'Rock') {
            document.getElementById('winner').innerHTML = 'Player 1'
            document.getElementById('playAgain').disabled = false
        } else if (player1Choose === 'Scissor' && player2Choose === 'Rock') {
            document.getElementById('winner').innerHTML = 'Player 2'
            document.getElementById('playAgain').disabled = false
        } else if (player1Choose === 'Scissor' && player2Choose === 'Paper') {
            document.getElementById('winner').innerHTML = 'Player 1'
            document.getElementById('playAgain').disabled = false
        }
    }
}

const startAgain = (e) => {
    e.target.disabled = true
    play.player1.isPlayed = false
    play.player2.isPlayed = false
    play.player1.choose = null
    play.player2.choose = null
    document.getElementById('startForPlayer1').disabled = false
    document.getElementById('startForPlayer2').disabled = false
    document.getElementById('resultForPlayer1').innerHTML = ''
    document.getElementById('resultForPlayer2').innerHTML = ''
    document.getElementById('winner').innerHTML = ''
}