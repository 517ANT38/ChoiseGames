const preloader=document.querySelector(".preloader");
const progressL=document.getElementById("progress");
const rocketFlight1=document.getElementById("rocketFlight1");
const rocketFlight2=document.getElementById("rocketFlight2");
let previousPosition = window.pageYOffset;
function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
const loading=function() {
  bodyB.style.overflow='hidden';
  preloader.style.display='block';
  animate({
    duration:3000,
    timing(timeFraction) {
      return timeFraction;
    },
    draw(progress){
      progressL.style.width=progress*100+'%';
      progressL.innerHTML=`<p>${Math.floor(progress*100)}%</p>`;
    }
  
  });
}

document.addEventListener("DOMContentLoaded",loading,{once:true}); 
window.onload=function(){
  window.setTimeout(function(){
      bodyB.style.overflowY='scroll';
      preloader.style.display='';
  },3100);
}
bodyB.onscroll=function(){

  rocketFlight1.style.display='block';
  rocketFlight2.style.display='block';
  let cur=window.pageYOffset;
  let p=0;
  let n=1;
  if(cur>previousPosition){
    if(rocketFlight1.classList.contains('povorot'))
      rocketFlight1.classList.remove('povorot');
    if(rocketFlight2.classList.contains('povorot'))  
      rocketFlight2.classList.remove('povorot');
    n=1;
    
  }
    
  else{
    rocketFlight1.classList.add('povorot');
    rocketFlight2.classList.add('povorot');
    if(cur==0)
      p=-20;
    n=-1;
  }
  previousPosition=cur;
  animate({
    duration:1000,
    timing(timeFraction){
      return 1 - Math.sin(Math.acos(timeFraction));
    },
    draw(progress){
      
      rocketFlight1.style.top=`${n*progress*100+cur+p}px`;
      rocketFlight2.style.top=`${n*progress*100+cur+p}px`;
      
    }
  });
  
}
