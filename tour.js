let n = 0;
let a = document.getElementById("slifer");
function Chango() {
  if(n===400) {   
    n = 0;  
      a.style.transform = `translateX(-${n}%)`;
       
    
  } else {
  n+=100
  a.style.transform=`translateX(-${n}%)`
}
   
}

function Pachim() {
  if(n===0) {
    n = 400;      
      a.style.transform = `translateX(-${n}%)`;
    
  } else {
  n-=100
  a.style.transform=`translateX(-${n}%)`
}
}

let b = document.getElementById("bder");
b.addEventListener('click', Chango);

let c = document.getElementById("bizq");
c.addEventListener('click',Pachim)