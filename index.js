'use strict';
const body=document.getElementById('result1');
const st=document.getElementById('check');
const lastarea=document.getElementById('btn');
const all=document.getElementById('all');
var count=0;
//子要素削除用関数
function extinguish(id){
  while(id.firstChild){
    id.removeChild(id.firstChild);
  }
}

function test(a,body){
  if(a==""){
    const ip=document.createElement('h3');
    ip.innerText="何も選択されていません";
    ip.classList.add('alert');
    extinguish(body);
    body.appendChild(ip);
  }else{
    if(a==1){
      const ip=document.createElement('h3');
      ip.innerText="当たりです！";
      extinguish(body);
      body.appendChild(ip);
      count++;
    }
    else if(a==0){
      const ip=document.createElement('h3');
      ip.innerText="はずれです";
      extinguish(body);
      body.appendChild(ip);
    }
  }
}

function check2(b){
  const a=b.value;
  return a;
}



function check1(){
  const bt=document.getElementById('btn');
  const view1=document.getElementById('quiz1');
  const view2=document.getElementById('quiz2');
  const view3=document.getElementById('quiz3');
  const view4=document.getElementById('quiz4')
  const view5=document.getElementById('quiz5')
  const view6=document.getElementById('quiz6')
  const view7=document.getElementById('quiz7')
  const view8=document.getElementById('quiz8')
  const view9=document.getElementById('quiz9')
  const view10=document.getElementById('quiz10')
  const view11 =document.getElementById('quiz11')
  const view12 =document.getElementById('quiz12')
  //個別の答え表示
  const ans1=document.getElementById('ans1')
  const ans2=document.getElementById('ans2')
  const ans3=document.getElementById('ans3')
  const ans4=document.getElementById('ans4')
  const ans5=document.getElementById('ans5')
  const ans6=document.getElementById('ans6')
  const ans7=document.getElementById('ans7')
  const ans8=document.getElementById('ans8')
  const ans9=document.getElementById('ans9')
  const ans10=document.getElementById('ans10')
  const ans11=document.getElementById('ans11')
  const ans12=document.getElementById('ans12')
  const radioNodeList=view1.january;
  const b=view2.february;
  const c=view3.march;
  const d=view4.april;
  const e=view5.may;
  const f=view6.june;
  const g=view7.july;
  const h=view8.august;
  const i=view9.september;
  const j=view10.october;
  const k=view11.november;
  const l=view12.december;
  const b1=check2(b);
  const c1=check2(c);
  const d1=check2(d);
  const e1=check2(e);
  const f1=check2(f);
  const g1=check2(g);
  const h1=check2(h);
  const i1=check2(i);
  const j1=check2(j);
  const k1=check2(k);
  const l1=check2(l);
  const a=radioNodeList.value;
  extinguish(bt);
  test(a,ans1);
  test(b1,ans2);
  test(c1,ans3);
  test(d1,ans4);
  test(e1,ans5);
  test(f1,ans6);
  test(g1,ans7);
  test(h1,ans8);
  test(i1,ans9);
  test(j1,ans10);
  test(k1,ans11);
  test(l1,ans12);
  const addnum=count;
  if(addnum==12){
    const body1=document.createElement('h1');
    body1.innerText="全問正解です！おめでとうございます。";
    extinguish(lastarea);
    lastarea.appendChild(body1);
  }else if(addnum==0){
    const body1=document.createElement('h2');
    body1.innerText="全問不正解です……";
    extinguish(lastarea);
    lastarea.appendChild(body1);
  }else {
    const body1=document.createElement('h2');
    body1.innerText=addnum+"問正解です。";
    extinguish(lastarea);
    lastarea.appendChild(body1);
  }
  //リベンジ用のボタン実装
  const button=document.createElement('button');
  if(addnum==12){
    button.innerText="再挑戦"
  }else{
  button.innerText="リトライ";
  }
  button.classList.add('start');
  lastarea.appendChild(button);
  button.onclick=()=>{
    restart();
  }
}

//ボタンの中身
function restart(){
  extinguish(lastarea);
  extinguish(ans1);
  extinguish(ans2);
  extinguish(ans3);
  extinguish(ans4);
  extinguish(ans5);
  extinguish(ans6);
  extinguish(ans7);
  extinguish(ans8);
  extinguish(ans9);
  extinguish(ans10);
  extinguish(ans11);
  extinguish(ans12);
  const button1=document.createElement('button');
  button1.innerText="答え合わせ";
  button1.classList.add('start');
  lastarea.appendChild(button1);
  button1.onclick=()=>{
    check1();
  }
}