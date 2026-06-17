game = () => {
    let humanscore = 0;
    let computerscore = 0;
    let rou = 0;
    const playgame = () => {
        const rock = document.querySelector(".rock");
        const paper = document.querySelector(".paper");
        const scissor = document.querySelector(".scissor");
        const humanoptions = [rock, paper, scissor];
        const computeroptions = ['rock', 'paper', 'scissor'];
        humanoptions.forEach(option => {
            option.addEventListener('click', function () {
                const round = document.querySelector(".round");
                rou++;
                round.textContent = `round:${rou}`;
                const choiceNumber = Math.floor(Math.random() * 3);
                const computerchoice = computeroptions[choiceNumber];
                winner(this.innerText, computerchoice);

                if (rou == 5) {
                    gameover(humanoptions, rou);
                }
            })
        })
    }
    const winner = (human, computer) => {
        const computerscorecard = document.querySelector(".p-count");
        const humanscorecard = document.querySelector(".c-count");
        const result = document.querySelector(".result");
        human = human.trim().toLowerCase();
        computer = computer.trim().toLowerCase();
        if (human == computer) {
            result.textContent = 'tie';
        }
        else if (human == 'rock') {
            if (computer == 'paper') {

                result.textContent = 'computer won';
                computerscore++;
                computerscorecard.textContent=computerscore;

            }
            else {

                result.textContent = 'human won';
                humanscore++;
                humanscorecard.textContent=humanscore;

            }
        }
        else if (human === 'scissor') {
            if (computer === 'rock') {

                result.textContent = 'computer won';
                computerscore++;
                computerscorecard.textContent=computerscore;

            }
            else {

                result.textContent = 'human won';
                humanscore++;
                humanscorecard.textContent=humanscore;

            }
        }
        else if (human === 'paper') {
            if (computer === 'scissor') {

                result.textContent = 'computer won';
                computerscore++;
                computerscorecard.textContent=computerscore;

            }
            else {

                result.textContent = 'human won';
                humanscore++;
                humanscorecard.textContent=humanscore;

            }
        }


    }
    const gameover = (humanoptions, round) => {
        const result = document.querySelector('.result');
        humanoptions.forEach(option => {
            option.style.display = 'none';
        })


        if (humanscore > computerscore) {
            result.innerText = 'you won the game';
        }
        else if (computerscore > humanscore) {
            result.innerText = 'computer won the game';
        }
        else if (computerscore == humanscore) {
            result.innerText = 'tie';
        }

    }

    playgame();
}
game();

