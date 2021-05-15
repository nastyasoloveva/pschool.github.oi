ukaz.onclick = function(){
 
	let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if (timePassed < 500)
               {
                luch1.style.opacity =  timePassed /500;
               }
               
               else
               {
                 luch2.style.opacity = ( timePassed - 500 )/ 500 ;
               }

        if (timePassed > 1000) clearInterval(timer);
         }, 20);
   

}