const nam=document.getElementById('nam');
const place=document.getElementById('place');
const place1=document.querySelector("input[list='place1']");
const place2=document.getElementById('place2');
const elementsCo_use=document.querySelectorAll('.co_use');
const elementsOff_on=document.querySelectorAll('.off_on');
const selc=document.getElementById('selc');
const clearSelc=document.getElementById('clearSelc');
const pole=document.getElementById("box_pole");
const reg1=/[A-Za-zА-Яа-яЁё]{2,15}[2-9]{0,}/;
const reg2=/[А-яа-яЁё]{4,15}/;
function Games(names,selectGamGenre,selectGamType,AgeСategory,count_user,off_on,ids){
    this.names=names;
    this.selectGamGenre=selectGamGenre;
    this.selectGamType=selectGamType;
    this.AgeСategory=AgeСategory;
    this.count_user=count_user;
    this.off_on=off_on;
    this.ids=ids;
}
Games.prototype={
    
    clonirElem:function(){
        const a=document.getElementById(this.ids).cloneNode(true);
        a.classList.add("SelGames");        
        pole.append(a);
    },
    constructor: Games
}
const arrNames=["Hay Day","Шахматы","Mario","Clash Royale","Sonic the Hedgehog 2","Сапер","Empire Four Kingdoms","Косынка"]
const arrAge=["0+","0+","6+","6+","6+","6+","6+","12+"];
const arrGenre=['Стратегия','Стратегия','Аркады','Стратегия','Платформер','Головоломка','Стратегия','Пасьянс'];
const arrType=['Управленческие','Настольные','Авантюрные','Управленческие','Авантюрные','Конвейерные','Управленческие','Настольные']
const arrCount_user=['много','одно','одно','много','одно','одно','много','одно'];
const arrOff_on=['Онл','Офл','Офл','Онл','Офл','Офл','Онл','Офл'];
const strIds='games';
const arrGames=[];

for(let i=0;i<arrNames.length;i++){
    let a=new Games(
        arrNames[i],
        arrGenre[i],
        arrType[i],
        arrAge[i],
        arrCount_user[i],
        arrOff_on[i],
        strIds+i
    ); 
    arrGames.push(a);
    
}
const valid=(str,reg)=>reg.test(str);

const funReadNames=function(){
    let a=nam.value;
    if(valid(a,reg1)&& a!='')
        return a;
    else if(a=='')
        return null;
    return false; 
}
const funReadSelGenre=()=>place.value;

const funReadSelType=function(){
    let a=place1.value;
    if(valid(a,reg2)&& a!='')
        return a;
    else if(a=='')
        return null;
    return false;   
}
const funReadSelAge=()=>place2.value;

const funChekedCount_use=function(){
    for(let i=0;i<elementsCo_use.length;i++)
        if(elementsCo_use[i].checked)
            return elementsCo_use[i].value;
    return null;
}
const funChekedOff_on=function(){
    for(let i=0;i<elementsOff_on.length;i++)
        if(elementsOff_on[i].checked)
            return elementsOff_on[i].value;
    return null;
}
const readsFAndCreObt=function(){
    let a;let b;
    while(true)
    {
        a=funReadNames();
        if(a!==false)
            break;
    }
    while(true)
    {
        b=funReadSelType();
        if(b!==false)
            break;
    }
    const res={
        names:a,
        selectGamGenre:funReadSelGenre(),
        selectGamType:b,
        AgeСategory:funReadSelAge(),
        count_user:funChekedCount_use(),
        off_on:funChekedOff_on()
    }
    // console.log(res);
    return res;
}
const countFeatures=function(obt1,obt2){
    let counts=0;
    for(let key in obt1){
        if(obt1[key]==obt2[key])
            counts++;
    }
    return counts;
}
const createArrObjMatch=function(obtChek){
    const res=[];
    for(let i=0;i<arrGames.length;i++)
        res.push(
            {
                objt:arrGames[i],
                countF:countFeatures(obtChek,arrGames[i])
            }
        );
    return res;
}
const funSelect=function(arrGCh){
    const res=[arrGCh[0].objt];
    let countFp=arrGCh[0].countF;
    for(let i=1;i<arrGCh.length;i++){
        if(arrGCh[i].countF>countFp){
            res.length=0;
            res.push(arrGCh[i].objt);
            countFp=arrGCh[i].countF;
        }
        else if(arrGCh[i].countF==countFp)
            res.push(arrGCh[i].objt);
    }
    return res;
}
const copyAO=function(arrObj){
    const res=[];
    for(let i=0;i<arrObj.length;i++){
        let a=new Games();
        for(let key in arrObj[i])
            a[key]=arrObj[i][key];
        res.push(a);
    }
    return res;
}
const getSav=function(d){
    
    if(d==null)return;
    
    if(d.length==0)
        alert("По вашему запросу ничего не найдено!");
    else if(d.length==8)
        alert("Заполните поля");
    else{
        const a=copyAO(d);
        selectionGames.style.height='980px';
        for(let i=0;i<a.length;i++)
            a[i].clonirElem();
    }
}
const startGamesCreat=function(){
    selectionGames.style.height='';
    pole.innerHTML="";
    const obtChek=readsFAndCreObt();
    const a=funSelect(createArrObjMatch(obtChek));
    localStorage.setItem('test', JSON.stringify(a));
    if(a.length==0)
        alert("По вашему запросу ничего не найдено!");
    else if(a.length==8)
        alert("Заполните поля");
    else{
        selectionGames.style.height='980px';
        for(let i=0;i<a.length;i++)
            a[i].clonirElem();
    }
        // console.log(a);
}
const delGamesEl=function(){
    pole.innerHTML="";
    selectionGames.style.height='';
}
selc.addEventListener("click",startGamesCreat);
clearSelc.addEventListener("click",delGamesEl);
let d=JSON.parse(localStorage.getItem('test'));
getSav(d);