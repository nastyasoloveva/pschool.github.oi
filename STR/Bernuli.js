fen.onclick = function() {

      this.onclick = null;
  air.style.opacity=1;
  let times = 1;
sharik.style.top = 550- 5* 10 + 'px';
  function go() {
    if(times<6){
    if (times % 2) {
      
      sharik.style.left = 445 + 8* times  + 'px';
    } else {
     
      sharik.style.left = 445 - 8 * times + 'px';
    }}
    else{
 if (times % 2) {
      
      sharik.style.left = 447 + 7 * 8  + 'px';
    } else {
      
      sharik.style.left = 447 - 7  * 8  + 'px';
    }}
  }

  go();

  sharik.addEventListener('transitionend', function() {
    times++;
    go();
  });
}
plane.onclick = function(){
 
	let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        
        plane.style.left = 303 - timePassed / 20 + 'px';

        warm.style.left = 78 + timePassed / 5 + 'px';

        if (timePassed > 2000) clearInterval(timer);
         }, 20);
   

}
warm.onclick = function(){
 
	let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        
       plane.style.left = 303 - timePassed / 20 + 'px';

        warm.style.left = 78 + timePassed / 5 + 'px';

        if (timePassed > 2000) clearInterval(timer);
         }, 20);
   

}