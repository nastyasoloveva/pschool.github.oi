var offsetLeft = document.getElementById('sharik').offsetLeft;
var offsetTop = document.getElementById('sharik').offsetTop;
fen.onclick = function() {

      this.onclick = null;
  air.style.opacity=1;
  let times = 1;
sharik.style.top = offsetTop - 5* 10 + 'px';
  function go() {
    if(times<6){
    if (times % 2) {
      
      sharik.style.left = offsetLeft + 8* times  + 'px';
    } else {
     
      sharik.style.left =offsetLeft  - 8 * times + 'px';
    }}
    else{
 if (times % 2) {
      
      sharik.style.left =offsetLeft + 7 * 8  + 'px';
    } else {
      
      sharik.style.left =offsetLeft - 7  * 8  + 'px';
    }}
  }

  go();

  sharik.addEventListener('transitionend', function() {
    times++;
    go();
  });
}
var planeLeft = document.getElementById('plane').offsetLeft;
var warmLeft = document.getElementById('warm').offsetLeft;
plane.onclick = function(){
 
	let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
         this.onclick = null; 
        
        plane.style.left = planeLeft - timePassed / 15 + 'px';

        warm.style.left = warmLeft + timePassed / 7 + 'px';
        var warmLeftNow = document.getElementById('warm').offsetLeft;
        var exp12WidthNow = document.getElementById('exp12').offsetWidth;
      var warmWidthNow = document.getElementById('warm').offsetWidth;
        if (timePassed > 2000 || warmLeftNow>(exp12WidthNow-warmWidthNow)) clearInterval(timer);
         }, 20);
   

}
warm.onclick = function(){
 
	let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
         this.onclick = null;
       plane.style.left =planeLeft - timePassed / 15 + 'px';

        warm.style.left = warmLeft + timePassed / 7 + 'px';
        var warmLeftNow = document.getElementById('warm').offsetLeft;
        var exp12WidthNow = document.getElementById('exp12').offsetWidth;
        var warmWidthNow = document.getElementById('warm').offsetWidth;
        if (timePassed > 2000 || warmLeftNow>(exp12WidthNow-warmWidthNow)) clearInterval(timer);
         }, 20);
   

}