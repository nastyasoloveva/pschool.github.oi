
var a=215;
var b=41;
var c=300;
var d=32
rul.onclick = function(){
 
	let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        
       
        rul.style.top = 31 + timePassed / 12 + 'px';
    shar.style.top = a	- timePassed/ 10 + 'px';
 	shar.style.height= b  + timePassed / 10 + 'px';
     shar.style.left = c - timePassed / 23 + 'px';
 	shar.style.width= d + timePassed / 10 + 'px';

        if (timePassed > 600) {clearInterval(timer);
        	if(a>100){
        	a=a-60;
        	b=b+60;
        	c=c-26;
        	d=d+60;}
          else{shar.style.opacity=0;}
        }
         }, 20);
  

}

   var offsetTop = document.getElementById('water').offsetTop;
   var offsetHeight  = document.getElementById('water').offsetHeight ;
kran.onclick = function(){
 stru.style.opacity=1;
	let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
    // stru.style.transform='matrix('+(-1 * (timePassed / 2))+', 0, 0, 1, 0, 0)';
        water.style.top = offsetTop - timePassed / 9 + 'px';
  water.style.height = 100 + timePassed / 10 + 'px';
        if (timePassed > 2000) 
        {
        	clearInterval(timer);
       		stru.style.opacity=0;
          water.style.top=offsetTop + 'px';
          water.style.height=offsetHeight + 'px';
       	 }
         }, 20);
   

}

