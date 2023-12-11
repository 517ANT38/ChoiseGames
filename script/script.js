const sub=document.getElementById("Subject1");
const m=document.getElementById("maini");
const ul=document.querySelector("ul");
const navT=document.getElementById("nav-themes");
const imgi1=document.getElementById("cross1");
const ulLm=document.querySelector(".logo-and-menu");
const ulLmLiI=document.querySelector(".logo-and-menu>li:first-child>img");
const bodyB=document.querySelector("body");
const footerI=document.querySelector(".footer");
const arrElements=document.querySelectorAll(".searI");
const polyler=document.getElementById("polyler");
const news=document.getElementById("news");
const selectionGames=document.getElementById("selectionGames");
let flag=0;
const changeTGlobUl=function(i){
        const arrGlob=["Rectangle13.png","Rectangle16.png","Rectangle14.png"];
        let strImg="images/";
        ulLmLiI.src=strImg+arrGlob[i];

}
const changeTBody=function(i){
        const arrColorBody=['#700BFF','#C9F600','#B41944'];
        bodyB.style.backgroundColor=arrColorBody[i];

}
const changeBackgroundColor=function(i){
        const arrColor=['#F23D70','#700BFF','#506006'];
        const arrColor2=['#C9F600','#F23D70','#C5A2F7'];
        footerI.style.backgroundColor=arrColor[i];
        ulLm.style.backgroundColor=arrColor[i];
        m.style.backgroundColor=arrColor[i];
        news.style.backgroundColor=arrColor[i];
        polyler.style.backgroundColor=arrColor2[i];
        selectionGames.style.backgroundColor=arrColor2[i];
}
const changeTextColor=function(i){
        let color='color'+i;
        let delik;
        for (const p of arrElements[0].classList) {
                if(p.indexOf('color')==0){
                        delik=p;
                        break;
                }
       }
        arrElements.forEach((elem)=>{
               
                elem.classList.remove(delik);
                elem.classList.add(color);
        });
                
        
}
const changeTextColorHover=function(i){
        let color='colorSub'+i;
        let delik;
        for (const p of sub.classList) {
                if(p.indexOf('colorSub')==0){
                        delik=p;
                        break;
                }
       }
        sub.classList.remove(delik);
        sub.classList.add(color);

                
        
}
const changeThemen=function(i){
        changeTGlobUl(i);
        changeTBody(i);
        changeBackgroundColor(i);
        changeTextColorHover(i);
        changeTextColor(i);
        // alert(i);
}
const Show_themes=function(){
    
        //let d1=document.createElement('div');
        //d1.className="nav-themes";
        m.style.display='none';
        navT.style.display='block';
        //ul.insertAdjacentHTML('afterend','<nav class="nav-themes"><div><img src="images/2849810_cross_multimedia_error_delite_icon.png"></div></nav>');
        
        //sub.removeEventListener("click",Show_themes);
}
const changeColor=function(){

        imgi1.src="images/2849810_cross_multimedia_error_delite_icon5.png";
         
        //imgi1.removeEventListener("click",changeColor);
}
const removChangeColor=function(){

        imgi1.src="images/2849810_cross_multimedia_error_delite_icon.png";
         
        //imgi1.removeEventListener("click",removChangeColor);
}
const closeShow_themes=function(){
    
        
        
        navT.style.display='none';
        m.style.display='block';
        
        
        //sub.removeEventListener("click",closeShow_themes);
}
sub.addEventListener('click',Show_themes);
imgi1.addEventListener('mouseover',changeColor);
imgi1.addEventListener('mouseout',removChangeColor);
imgi1.addEventListener('click',closeShow_themes);
const but=document.querySelectorAll(".but");
but.forEach((elem,i)=>{
        elem.addEventListener('click',()=>changeThemen(i));
        
});
const but0=document.getElementById("but0");
const delThemen=function(){
        ulLm.style.backgroundColor='';
        m.style.backgroundColor='';
        polyler.style.backgroundColor='';
        news.style.backgroundColor='';
        selectionGames.style.backgroundColor='';
        bodyB.style.backgroundColor=''; 
        ulLmLiI.src="images/Rectangle15.png";
        footerI.style.backgroundColor='';       
        let delik;
        for (const p of sub.classList) {
                if(p.indexOf('colorSub')==0){
                        delik=p;
                        break;
                }
        }
        sub.classList.remove(delik);        
        for (const p of arrElements[0].classList) {
                if(p.indexOf('color')==0){
                        delik=p;
                        break;
                }
       }
       arrElements.forEach((elem)=>{elem.classList.remove(delik);});
       
}
but0.addEventListener('click',delThemen);
const Imenui=document.getElementById("Imenu");
const fot=document.getElementById("fot");
const mainFon=document.getElementById("mainFon");
const bodyImg=document.getElementById("bodyImg");
const bodyFileImg=document.getElementById("bodyFileImg");
let dh=null;
const changeColourIn=(eventElement,changingElement)=>{
        changingElement.style.backgroundColor=eventElement.value;
        
}
const changeBackgroundImag=()=>{
        
        if(dh!=null)URL.revokeObjectURL(dh);
        dh=URL.createObjectURL(bodyFileImg.files[0]);        
        bodyB.style.backgroundImage=`url(${dh})`;
        bodyB.style.backgroundRepeat='no-repeat';
           
}
const logotip=document.getElementById("logotip");
const chgLg=document.getElementById("chgLg");
let dh1=null;
const changeLogoMy=()=>{
        
        if(ulLmLiI.src!=null)URL.revokeObjectURL(dh1);
        dh1=URL.createObjectURL(logotip.files[0]);
        ulLmLiI.src=dh1;
}
const startFun_changeLogoMy=()=>{
        if(logotip.files[0]===undefined)
                alert("Выбирите файл!");
        
        else{
                changeLogoMy();
                logotip.value=null;
        }
}
chgLg.addEventListener("click",startFun_changeLogoMy);
const startFun_changeColourIn1=()=>{
        changeColourIn(fot,footerI);
}
fot.addEventListener("change",startFun_changeColourIn1);
const startFun_changeColourIn2=()=>{
        changeColourIn(Imenui,ulLm);
}
Imenui.addEventListener("change",startFun_changeColourIn2);
const startFun_changeColourIn3=()=>{
        changeColourIn(mainFon,bodyB);
        
}
mainFon.addEventListener("input",startFun_changeColourIn3);
const changeFunBodyImg=()=>{
        if(bodyFileImg.files[0]===undefined)
                alert("Выбирите файл!");
        else{
                changeBackgroundImag();
                bodyFileImg.value=null;
        }
                
}
bodyImg.addEventListener("click",changeFunBodyImg);
const standardLg=document.getElementById("standardLg");
const changeStandardLg=function(){
        ulLmLiI.src=standardLg.value;
}
standardLg.addEventListener('change',changeStandardLg);
const elemntsChek=document.querySelectorAll(".check")
const elemntsCommon=document.querySelectorAll(".common");
const blockCl=document.getElementById("blockCl");
const changeColorBlock=function(){
        let fl=0;
        for(let i=0;i<elemntsChek.length;i++){
                if(elemntsChek[i].checked){
                        elemntsCommon[i].style.backgroundColor=blockCl.value;
                        fl=1;  
                }
        }
        if(!fl)alert("Выбирите элемент для изменения!");
}
blockCl.addEventListener("input",changeColorBlock);
let dh2=null;
const imgiBlock=document.getElementById("imgiBlock");
const imgiBlockF=document.getElementById("imgiBlockF")
const changeFonBlock=function(){
        let fl=0;
        if(imgiBlockF.files[0]!==undefined)
        {       if(dh2!=null)URL.revokeObjectURL(dh2);
                dh2=URL.createObjectURL(imgiBlockF.files[0]);
                for(let i=0;i<elemntsChek.length;i++){
                        if(elemntsChek[i].checked){
                                
                                elemntsCommon[i].style.backgroundImage=`url(${dh2})`;
                                elemntsCommon[i].style.backgroundRepeat='no-repeat';
                                fl=1;        
                        }
                }
                if(!fl)alert("Выбирите элемент для изменения!");
                else imgiBlockF.value=null;
        }
        else
                alert("Выбирите файл!");
}
imgiBlock.addEventListener("click",changeFonBlock);
const ressetin=document.getElementById("ressetin");
const FunResset=function(){        
        bodyB.style.backgroundImage='';
        elemntsCommon.forEach(elem=>elem.style.backgroundImage='');
        
        if(dh!==null)
        {
                URL.revokeObjectURL(dh);
                dh=null;
        }
        if(dh1!==null)
        {
                URL.revokeObjectURL(dh1);
                dh1=null;         
        }        
        if(dh2!==null)
        {        
                URL.revokeObjectURL(dh1);
                dh2=null;
        }
        ulLm.style.backgroundColor='';
        m.style.backgroundColor='';
        polyler.style.backgroundColor='';
        news.style.backgroundColor='';
        selectionGames.style.backgroundColor='';
        bodyB.style.backgroundColor=''; 
        ulLmLiI.src="images/Rectangle15.png";
        footerI.style.backgroundColor='';       
        let delik=null;
        for (const p of sub.classList) {
                if(p.indexOf('colorSub')==0){
                        delik=p;
                        break;
                }
        }
        if(delik!==null)
                sub.classList.remove(delik);        
        for (const p of arrElements[0].classList) {
                if(p.indexOf('color')==0){
                        delik=p;
                        break;
                }
       }
       if(delik!==null)
                arrElements.forEach((elem)=>{elem.classList.remove(delik);});

}
ressetin.addEventListener('click',FunResset);