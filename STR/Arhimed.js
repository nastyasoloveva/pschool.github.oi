var teloTop = document.getElementById('telo').offsetTop;
var teloHeight = document.getElementById('telo').offsetHeight;
var waterTop = document.getElementById('water').offsetTop;
telo.onclick = function(){
 this.onclick = null;
 
	let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        
           telo.style.top = teloTop + timePassed / 10 + 'px';
        if (timePassed > 500){
        	water.style.top = waterTop - timePassed / 13 + 'px';
          water.style.height =  timePassed / 13 + 'px';
          stru.style.opacity=1;
        var waterHeightNow = document.getElementById('water').offsetHeight;

        }

        if ( waterHeightNow > teloHeight){ clearInterval(timer);
        	       	
        	stru.style.opacity=0;
        	}
         }, 20);
   

}
var shipLeft= document.getElementById('ship').offsetLeft;
var exp12Left= document.getElementById('exp12').offsetLeft;
ship.onclick = function(){
 
	let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        
               ship.style.left = shipLeft - timePassed / 5 + 'px';
            var shipLeftNow= document.getElementById('ship').offsetLeft;   

        if (timePassed > 2000 || shipLeftNow < exp12Left)  clearInterval(timer);
         }, 20);
   

}