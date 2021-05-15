
var a=465;
var b=41;
var c=550;
var d=32
rul.onclick = function(){
 
	let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        
       
        rul.style.top = 281 + timePassed / 12 + 'px';
    shar.style.top = a	- timePassed/ 10 + 'px';
 	shar.style.height= b  + timePassed / 10 + 'px';
     shar.style.left = c - timePassed / 23 + 'px';
 	shar.style.width= d + timePassed / 10 + 'px';

        if (timePassed > 600) {clearInterval(timer);
        	if(a>300){
        	a=a-60;
        	b=b+60;
        	c=c-26;
        	d=d+60;}
        }
         }, 20);
  

}


kran.onclick = function(){
 stru.style.opacity=1;
	let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
    // stru.style.transform='matrix('+(-1 * (timePassed / 2))+', 0, 0, 1, 0, 0)';
        water.style.top = 1170 - timePassed / 9 + 'px';
  water.style.height = 100 + timePassed / 10 + 'px';
        if (timePassed > 2000) 
        {
        	clearInterval(timer);
       		stru.style.opacity=0;
       	 }
         }, 20);
   

}

