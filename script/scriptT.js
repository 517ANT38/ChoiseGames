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
const but0=document.getElementById("but0");
const but=document.querySelectorAll(".but");
const Imenui=document.getElementById("Imenu");
const fot=document.getElementById("fot");
const mainFon=document.getElementById("mainFon");
const bodyImg=document.getElementById("bodyImg");
const bodyFileImg=document.getElementById("bodyFileImg");
const logotip=document.getElementById("logotip");
const chgLg=document.getElementById("chgLg");
const standardLg=document.getElementById("standardLg");
const elemntsChek=document.querySelectorAll(".check")
const elemntsCommon=document.querySelectorAll(".common");
const blockCl=document.getElementById("blockCl");
const imgiBlock=document.getElementById("imgiBlock");
const imgiBlockF=document.getElementById("imgiBlockF");
const ressetin=document.getElementById("ressetin");
const elementsDescriptionA=document.querySelectorAll(".DescriptionA");
const elementsDescriptionB=document.querySelectorAll(".DescriptionB");
const elemntsCommonImgGamesA=document.querySelectorAll(".A_com>div>.imgGames");
const elemntstextGamesA=document.querySelectorAll(".A_com>.textGames");
const elemntsCommonImgGames=document.querySelectorAll(".B_com>div>.imgGames");
const elemntstextGames=document.querySelectorAll(".B_com>.textGames");
const elementsA_com=document.querySelectorAll(".A_com");
const elementsBut_a=document.querySelectorAll(".buttons_a");
const elementsA_a=document.querySelectorAll(".but_a");
const elementsB_a=document.querySelectorAll(".but_b");
const elementsBut_b=document.querySelectorAll(".buttons_b");
const elementsB_com=document.querySelectorAll(".B_com");
const BlockGames=document.getElementById("BlockGames");
const elemntsA_text=document.querySelectorAll(".A_text");
const elemntsB_text=document.querySelectorAll(".B_text");
const elementsBox_com=document.querySelectorAll(".box_com>div");
const elementsThemenT=document.querySelectorAll(".themenT");
const elementsTextChg=document.querySelectorAll(".textChg");
const textClE=document.getElementById("textClE");
const elements_Efree=document.querySelectorAll('.Efree');
let dh=null;
let dh1=null;
let dh2=null;
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
const changeBCBlockGames=function(i){
        const arrColorA=['#700BFF','#C9F600','#506006'];
        const arrColorB=['#C9F600','#F23D70','rgb(180, 25, 68)'];
        
        for(let j=0;j<elementsA_com.length;j++)                
                elementsA_com[j].style.backgroundColor=arrColorA[i];
        for(let j=0;j<elementsB_com.length;j++)
                elementsB_com[j].style.backgroundColor=arrColorB[i];
                
        
}
const changeAcolorB=function(i){
        const arrColorA=['#F23D70','#700BFF','#C5A2F7'];
        const arrColorB=['#F23D70','#700BFF','#506006'];        
        for(let j=0;j<elementsA_a.length;j++)                
            elementsA_a[j].style.backgroundColor=arrColorA[i];
        for(let j=0;j<elementsB_a.length;j++)
            elementsB_a[j].style.backgroundColor=arrColorB[i];
}
const changeTextColorBlG=function(i){
        const arrColorA=['#C9F600','#F23D70','rgb(180, 25, 68)'];
        const arrColorB=['#700BFF ','#C9F600','#C5A2F7'];
              
        for(let j=0;j<elemntsA_text.length;j++)                
                elemntsA_text[j].style.color=arrColorA[i];
        for(let j=0;j<elemntsB_text.length;j++)
                elemntsB_text[j].style.color=arrColorB[i];
}
const funEfree=function(i){
    const arrColorA=['#700BFF','#700BFF','rgb(180, 25, 68)'];
    for(let j=0;j<elements_Efree.length;j++)                
        elements_Efree[j].style.color=arrColorA[i];
} 
const changeThemen=function(i){
    changeTGlobUl(i);
    changeTBody(i);
    changeBackgroundColor(i);
    changeTextColorHover(i);
    changeTextColor(i);
    changeBCBlockGames(i);
    changeAcolorB(i);  
    changeTextColorBlG(i);
    funEfree(i);    
}

const changeColor=function(){
        
        imgi1.src="images/2849810_cross_multimedia_error_delite_icon5.png";
        
}
const removChangeColor=function(){
        
        imgi1.src="images/2849810_cross_multimedia_error_delite_icon.png";
           
}

const changeCBlockGames=()=>elementsBox_com.forEach(elem=>elem.style.backgroundColor=BlockGames.value);
const funTextClEhov=()=>sub.style.color=textClE.value;
const funTextClEhovR=()=>sub.style.color='';
const changeImgB=i=>bodyB.style.backgroundImage=`url(${elementsThemenT[i].src})`;
const funTextClE=()=>{
    elementsTextChg.forEach(elem=>elem.style.color=textClE.value);
    sub.addEventListener('mouseenter',funTextClEhov);
    sub.addEventListener('mouseleave',funTextClEhovR);
}
const delThemen=function(){
    ulLm.style.backgroundColor='';
    m.style.backgroundColor='';
    polyler.style.backgroundColor='';
    news.style.backgroundColor='';
    selectionGames.style.backgroundColor='';
    bodyB.style.backgroundColor=''; 
    ulLmLiI.src="images/Rectangle15.png";
    footerI.style.backgroundColor='';
    for(let j=0;j<elementsA_a.length;j++)                
        elementsA_a[j].style.backgroundColor='';
    for(let j=0;j<elementsB_a.length;j++)                
        elementsB_a[j].style.backgroundColor='';
    for(let j=0;j<elemntsA_text.length;j++)                
        elemntsA_text[j].style.color='';
    for(let j=0;j<elemntsB_text.length;j++)
        elemntsB_text[j].style.color='';
    for(let j=0;j<elementsA_com.length;j++)                
        elementsA_com[j].style.backgroundColor='';
    for(let j=0;j<elementsB_com.length;j++)
        elementsB_com[j].style.backgroundColor='';     
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
   elementsTextChg.forEach(elem=>elem.style.color='');
   sub.removeEventListener('mouseenter',funTextClEhov);
   sub.removeEventListener('mouseleave',funTextClEhovR); 
}
const changeColourIn=(eventElement,changingElement)=>{
    changingElement.style.backgroundColor=eventElement.value;
    
}
const changeBackgroundImag=()=>{
    
    if(dh!=null)URL.revokeObjectURL(dh);
    dh=URL.createObjectURL(bodyFileImg.files[0]);        
    bodyB.style.backgroundImage=`url(${dh})`;
//     bodyB.style.backgroundRepeat='no-repeat';
       
}
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
const startFun_changeColourIn1=()=>{
    changeColourIn(fot,footerI);
}
const startFun_changeColourIn2=()=>{
    changeColourIn(Imenui,ulLm);
}
const startFun_changeColourIn3=()=>{
    changeColourIn(mainFon,bodyB);
    
}
const changeFunBodyImg=()=>{
    if(bodyFileImg.files[0]===undefined)
            alert("Выбирите файл!");
    else{
            changeBackgroundImag();
            bodyFileImg.value=null;
    }
            
}
const changeStandardLg=function(){
    ulLmLiI.src=standardLg.value;
}
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
const changeFonBlock=function(){
    let fl=0;
    if(imgiBlockF.files[0]!==undefined)
    {       if(dh2!=null)URL.revokeObjectURL(dh2);
            dh2=URL.createObjectURL(imgiBlockF.files[0]);
            for(let i=0;i<elemntsChek.length;i++){
                    if(elemntsChek[i].checked){
                            
                            elemntsCommon[i].style.backgroundImage=`url(${dh2})`;
                        //     elemntsCommon[i].style.backgroundRepeat='no-repeat';
                            fl=1;        
                    }
            }
            if(!fl)alert("Выбирите элемент для изменения!");
            else imgiBlockF.value=null;
    }
    else
            alert("Выбирите файл!");
}
const FunResset=function(){
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
    bodyB.style.backgroundImage='';
    elemntsCommon.forEach(elem=>elem.style.backgroundImage='');
    for(let j=0;j<elementsA_a.length;j++)                
        elementsA_a[j].style.backgroundColor='';
    for(let j=0;j<elementsB_a.length;j++)                
        elementsB_a[j].style.backgroundColor='';
    for(let j=0;j<elemntsA_text.length;j++)                
        elemntsA_text[j].style.color='';
    for(let j=0;j<elemntsB_text.length;j++)
        elemntsB_text[j].style.color='';
    for(let j=0;j<elementsA_com.length;j++)                
        elementsA_com[j].style.backgroundColor='';
    for(let j=0;j<elementsB_com.length;j++)
        elementsB_com[j].style.backgroundColor=''; 
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
   elementsTextChg.forEach(elem=>elem.style.color='');
   sub.removeEventListener('mouseenter',funTextClEhov);
   sub.removeEventListener('mouseleave',funTextClEhovR);

}
const getDescriptionA=function(i){
    elemntstextGamesA[i].style.display='block';
    elemntsCommonImgGamesA[i].style.width='500px';
    elementsBut_a[i].style.margin="10px 0px 0px 120px";
    elementsA_com[i].classList.add("DescriptionOpen");
   
    for(let j=0;j<elementsA_com.length;j++){
            if(j!=i)
                elementsA_com[j].style.display='none';
            
    }
    
    elementsDescriptionA[i].innerHTML="Закрыть";
}
const closeDescriptionA=function(i){
    elemntstextGamesA[i].style.display='';
    elemntsCommonImgGamesA[i].style.width='';
    elementsBut_a[i].style.margin="";
    elementsA_com[i].classList.remove("DescriptionOpen");
    
    for(let j=0;j<elementsA_com.length;j++){
        if(j!=i)
            elementsA_com[j].style.display='block';
            
    }
    
    elementsDescriptionA[i].innerHTML="Описание";
}
const getDescriptionB=function(i){
    elemntstextGames[i].style.display='block';
    elemntsCommonImgGames[i].style.width='500px';
    elementsBut_b[i].style.margin="10px 0px 0px 120px";
    
    elementsB_com[i].classList.add("DescriptionOpen");
    
    for(let j=0;j<elementsB_com.length;j++){
        if(j!=i)
            elementsB_com[j].style.display='none';
        
    }
    elementsDescriptionB[i].innerHTML="Закрыть";
}
const closeDescriptionB=function(i){
    
    elemntstextGames[i].style.display='';
    elemntsCommonImgGames[i].style.width='';
    elementsBut_b[i].style.margin="";   
    elementsB_com[i].classList.remove("DescriptionOpen");
   
    for(let j=0;j<elementsB_com.length;j++){
        if(j!=i)
            elementsB_com[j].style.display='block';
            
    }
    elementsDescriptionA[i].innerHTML="Описание";
}
const Show_themes=function(){
    imgi1.addEventListener('mouseover',changeColor);
    imgi1.addEventListener('mouseout',removChangeColor);   
    m.style.display='none';
    navT.style.display='block';            
    but0.addEventListener('click',delThemen);
    chgLg.addEventListener("click",startFun_changeLogoMy);
    fot.addEventListener("change",startFun_changeColourIn1);
    Imenui.addEventListener("change",startFun_changeColourIn2);
    mainFon.addEventListener("input",startFun_changeColourIn3);
    bodyImg.addEventListener("click",changeFunBodyImg);
    standardLg.addEventListener('change',changeStandardLg);
    blockCl.addEventListener("input",changeColorBlock);
    imgiBlock.addEventListener("click",changeFonBlock);
    ressetin.addEventListener('click',FunResset);
    BlockGames.addEventListener("input",changeCBlockGames);
    textClE.addEventListener("input",funTextClE);
    
      
}
const closeShow_themes=function(){
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
    removChangeColor();
    imgi1.removeEventListener('mouseover',changeColor);
    imgi1.removeEventListener('mouseout',removChangeColor);           
    but0.removeEventListener('click',delThemen);
    chgLg.removeEventListener("click",startFun_changeLogoMy);
    fot.removeEventListener("change",startFun_changeColourIn1);
    Imenui.removeEventListener("change",startFun_changeColourIn2);
    mainFon.removeEventListener("input",startFun_changeColourIn3);
    bodyImg.removeEventListener("click",changeFunBodyImg);
    standardLg.removeEventListener('change',changeStandardLg);
    blockCl.removeEventListener("input",changeColorBlock);
    imgiBlock.removeEventListener("click",changeFonBlock);
    ressetin.removeEventListener('click',FunResset);   
    BlockGames.removeEventListener("input",changeCBlockGames);
    textClE.removeEventListener("input",funTextClE);
    
    navT.style.display='none';
    m.style.display='block';
    
}
elementsThemenT.forEach((elem,i)=>{
        elem.addEventListener('click',()=>changeImgB(i));
}); 
but.forEach((elem,i)=>{
    elem.addEventListener('click',()=>changeThemen(i));       
});
sub.addEventListener('click',Show_themes);
imgi1.addEventListener('click',closeShow_themes);
elementsDescriptionA.forEach((elem,i)=>elem.addEventListener("click",()=>getDescriptionA(i)));
elementsDescriptionA.forEach((elem,i)=>elem.addEventListener("mousedown",()=>closeDescriptionA(i)));
elementsDescriptionB.forEach((elem,i)=>elem.addEventListener("click",()=>getDescriptionB(i)));
elementsDescriptionB.forEach((elem,i)=>elem.addEventListener("mousedown",()=>closeDescriptionB(i)));
