let container = document.getElementById('container');
let button = document.getElementById('sorting');
let bgNumDom = document.querySelectorAll('.num');
console.log(bgNumDom);
let numb1= document.getElementById('numb1');
let numb2= document.getElementById('numb2');
let numb3= document.getElementById('numb3');
let numb4= document.getElementById('numb4');
let numb5= document.getElementById('numb5');
let numb6= document.getElementById('numb6');
let numb7= document.getElementById('numb7');
let numb8= document.getElementById('numb8');
let numb9= document.getElementById('numb9');
let numb10= document.getElementById('numb10');
let kontainer = [random(),random(),random(),random(),random(),random(),random(),random(),random(),random(),];
// let kontainer = [100,90,80,60,50,40,30,20,10,0];
function start(){
 
// index 0 with 1
let select0 = setTimeout(()=>{
    bgNumDom[0].style.backgroundColor = 'blue';
    bgNumDom[1].style.backgroundColor = 'blue';
},100);
let check0 = setTimeout(()=>{
  if(kontainer[0] > kontainer[1]){
    bgNumDom[0].style.backgroundColor = 'red';
    bgNumDom[1].style.backgroundColor = 'red';
// let sorting1 = setTimeout(()=>{
   sorting();
  pushNumber();
  // },800);
   }else{
      bgNumDom[0].style.backgroundColor = 'green';
      bgNumDom[1].style.backgroundColor = 'green';
  }
},500);
let end0 = setTimeout(()=>{
  bgNumDom[0].style.backgroundColor = '';
  bgNumDom[1].style.backgroundColor = '';
},1000);
// index 0 with 1 end
// index 1 with 2 
// 1-2
let select1 = setTimeout(()=>{
  bgNumDom[1].style.backgroundColor = 'blue';
  bgNumDom[2].style.backgroundColor = 'blue';
}, 1500);
let check1 = setTimeout(()=>{
  if(kontainer[1] > kontainer[2]){
    bgNumDom[1].style.backgroundColor = 'red';
    bgNumDom[2].style.backgroundColor = 'red';
    // let sorting2 = setTimeout(()=>{
     sorting();
    pushNumber();
    // },2300);
  }else{
    bgNumDom[1].style.backgroundColor = 'green';
    bgNumDom[2].style.backgroundColor = 'green';
  }
},2000);
let end1 = setTimeout(()=>{
    bgNumDom[1].style.backgroundColor = '';
    bgNumDom[2].style.backgroundColor = '';
  },2500);
//step 1 1-2 end
  // 0-1
let select1step1 = setTimeout(()=>{
    bgNumDom[0].style.backgroundColor = 'blue';
    bgNumDom[1].style.backgroundColor = 'blue';
},3000);
let check1step1 = setTimeout(()=>{
  if(kontainer[0] > kontainer[1]){
    bgNumDom[0].style.backgroundColor = 'red';
    bgNumDom[1].style.backgroundColor = 'red';
// let sorting1 = setTimeout(()=>{
   sorting();
  pushNumber();
  // },800);
   }else{
      bgNumDom[0].style.backgroundColor = 'green';
      bgNumDom[1].style.backgroundColor = 'green';
  }
},3500);
let end1step1 = setTimeout(()=>{
  bgNumDom[0].style.backgroundColor = '';
  bgNumDom[1].style.backgroundColor = '';
},4000);
// 0-1 end
// steps2 2-3 
let select2 = setTimeout(()=>{
  bgNumDom[2].style.backgroundColor = 'blue';
  bgNumDom[3].style.backgroundColor = 'blue';
},4500);
let check2 = setTimeout(()=>{
  if(kontainer[2] > kontainer[3]){
    bgNumDom[2].style.backgroundColor = 'red';
    bgNumDom[3].style.backgroundColor = 'red';
    sorting();
    pushNumber();
  }else{
    bgNumDom[2].style.backgroundColor = 'green';
    bgNumDom[3].style.backgroundColor = 'green';
  }
},5000);
let end2 = setTimeout(()=>{
  bgNumDom[2].style.backgroundColor = '';
  bgNumDom[3].style.backgroundColor = '';
},5500);

// steps2 2-3end
  // 1-2
  let select2step2 = setTimeout(()=>{
  bgNumDom[1].style.backgroundColor = 'blue';
  bgNumDom[2].style.backgroundColor = 'blue';
}, 6000);
let check2step2 = setTimeout(()=>{
  if(kontainer[1] > kontainer[2]){
    bgNumDom[1].style.backgroundColor = 'red';
    bgNumDom[2].style.backgroundColor = 'red';
    // let sorting2 = setTimeout(()=>{
     sorting();
    pushNumber();
    // },2300);
  }else{
    bgNumDom[1].style.backgroundColor = 'green';
    bgNumDom[2].style.backgroundColor = 'green';
  }
},6500);
let end2step2 = setTimeout(()=>{
    bgNumDom[1].style.backgroundColor = '';
    bgNumDom[2].style.backgroundColor = '';
  },7000);
  // step2 1-2 end 
    // 0-1
    let select2step3 = setTimeout(()=>{
    bgNumDom[0].style.backgroundColor = 'blue';
    bgNumDom[1].style.backgroundColor = 'blue';
},7500);
let check2step3 = setTimeout(()=>{
  if(kontainer[0] > kontainer[1]){
    bgNumDom[0].style.backgroundColor = 'red';
    bgNumDom[1].style.backgroundColor = 'red';
// let sorting1 = setTimeout(()=>{
   sorting();
  pushNumber();
  // },800);
   }else{
      bgNumDom[0].style.backgroundColor = 'green';
      bgNumDom[1].style.backgroundColor = 'green';
  }
},8000);
let end2step3 = setTimeout(()=>{
  bgNumDom[0].style.backgroundColor = '';
  bgNumDom[1].style.backgroundColor = '';
},8500);
// STEP 2-3 END

// STEP 3-4 START
let select3 = setTimeout(()=>{
  bgNumDom[3].style.backgroundColor = 'blue';
  bgNumDom[4].style.backgroundColor = 'blue';
},9000);
  
let check3 = setTimeout(()=>{
  if(kontainer[3] > kontainer[4]){
    bgNumDom[3].style.backgroundColor ='red';
    bgNumDom[4].style.backgroundColor ='red';
    sorting();
    pushNumber();
  }else{
    bgNumDom[3].style.backgroundColor ='green';
    bgNumDom[4].style.backgroundColor ='green';
    
  }
},9500);  
let end3 = setTimeout(()=>{
  bgNumDom[3].style.backgroundColor = '';
  bgNumDom[4].style.backgroundColor = '';
},10000);
// step3 3-4 end
  // step3 2-3
let select3step1 = setTimeout(()=>{
  bgNumDom[2].style.backgroundColor = 'blue';
  bgNumDom[3].style.backgroundColor = 'blue';
},10500);
let check3step1 = setTimeout(()=>{
  if(kontainer[2] > kontainer[3]){
    bgNumDom[2].style.backgroundColor = 'red';
    bgNumDom[3].style.backgroundColor = 'red';
    sorting();
    pushNumber();
  }else{
    bgNumDom[2].style.backgroundColor = 'green';
    bgNumDom[3].style.backgroundColor = 'green';
  }
},11000);
let end3step1 = setTimeout(()=>{
  bgNumDom[2].style.backgroundColor = '';
  bgNumDom[3].style.backgroundColor = '';
},11500);
// step3 2-3 end
  // step3 1-2
let select3step2 = setTimeout(()=>{
  bgNumDom[1].style.backgroundColor = 'blue';
  bgNumDom[2].style.backgroundColor = 'blue';
}, 12000);
let check3step2 = setTimeout(()=>{
  if(kontainer[1] > kontainer[2]){
    bgNumDom[1].style.backgroundColor = 'red';
    bgNumDom[2].style.backgroundColor = 'red';
    // let sorting2 = setTimeout(()=>{
     sorting();
    pushNumber();
    // },2300);
  }else{
    bgNumDom[1].style.backgroundColor = 'green';
    bgNumDom[2].style.backgroundColor = 'green';
  }
},12500);
let end3step2 = setTimeout(()=>{
    bgNumDom[1].style.backgroundColor = '';
    bgNumDom[2].style.backgroundColor = '';
  },13000);  
  // step3 1-2end
    // step3 0-1
let select3step3 = setTimeout(()=>{
    bgNumDom[0].style.backgroundColor = 'blue';
    bgNumDom[1].style.backgroundColor = 'blue';
},13500);
let check3step3 = setTimeout(()=>{
  if(kontainer[0] > kontainer[1]){
    bgNumDom[0].style.backgroundColor = 'red';
    bgNumDom[1].style.backgroundColor = 'red';
// let sorting1 = setTimeout(()=>{
   sorting();
  pushNumber();
  // },800);
   }else{
      bgNumDom[0].style.backgroundColor = 'green';
      bgNumDom[1].style.backgroundColor = 'green';
  }
},14000);
let end3step3 = setTimeout(()=>{
  bgNumDom[0].style.backgroundColor = '';
  bgNumDom[1].style.backgroundColor = '';
},14500);
// step 3 0-1 end
// STEP3 3-4 END

// STEP4 4-5 
let select4 = setTimeout(()=>{
    bgNumDom[4].style.backgroundColor = 'blue';
    bgNumDom[5].style.backgroundColor = 'blue';
},15000);
let check4 = setTimeout(()=>{
  if(kontainer[4] > kontainer[5]){
    bgNumDom[4].style.backgroundColor = 'red';
    bgNumDom[5].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[4].style.backgroundColor = 'green';
      bgNumDom[5].style.backgroundColor = 'green';
  }
},15500);
let end4 = setTimeout(()=>{
  bgNumDom[4].style.backgroundColor = '';
  bgNumDom[5].style.backgroundColor = '';
},16000);
// step 4 end
  // step4 3-4
let select4step1 = setTimeout(()=>{
    bgNumDom[3].style.backgroundColor = 'blue';
    bgNumDom[4].style.backgroundColor = 'blue';
},16500);
let check4step1 = setTimeout(()=>{
  if(kontainer[3] > kontainer[4]){
    bgNumDom[3].style.backgroundColor = 'red';
    bgNumDom[4].style.backgroundColor = 'red';
// let sorting1 = setTimeout(()=>{
   sorting();
  pushNumber();
  // },800);
   }else{
      bgNumDom[3].style.backgroundColor = 'green';
      bgNumDom[4].style.backgroundColor = 'green';
  }
},17000);
let end4step1 = setTimeout(()=>{
  bgNumDom[3].style.backgroundColor = '';
  bgNumDom[4].style.backgroundColor = '';
},17500);
  // step4 3-4 end
    // step4 2-3
let select4step2 = setTimeout(()=>{
    bgNumDom[2].style.backgroundColor = 'blue';
    bgNumDom[3].style.backgroundColor = 'blue';
},18000);
let check4step2 = setTimeout(()=>{
  if(kontainer[2] > kontainer[3]){
    bgNumDom[2].style.backgroundColor = 'red';
    bgNumDom[3].style.backgroundColor = 'red';
// let sorting1 = setTimeout(()=>{
   sorting();
  pushNumber();
  // },800);
   }else{
      bgNumDom[2].style.backgroundColor = 'green';
      bgNumDom[3].style.backgroundColor = 'green';
  }
},18500);
let end4step2 = setTimeout(()=>{
  bgNumDom[2].style.backgroundColor = '';
  bgNumDom[3].style.backgroundColor = '';
},19000);
// step4 2-3 end
  // step4 1-2
let select4step3 = setTimeout(()=>{
    bgNumDom[1].style.backgroundColor = 'blue';
    bgNumDom[2].style.backgroundColor = 'blue';
},19500);
let check4step3 = setTimeout(()=>{
  if(kontainer[1] > kontainer[2]){
    bgNumDom[1].style.backgroundColor = 'red';
    bgNumDom[2].style.backgroundColor = 'red';
// let sorting1 = setTimeout(()=>{
   sorting();
  pushNumber();
  // },800);
   }else{
      bgNumDom[1].style.backgroundColor = 'green';
      bgNumDom[2].style.backgroundColor = 'green';
  }
},20000);
let end4step3 = setTimeout(()=>{
  bgNumDom[1].style.backgroundColor = '';
  bgNumDom[2].style.backgroundColor = '';
},20500);
// step4 1-2 end
  // step4 0-1 
let select4step4 = setTimeout(()=>{
    bgNumDom[0].style.backgroundColor = 'blue';
    bgNumDom[1].style.backgroundColor = 'blue';
},21000);
let check4step4 = setTimeout(()=>{
  if(kontainer[0] > kontainer[1]){
    bgNumDom[0].style.backgroundColor = 'red';
    bgNumDom[1].style.backgroundColor = 'red';
// let sorting1 = setTimeout(()=>{
   sorting();
  pushNumber();
  // },800);
   }else{
      bgNumDom[0].style.backgroundColor = 'green';
      bgNumDom[1].style.backgroundColor = 'green';
  }
},21500);
let end4step4 = setTimeout(()=>{
  bgNumDom[0].style.backgroundColor = '';
  bgNumDom[1].style.backgroundColor = '';
},22000);
// step4 0-1 end
// STEP4 END
// STEP5 5-6
let select5 = setTimeout(()=>{
    bgNumDom[5].style.backgroundColor = 'blue';
    bgNumDom[6].style.backgroundColor = 'blue';
},22500);
let check5 = setTimeout(()=>{
  if(kontainer[5] > kontainer[6]){
    bgNumDom[5].style.backgroundColor = 'red';
    bgNumDom[6].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[5].style.backgroundColor = 'green';
      bgNumDom[6].style.backgroundColor = 'green';
  }
},23000);
let end5 = setTimeout(()=>{
  bgNumDom[5].style.backgroundColor = '';
  bgNumDom[6].style.backgroundColor = '';
},23500);
// step5 part1 4-5
let select5step1 = setTimeout(()=>{
    bgNumDom[4].style.backgroundColor = 'blue';
    bgNumDom[5].style.backgroundColor = 'blue';
},24000);
let check5step1 = setTimeout(()=>{
  if(kontainer[4] > kontainer[5]){
    bgNumDom[4].style.backgroundColor = 'red';
    bgNumDom[5].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[4].style.backgroundColor = 'green';
      bgNumDom[5].style.backgroundColor = 'green';
  }
},24500);
let end5step1 = setTimeout(()=>{
  bgNumDom[4].style.backgroundColor = '';
  bgNumDom[5].style.backgroundColor = '';
},25000);
// step5 part 1 end
// step5 part2 3-4
let select5step2 = setTimeout(()=>{
    bgNumDom[3].style.backgroundColor = 'blue';
    bgNumDom[4].style.backgroundColor = 'blue';
},25500);
let check5step2 = setTimeout(()=>{
  if(kontainer[3] > kontainer[4]){
    bgNumDom[3].style.backgroundColor = 'red';
    bgNumDom[4].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[3].style.backgroundColor = 'green';
      bgNumDom[4].style.backgroundColor = 'green';
  }
},26000);
let end5step2 = setTimeout(()=>{
  bgNumDom[3].style.backgroundColor = '';
  bgNumDom[4].style.backgroundColor = '';
},26500);
// step5 3-4 end
  // step5 2-3
let select5step3 = setTimeout(()=>{
    bgNumDom[2].style.backgroundColor = 'blue';
    bgNumDom[3].style.backgroundColor = 'blue';
},27000);
let check5step3 = setTimeout(()=>{
  if(kontainer[2] > kontainer[3]){
    bgNumDom[2].style.backgroundColor = 'red';
    bgNumDom[3].style.backgroundColor = 'red';
// let sorting1 = setTimeout(()=>{
   sorting();
  pushNumber();
  // },800);
   }else{
      bgNumDom[2].style.backgroundColor = 'green';
      bgNumDom[3].style.backgroundColor = 'green';
  }
},27500);
let end5step3 = setTimeout(()=>{
  bgNumDom[2].style.backgroundColor = '';
  bgNumDom[3].style.backgroundColor = '';
},28000);
// step 5part3 end
// step 5 part 4 1--2
let select5step4 = setTimeout(()=>{
    bgNumDom[1].style.backgroundColor = 'blue';
    bgNumDom[2].style.backgroundColor = 'blue';
},28500);
let check5step4 = setTimeout(()=>{
  if(kontainer[1] > kontainer[2]){
    bgNumDom[1].style.backgroundColor = 'red';
    bgNumDom[2].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[1].style.backgroundColor = 'green';
      bgNumDom[2].style.backgroundColor = 'green';
  }
},29000);
let end5step4 = setTimeout(()=>{
  bgNumDom[1].style.backgroundColor = '';
  bgNumDom[2].style.backgroundColor = '';
},29500);
// step 5 part4 1-2 end
// step5 part5 0-1 
let select5step5 = setTimeout(()=>{
    bgNumDom[0].style.backgroundColor = 'blue';
    bgNumDom[1].style.backgroundColor = 'blue';
},30000);
let check5step5 = setTimeout(()=>{
  if(kontainer[0] > kontainer[1]){
    bgNumDom[0].style.backgroundColor = 'red';
    bgNumDom[1].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[0].style.backgroundColor = 'green';
      bgNumDom[1].style.backgroundColor = 'green';
  }
},31000);
let end5step5 = setTimeout(()=>{
  bgNumDom[0].style.backgroundColor = '';
  bgNumDom[1].style.backgroundColor = '';
},31500);
// STEP5 END
// STEP 6 6-7
let select6step1 = setTimeout(()=>{
    bgNumDom[6].style.backgroundColor = 'blue';
    bgNumDom[7].style.backgroundColor = 'blue';
},32000);
let check6step1 = setTimeout(()=>{
  if(kontainer[6] > kontainer[7]){
    bgNumDom[6].style.backgroundColor = 'red';
    bgNumDom[7].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[6].style.backgroundColor = 'green';
      bgNumDom[7].style.backgroundColor = 'green';
  }
},32500);
let end6step1 = setTimeout(()=>{
  bgNumDom[6].style.backgroundColor = '';
  bgNumDom[7].style.backgroundColor = '';
},33000);
// step6 part2 5-6
let select6step2 = setTimeout(()=>{
    bgNumDom[5].style.backgroundColor = 'blue';
    bgNumDom[6].style.backgroundColor = 'blue';
},33500);
let check6step2 = setTimeout(()=>{
  if(kontainer[5] > kontainer[6]){
    bgNumDom[5].style.backgroundColor = 'red';
    bgNumDom[6].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[5].style.backgroundColor = 'green';
      bgNumDom[6].style.backgroundColor = 'green';
  }
},34000);
let end6step2 = setTimeout(()=>{
  bgNumDom[5].style.backgroundColor = '';
  bgNumDom[6].style.backgroundColor = '';
},34500);
// step6 part 2 5-6 end
// step6 part 3 4-5
let select6step3 = setTimeout(()=>{
    bgNumDom[4].style.backgroundColor = 'blue';
    bgNumDom[5].style.backgroundColor = 'blue';
},35000);
let check6step3 = setTimeout(()=>{
  if(kontainer[4] > kontainer[5]){
    bgNumDom[4].style.backgroundColor = 'red';
    bgNumDom[5].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[4].style.backgroundColor = 'green';
      bgNumDom[5].style.backgroundColor = 'green';
  }
},35500);
let end6step3 = setTimeout(()=>{
  bgNumDom[4].style.backgroundColor = '';
  bgNumDom[5].style.backgroundColor = '';
},36000);
// step 6 part 3end
// step 6 part 4
let select6step4 = setTimeout(()=>{
    bgNumDom[3].style.backgroundColor = 'blue';
    bgNumDom[4].style.backgroundColor = 'blue';
},36500);
let check6step4 = setTimeout(()=>{
  if(kontainer[3] > kontainer[4]){
    bgNumDom[3].style.backgroundColor = 'red';
    bgNumDom[4].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[3].style.backgroundColor = 'green';
      bgNumDom[4].style.backgroundColor = 'green';
  }
},37000);
let end6step4 = setTimeout(()=>{
  bgNumDom[3].style.backgroundColor = '';
  bgNumDom[4].style.backgroundColor = '';
},37500);
// step 6 part 4 end
// step 6part 5 2-3
let select6step5 = setTimeout(()=>{
    bgNumDom[2].style.backgroundColor = 'blue';
    bgNumDom[3].style.backgroundColor = 'blue';
},38000);
let check6step5 = setTimeout(()=>{
  if(kontainer[2] > kontainer[3]){
    bgNumDom[2].style.backgroundColor = 'red';
    bgNumDom[3].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[2].style.backgroundColor = 'green';
      bgNumDom[3].style.backgroundColor = 'green';
  }
},38500);
let end6step5 = setTimeout(()=>{
  bgNumDom[2].style.backgroundColor = '';
  bgNumDom[3].style.backgroundColor = '';
},39000);
// step 6 part 5 end
// step6 part 6 
let select6step6 = setTimeout(()=>{
    bgNumDom[1].style.backgroundColor = 'blue';
    bgNumDom[2].style.backgroundColor = 'blue';
},39500);
let check6step6 = setTimeout(()=>{
  if(kontainer[1] > kontainer[2]){
    bgNumDom[1].style.backgroundColor = 'red';
    bgNumDom[2].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[1].style.backgroundColor = 'green';
      bgNumDom[2].style.backgroundColor = 'green';
  }
},40000);
let end6step6 = setTimeout(()=>{
  bgNumDom[1].style.backgroundColor = '';
  bgNumDom[2].style.backgroundColor = '';
},40500);
// step6 part 6 end
// step6 part 7
let select6step7 = setTimeout(()=>{
    bgNumDom[0].style.backgroundColor = 'blue';
    bgNumDom[1].style.backgroundColor = 'blue';
},41000);
let check6step7 = setTimeout(()=>{
  if(kontainer[0] > kontainer[1]){
    bgNumDom[0].style.backgroundColor = 'red';
    bgNumDom[1].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[0].style.backgroundColor = 'green';
      bgNumDom[1].style.backgroundColor = 'green';
  }
},41500);
let end6step7 = setTimeout(()=>{
  bgNumDom[0].style.backgroundColor = '';
  bgNumDom[1].style.backgroundColor = '';
},42000);
// step6 part7end
// STEP7 7-8
let select7 = setTimeout(()=>{
    bgNumDom[7].style.backgroundColor = 'blue';
    bgNumDom[8].style.backgroundColor = 'blue';
},42500);
let check7 = setTimeout(()=>{
  if(kontainer[7] > kontainer[8]){
    bgNumDom[7].style.backgroundColor = 'red';
    bgNumDom[8].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[7].style.backgroundColor = 'green';
      bgNumDom[8].style.backgroundColor = 'green';
  }
},43000);
let end7 = setTimeout(()=>{
  bgNumDom[7].style.backgroundColor = '';
  bgNumDom[8].style.backgroundColor = '';
},43500);
// step7 7-8 end
// step7 part 1 6-7
let select7step1 = setTimeout(()=>{
    bgNumDom[6].style.backgroundColor = 'blue';
    bgNumDom[7].style.backgroundColor = 'blue';
},44000);
let check7step1 = setTimeout(()=>{
  if(kontainer[6] > kontainer[7]){
    bgNumDom[6].style.backgroundColor = 'red';
    bgNumDom[7].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[6].style.backgroundColor = 'green';
      bgNumDom[7].style.backgroundColor = 'green';
  }
},44500);
let end7step1 = setTimeout(()=>{
  bgNumDom[6].style.backgroundColor = '';
  bgNumDom[7].style.backgroundColor = '';
},45000);
// step 7 part 1 end
// step 7 part 2 5-6
let select7step2 = setTimeout(()=>{
    bgNumDom[5].style.backgroundColor = 'blue';
    bgNumDom[6].style.backgroundColor = 'blue';
},45500);
let check7step2 = setTimeout(()=>{
  if(kontainer[5] > kontainer[6]){
    bgNumDom[5].style.backgroundColor = 'red';
    bgNumDom[6].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[5].style.backgroundColor = 'green';
      bgNumDom[6].style.backgroundColor = 'green';
  }
},46000);
let end7step2 = setTimeout(()=>{
  bgNumDom[5].style.backgroundColor = '';
  bgNumDom[6].style.backgroundColor = '';
},46500);
// step7 part 2 end
// step 7 part 3 4-5
let select7step3 = setTimeout(()=>{
    bgNumDom[4].style.backgroundColor = 'blue';
    bgNumDom[5].style.backgroundColor = 'blue';
},47000);
let check7step3 = setTimeout(()=>{
  if(kontainer[4] > kontainer[5]){
    bgNumDom[4].style.backgroundColor = 'red';
    bgNumDom[5].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[4].style.backgroundColor = 'green';
      bgNumDom[5].style.backgroundColor = 'green';
  }
},47500);
let end7step3 = setTimeout(()=>{
  bgNumDom[4].style.backgroundColor = '';
  bgNumDom[5].style.backgroundColor = '';
},48000);
// step7 part 3 end
// step7 part 4 3-4
let select7step4 = setTimeout(()=>{
    bgNumDom[3].style.backgroundColor = 'blue';
    bgNumDom[4].style.backgroundColor = 'blue';
},48500);
let check7step4 = setTimeout(()=>{
  if(kontainer[3] > kontainer[4]){
    bgNumDom[3].style.backgroundColor = 'red';
    bgNumDom[4].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[3].style.backgroundColor = 'green';
      bgNumDom[4].style.backgroundColor = 'green';
  }
},49000);
let end7step4 = setTimeout(()=>{
  bgNumDom[3].style.backgroundColor = '';
  bgNumDom[4].style.backgroundColor = '';
},49500);
// step7 part4
// step7 part 5 2-3
let select7step5 = setTimeout(()=>{
    bgNumDom[2].style.backgroundColor = 'blue';
    bgNumDom[3].style.backgroundColor = 'blue';
},50000);
let check7step5 = setTimeout(()=>{
  if(kontainer[2] > kontainer[3]){
    bgNumDom[2].style.backgroundColor = 'red';
    bgNumDom[3].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[2].style.backgroundColor = 'green';
      bgNumDom[3].style.backgroundColor = 'green';
  }
},50500);
let end7step5 = setTimeout(()=>{
  bgNumDom[2].style.backgroundColor = '';
  bgNumDom[3].style.backgroundColor = '';
},51000);
// step7 part5 end
// step7 part6 1-2
let select7step6 = setTimeout(()=>{
    bgNumDom[1].style.backgroundColor = 'blue';
    bgNumDom[2].style.backgroundColor = 'blue';
},51500);
let check7step6 = setTimeout(()=>{
  if(kontainer[1] > kontainer[2]){
    bgNumDom[1].style.backgroundColor = 'red';
    bgNumDom[2].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[1].style.backgroundColor = 'green';
      bgNumDom[2].style.backgroundColor = 'green';
  }
},52000);
let end7step6 = setTimeout(()=>{
  bgNumDom[1].style.backgroundColor = '';
  bgNumDom[2].style.backgroundColor = '';
},52500);
// step7 part6 end
// step 7 part 7 0-1
let select7step7 = setTimeout(()=>{
    bgNumDom[0].style.backgroundColor = 'blue';
    bgNumDom[1].style.backgroundColor = 'blue';
},53000);
let check7step7 = setTimeout(()=>{
  if(kontainer[0] > kontainer[1]){
    bgNumDom[0].style.backgroundColor = 'red';
    bgNumDom[1].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[0].style.backgroundColor = 'green';
      bgNumDom[1].style.backgroundColor = 'green';
  }
},53500);
let end7step7 = setTimeout(()=>{
  bgNumDom[0].style.backgroundColor = '';
  bgNumDom[1].style.backgroundColor = '';
},54000);
// STEP7END
// STEP 8 8-9
let select8 = setTimeout(()=>{
    bgNumDom[8].style.backgroundColor = 'blue';
    bgNumDom[9].style.backgroundColor = 'blue';
},54500);
let check8 = setTimeout(()=>{
  if(kontainer[8] > kontainer[9]){
    bgNumDom[8].style.backgroundColor = 'red';
    bgNumDom[9].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[8].style.backgroundColor = 'green';
      bgNumDom[9].style.backgroundColor = 'green';
  }
},55000);
let end8 = setTimeout(()=>{
  bgNumDom[8].style.backgroundColor = '';
  bgNumDom[9].style.backgroundColor = '';
},55500);
// STEP8 7-8
let select8step0 = setTimeout(()=>{
    bgNumDom[7].style.backgroundColor = 'blue';
    bgNumDom[8].style.backgroundColor = 'blue';
},56000);
let check8step0 = setTimeout(()=>{
  if(kontainer[7] > kontainer[8]){
    bgNumDom[7].style.backgroundColor = 'red';
    bgNumDom[8].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[7].style.backgroundColor = 'green';
      bgNumDom[8].style.backgroundColor = 'green';
  }
},56500);
let end8step0 = setTimeout(()=>{
  bgNumDom[7].style.backgroundColor = '';
  bgNumDom[8].style.backgroundColor = '';
},57000);
// step7 7-8 end
// step7 part 1 6-7
let select8step1 = setTimeout(()=>{
    bgNumDom[6].style.backgroundColor = 'blue';
    bgNumDom[7].style.backgroundColor = 'blue';
},57500);
let check8step1 = setTimeout(()=>{
  if(kontainer[6] > kontainer[7]){
    bgNumDom[6].style.backgroundColor = 'red';
    bgNumDom[7].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[6].style.backgroundColor = 'green';
      bgNumDom[7].style.backgroundColor = 'green';
  }
},58000);
let end8step1 = setTimeout(()=>{
  bgNumDom[6].style.backgroundColor = '';
  bgNumDom[7].style.backgroundColor = '';
},58500);
// step 7 part 1 end
// step 7 part 2 5-6
let select8step2 = setTimeout(()=>{
    bgNumDom[5].style.backgroundColor = 'blue';
    bgNumDom[6].style.backgroundColor = 'blue';
},58500);
let check8step2 = setTimeout(()=>{
  if(kontainer[5] > kontainer[6]){
    bgNumDom[5].style.backgroundColor = 'red';
    bgNumDom[6].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[5].style.backgroundColor = 'green';
      bgNumDom[6].style.backgroundColor = 'green';
  }
},59000);
let end8step2 = setTimeout(()=>{
  bgNumDom[5].style.backgroundColor = '';
  bgNumDom[6].style.backgroundColor = '';
},59500);
// step7 part 2 end
// step 7 part 3 4-5
let select8step3 = setTimeout(()=>{
    bgNumDom[4].style.backgroundColor = 'blue';
    bgNumDom[5].style.backgroundColor = 'blue';
},60000);
let check8step3 = setTimeout(()=>{
  if(kontainer[4] > kontainer[5]){
    bgNumDom[4].style.backgroundColor = 'red';
    bgNumDom[5].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[4].style.backgroundColor = 'green';
      bgNumDom[5].style.backgroundColor = 'green';
  }
},60500);
let end8step3 = setTimeout(()=>{
  bgNumDom[4].style.backgroundColor = '';
  bgNumDom[5].style.backgroundColor = '';
},61000);
// step7 part 3 end
// step7 part 4 3-4
let select8step4 = setTimeout(()=>{
    bgNumDom[3].style.backgroundColor = 'blue';
    bgNumDom[4].style.backgroundColor = 'blue';
},61500);
let check8step4 = setTimeout(()=>{
  if(kontainer[3] > kontainer[4]){
    bgNumDom[3].style.backgroundColor = 'red';
    bgNumDom[4].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[3].style.backgroundColor = 'green';
      bgNumDom[4].style.backgroundColor = 'green';
  }
},62000);
let end8step4 = setTimeout(()=>{
  bgNumDom[3].style.backgroundColor = '';
  bgNumDom[4].style.backgroundColor = '';
},62500);
// step7 part4
// step7 part 5 2-3
let select8step5 = setTimeout(()=>{
    bgNumDom[2].style.backgroundColor = 'blue';
    bgNumDom[3].style.backgroundColor = 'blue';
},63000);
let check8step5 = setTimeout(()=>{
  if(kontainer[2] > kontainer[3]){
    bgNumDom[2].style.backgroundColor = 'red';
    bgNumDom[3].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[2].style.backgroundColor = 'green';
      bgNumDom[3].style.backgroundColor = 'green';
  }
},63500);
let end8step5 = setTimeout(()=>{
  bgNumDom[2].style.backgroundColor = '';
  bgNumDom[3].style.backgroundColor = '';
},64000);
// step7 part5 end
// step7 part6 1-2
let select8step6 = setTimeout(()=>{
    bgNumDom[1].style.backgroundColor = 'blue';
    bgNumDom[2].style.backgroundColor = 'blue';
},64500);
let check8step6 = setTimeout(()=>{
  if(kontainer[1] > kontainer[2]){
    bgNumDom[1].style.backgroundColor = 'red';
    bgNumDom[2].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[1].style.backgroundColor = 'green';
      bgNumDom[2].style.backgroundColor = 'green';
  }
},65000);
let end8step6 = setTimeout(()=>{
  bgNumDom[1].style.backgroundColor = '';
  bgNumDom[2].style.backgroundColor = '';
},65500);
// step7 part6 end
// step 7 part 7 0-1
let select8step7 = setTimeout(()=>{
    bgNumDom[0].style.backgroundColor = 'blue';
    bgNumDom[1].style.backgroundColor = 'blue';
},66000);
let check8step7 = setTimeout(()=>{
  if(kontainer[0] > kontainer[1]){
    bgNumDom[0].style.backgroundColor = 'red';
    bgNumDom[1].style.backgroundColor = 'red';
   sorting();
  pushNumber();
   }else{
      bgNumDom[0].style.backgroundColor = 'green';
      bgNumDom[1].style.backgroundColor = 'green';
  }
},66500);
let end8step7 = setTimeout(()=>{
  bgNumDom[0].style.backgroundColor = '';
  bgNumDom[1].style.backgroundColor = '';
},67000);
// STEP8END
}

function random(){
return randomNumber = Math.floor(Math.random() * 100) + 1;
}

function sorting(){
  if(kontainer[0] > kontainer[1]){
    let temp = kontainer[0];
      kontainer[0] = kontainer[1];
      kontainer[1] = temp;
      console.log(temp);
      console.log(kontainer);
      
  }else if(kontainer[1] > kontainer[2]){
    let temp = kontainer[1];
      kontainer[1] = kontainer[2];
      kontainer[2] = temp;
  }else if(kontainer[2] > kontainer[3]){
    let temp = kontainer[2];
      kontainer[2] = kontainer[3];
      kontainer[3] = temp;
  }else if(kontainer[3] > kontainer[4]){
    let temp = kontainer[3];
      kontainer[3] = kontainer[4];
      kontainer[4] = temp;
  }else if(kontainer[4] > kontainer[5]){
    let temp = kontainer[4];
      kontainer[4] = kontainer[5];
      kontainer[5] = temp;
  }else if(kontainer[5] > kontainer[6]){
    let temp = kontainer[5];
      kontainer[5] = kontainer[6];
      kontainer[6] = temp;
  }else if(kontainer[6] > kontainer[7]){
    let temp = kontainer[6];
      kontainer[6] = kontainer[7];
      kontainer[7] = temp;
  }else if(kontainer[7] > kontainer[8]){
    let temp = kontainer[7];
      kontainer[7] = kontainer[8];
      kontainer[8] = temp;
  }else if(kontainer[8] > kontainer[9]){
    let temp = kontainer[8];
      kontainer[8] = kontainer[9];
      kontainer[9] = temp;
  }else{console.log('penyortingan gagal')}
      
      
}  

function pushNumber(){
  numb1.innerText = kontainer[0];
  numb2.innerText = kontainer[1];
  numb3.innerText = kontainer[2];
  numb4.innerText = kontainer[3];
  numb5.innerText = kontainer[4];
  numb6.innerText = kontainer[5];
  numb7.innerText = kontainer[6];
  numb8.innerText = kontainer[7];
  numb9.innerText = kontainer[8];
  numb10.innerText = kontainer[9];
  // persen();
}
function tombol(){
  start();
}

numb1.innerText = kontainer[0];
numb2.innerText = kontainer[1];
numb3.innerText = kontainer[2];
numb4.innerText = kontainer[3];
numb5.innerText = kontainer[4];
numb6.innerText = kontainer[5];
numb7.innerText = kontainer[6];
numb8.innerText = kontainer[7];
numb9.innerText = kontainer[8];
numb10.innerText = kontainer[9];