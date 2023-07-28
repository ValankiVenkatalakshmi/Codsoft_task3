let input=document.getElementById('space');
let keys=document.querySelectorAll('button');
let expression="";
let arr=Array.from(keys);
arr.forEach(button=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
      expression=eval(expression);
      input.value=expression;
    }
    else if(e.target.innerHTML=='AC'){
      expression='';
      input.value=expression;
    }
    else if(e.target.innerHTML=='DEL'){
        expression=expression.substr(0,expression.length-1);
        input.value=expression;
    }
    else{
      expression+=e.target.innerHTML;
      input.value=expression;
    }
  })
})