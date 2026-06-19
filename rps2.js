game=()=>{
 let humanscore=0;
 let computerscore=0;
 let roundcount=0;
 playround=()=>{
    const rock=document.querySelector(".rock");
    const paper=document.querySelector(".paper");
    const scissor=document.querySelector(".scissor");
    const humanoptions=[paper,rock,scissor];
    const computeroptions=["paper","rock","scissor"];
    humanoptions.forEach(option=>{
        option.addEventListener('click',function(){
            const round=document.querySelector(".round");
            roundcount++;
            round.textContent=`round:${roundcount}`;
            const choicenumber=Math.floor(Math.random()*3);
            const computerchoice=computeroptions[choicenumber];
            winner(this.innerText,computerchoice);
            if(roundcount==5){
                gameover(humanoptions,roundcount);
            }
        })
    })
}
    const winner=(human,computer)=>{
        const computerscorecard=document.querySelector(".computerscore");
        const humanscorecard=document.querySelector(".humanscore");
        const result=document.querySelector(".result");
        if(human==computer){
            result.innerText='tie';
        }
        else if(human=='rock')
        {
            if(computer=='paper'){
                result.innerText='computer won the game';
                computerscore++;
                computerscorecard.innerText=computerscore;
            }
            else{
                result.innerText='human won the game';
                humanscore++;
                humanscorecard.innerText=humanscore;
            }
        }
        else if(human=='paper'){
            if(computer=='rock'){
                result.innerText='computer won the game';
                computerscore++;
                computerscorecard.innerText=computerscore;
            }
            else{
                result.innerText='human won the game';
                humanscore++;
                humanscorecard.innerText=humanscore;
            }
        }
        else if(human=='scissor'){
            if(computer=='rock'){
                result.innerText='computer won the game';
                computerscore++;
                computerscorecard.innerText=computerscore;
            }
            else{
                result.innerText='human won the game';
                humanscore++;
                humanscorecard.innerText=humanscore;
            }
        }
    }
    const gameover=(humanoptions,roundcount)=>{
        const result=document.querySelector(".result");
        humanoptions.forEach(option =>{
            option.style.display='none';
        })
        if(humanscore>computerscore){
            result.innerText='human won the game';
        }
        else if(computerscore>humanscore){
            result.innerText='computer won the game'
        }
        else{
            result.innerText='its a tie';
        }
    }

            
            playround();

}
game();