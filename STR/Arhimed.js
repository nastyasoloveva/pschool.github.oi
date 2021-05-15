
telo.onclick = function(){
 this.onclick = null;
 
	let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        
       

        telo.style.top = 252 + timePassed / 10 + 'px';
        if (timePassed > 500){
        	water.style.top = 586 - timePassed / 13 + 'px';
  water.style.height =  timePassed / 13 + 'px';
  stru.style.opacity=1;
        }

        if (timePassed > 1620){ clearInterval(timer);
        	       	
        	stru.style.opacity=0;
        	}
         }, 20);
   

}
ship.onclick = function(){
 
	let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        
               ship.style.left = 516 - timePassed / 5 + 'px';

        if (timePassed > 2000) clearInterval(timer);
         }, 20);
   

}