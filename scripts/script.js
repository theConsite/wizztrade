

function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) true;
}



tickets=document.getElementsByClassName('buyTicket')
basket=document.getElementsByClassName('numberOfBuy')[0]
delTicket=document.getElementsByClassName('delTicket')[0]
delTicket.addEventListener("click", function(){
    amount = basket.innerText
    if(amount>0){
        basket.innerText = parseInt(amount)-1
        document.getElementsByClassName('alert')[0].classList.add('hidden')
    }}
)
//bilet 1 
tickets[0].addEventListener("click", function(){
    amount = basket.innerText
    console.log(basket.classList )
    
    if(amount < 5){
  
    console.log(basket.classList )

    basket.innerText = parseInt(amount)+1}
    else{
       document.getElementsByClassName('alert')[0].classList.remove('hidden')
    }
        
    
    });

  //bilet 2 
  tickets[1].addEventListener("click", function(){
    amount = basket.innerText
    

    if(amount<5){

        
    basket.innerText = parseInt(amount)+1}else{
document.getElementsByClassName('alert')[0].classList.remove('hidden')    }
        
  });