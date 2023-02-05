let n = 0;
let a = document.getElementById("slifer");
function Chango() {
  if(n===400) {   
    n = 0;
    console.log(n)
    a.style.transform = `translate(-${n}%,-30%)`;
       
    
  } else {
  n+=100
  a.style.transform=`translate(-${n}%,-30%)`
}
   
}

function Pachim() {
  if(n===0) {
    n = 400;      
      a.style.transform = `translate(-${n}%,-30%)`;
    
  } else {
  n-=100
  a.style.transform=`translate(-${n}%,-30%)`;
}
}

let b = document.getElementById("bder");
b.addEventListener('click', Chango);

let c = document.getElementById("bizq");
c.addEventListener('click',Pachim)