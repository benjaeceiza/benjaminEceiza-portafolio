
const barraPop = document.getElementById("barra-lateral")
const barraOver = document.getElementById("barra-lateral-over")


function mostrarBarra(){
    barraPop.className="barra-lateral"
    barraOver.className="none"
   
}

function quitarBarra(){
  barraPop.className="none"
  barraOver.className ="barra-lateral-over" 
     
}

barraOver.onmouseover = () => mostrarBarra();
barraPop.onmouseleave = () => quitarBarra();


barraOver.onclick = () => mostrarBarra();
barraPop.onclick = () => quitarBarra();