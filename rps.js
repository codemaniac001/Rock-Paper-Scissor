                                           /**get computer choice */
alert("you will be awarded 1 if you win, 0 if other wins or is a draw")
let humanscore=0;
let computerscore=0;
for(let i=0;i<5;i++)
{
function getComputerChoice()
{
    const ch=Math.floor(Math.random()*3)
    if(ch==1)
    {
        return('rock')
    }
    else if(ch==2)
    {
        return('paper')
    }
    else
    {
        return('scissor')
    }
}
const gcc=getComputerChoice();
                                             /**get human choice */
function gethumanchoice(){
    const ch1=(prompt("enter your choice, your choice")).toLowerCase();
    return(ch1)
}
const ghc=gethumanchoice();
                                           /**Defining human score and computer score */

                                           /**playround */
function playround(gcc1,ghc1)
{
if((gcc1==="scissor")&&(ghc1==="rock")){
   return(humanscore=humanscore+1) 
}
if((gcc1==="scissor")&&(ghc1==="paper")){
    return(computerscore=computerscore+1)
}
if((gcc1==="rock")&&(ghc1==="paper")){
     return(humanscore=humanscore+1) 
}
if((gcc1==="rock")&&(ghc1==="scissor")){
    return(computerscore=computerscore+1)
}
if((gcc1==="paper")&&(ghc1==="scissor")){
    return(humanscore=humanscore+1) 
}
if((gcc1==="paper")&&(ghc1==="rock")){
    return(computerscore=computerscore+1)
}
else{
    return(-1)
}
}
playround(gcc,ghc)
alert("humanscore  "+humanscore)
alert("computerscore  "+computerscore)

}
if(humanscore>computerscore)
{
    alert("computer wins")
}
else if(humanscore<computerscore)
{
    alert("computer wins")
}
else
{
    alert("It's a draw")
}

