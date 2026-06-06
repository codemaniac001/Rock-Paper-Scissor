                                           /**get computer choice */
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
let humanscore=0;
let computerscore=0;
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
    return("draw")
}
}
playround(gcc,ghc)
alert("humanscore  "+humanscore)
alert("computerscore  "+computerscore)
