/*------------메인 메뉴바----------------------*/


/*----------메인 메뉴바 끝-------------------------*/  




/*-----------메인 이미지 슬라이드 및 이미지 하단바 클릭시 이동------------*/ 



/*-----------------main visual end---------------------*/








/*-----------메인 이미지 슬라이드 및 이미지 하단바 클릭시 이동 끝------------*/


/*
    최대한 말로 생각해야댐

*/
function show(n){

    let gnb1 = document.querySelector('.gnb_label');
    let gnb2 = document.querySelector('.gnb_label2');
    let gnb1_check = gnb1.getAttribute('class');
    let gnb2_check = gnb2.getAttribute('class');
   
    if (n == 0) {
        if (gnb1_check == 'gnb_label') {
            gnb1.setAttribute('class','gnb_label go');
            gnb2.setAttribute('class','gnb_label2');
        } else {
            gnb1.setAttribute('class','gnb_label');
        }
    } else {
        if (gnb2_check == 'gnb_label2') {
            gnb2.setAttribute('class','gnb_label2 go');
            gnb1.setAttribute('class','gnb_label');
        } else {
            gnb2.setAttribute('class','gnb_label2');
        }
    }
} 
/*-----------------메뉴 열면 애니메이션---------------------*/

let idx=0;    
let label,label_btn;

function init(){
    label=document.querySelectorAll('.gnb_label_le>ul>li>.show');//gnb안에 클래서 b2전체저장
    label_btn=document.querySelector('#gnb>ul>.btn');//btn안에 a2저장
    label_btn.addEventListener('click',showMenu);//??클릭시 이벤트 발생?
    
   //cbtn=document.querySelector('.a3');//cbtn안에 a3저장 
  // header =document.querySelector('.header');
    //cbtn.addEventListener('click',initIdx);//동일?
    //header.addEventListener('mouseout',hide);
}



/*function hide(item){
    console.log(item);
    if(item.clientY > 600){
        initIdx();
    }
}*/
// 재귀함수 함수내에서 동일한 함수를 호출하는것
function showMenu(){
    let addr;
    
    if (label.item((label.length-1)).getAttribute('class') == 'show to')
    {//gnb길이-1 클래스 b2on 같으면
        // initIdx?
        initIdx();
        setTimeout(showMenu,'1');
        return false;
    }

    label.item(idx).classList.add('to');
    idx++;
    addr = setTimeout(showMenu,'20');
    if (idx == 26){
        idx = 0;
        clearTimeout(addr);
    } 
}

function initIdx(){
    label.forEach(ele=>{ // 반복문인데 for x foreach 
        ele.classList.remove('to');
    });
}
window.addEventListener('DOMContentLoaded',init);


let label_ri,label_btn2;
let idx2=0;
function init2(){
    label_ri=document.querySelectorAll('.gnb_label_ri>ul>li>.show');
    label_btn2=document.querySelector('#gnb>ul>.btn');
    label_btn2.addEventListener('click',showMenu2);
}

function showMenu2(){
    let add;
    
    if (label_ri.item((label_ri.length-1)).getAttribute('class') == 'show on2') {//gnb길이-1 클래스 b2on 같으면
        // initIdx?
        initIdx2();
        setTimeout(showMenu2,'1');
        return false;
    }

    label_ri.item(idx2).classList.add('on2');
    idx2++;
    add = setTimeout(showMenu2,'20');
    if (idx2 == 8){
        idx2 = 0;
        clearTimeout(add);
    } 
}

function initIdx2(){
    label_ri.forEach(ele=>{ // 반복문인데 for x foreach 
        ele.classList.remove('on2');
    });
}

window.addEventListener('DOMContentLoaded',init2); 

let label_bt;
let idx3=0;
function init3(){
    label_bt=document.querySelectorAll('.gnb_label_bt>ul>.show');
    label_btn3=document.querySelector('#gnb>ul>.btn');
    label_btn3.addEventListener('click',showMenu3);
}

function showMenu3(){
    let add;
    
    if (label_bt.item((label_bt.length-1)).getAttribute('class') == 'show to') {//gnb길이-1 클래스 b2on 같으면
        // initIdx?
        initIdx3();
        setTimeout(showMenu3,'1');
        return false;
    }

    label_bt.item(idx3).classList.add('to');
    idx3++;
    add = setTimeout(showMenu3,'20');
    if (idx3 == 4){
        idx3 = 0;
        clearTimeout(add);
    } 
}

function initIdx3(){
    label_bt.forEach(ele=>{ // 반복문인데 for x foreach 
        ele.classList.remove('to');
    });
}

window.addEventListener('DOMContentLoaded',init3); 
/*-----------------------------------------------------------------*/





let gnb_label2;
let idx4=0;
function init4(){
    gnb_label2=document.querySelectorAll('.gnb_label2>ul>li>.show');
    label_btn4=document.querySelector('#gnb>ul>#btn2');
    label_btn4.addEventListener('click',showMenu4);
}

function showMenu4(){
    let add;
    
    if (gnb_label2.item((gnb_label2.length-1)).getAttribute('class') == 'show to') {//gnb길이-1 클래스 b2on 같으면
        // initIdx?
        initIdx4();
        setTimeout(showMenu4,'1');
        return false; 
    }

    gnb_label2.item(idx4).classList.add('to');
    idx4++;
    
    add = setTimeout(showMenu4,'20');
    if (idx4 == 10){
        idx4 = 0;
        clearTimeout(add);
    } 
}

function initIdx4(){
    gnb_label2.forEach(ele=>{ // 반복문인데 for x foreach 
        ele.classList.remove('to');
    });
}

window.addEventListener('DOMContentLoaded',init4); 
/*--------------------------------------------------------*/





let gnb_label2_bt;
let idx5=0;
function init5(){
    gnb_label2_bt=document.querySelectorAll('.gnb_label2_bt>ul>li>.show');
    label_btn5=document.querySelector('#gnb>ul>#btn2');
    label_btn5.addEventListener('click',showMenu3);
}

function showMenu5(){
    let add;
    
    if (gnb_label2_bt.item((gnb_label2_bt.length-1)).getAttribute('class') == 'show to') {//gnb길이-1 클래스 b2on 같으면
        // initIdx?
        initIdx5();
        setTimeout(showMenu5,'1');
        return false;
    }

    gnb_label2_bt.item(idx5).classList.add('to');
    idx5++;
    add = setTimeout(showMenu5,'20');
    if (idx5 == 2){
        idx5 = 0;
        clearTimeout(add);
    } 
}

function initIdx5(){
    gnb_label2_bt.forEach(ele=>{ // 반복문인데 for x foreach 
        ele.classList.remove('to');
    });
}

window.addEventListener('DOMContentLoaded',init5); 

// DOMContentLoaded HTML 로드가 완료가되면 실행해라 
// addEventListener('이벤트 내용','함수명')*/
