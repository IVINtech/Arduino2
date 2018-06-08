var prende1=document.getElementById("CierreEmergencia");
// var prende2=document.getElementById("Prende2");

prende1.addEventListener("click",()=>{
    if (prende1.textContent=="Cierre emergencia") {
        prende1.textContent="Desactivar"
        prende1.style.color="red"
        prende1.style.borderColor="red"
    } else {
        prende1.textContent="Cierre emergencia"
        prende1.style.color="#555"
        prende1.style.borderColor="#bbb"
    }
});
// prende2.addEventListener("click",()=>{
//     if (prende2.textContent=="Prende 2") {
//         prende2.textContent="Apaga 2"
//     } else {
//         prende2.textContent="Prende 2"
//     }
// });