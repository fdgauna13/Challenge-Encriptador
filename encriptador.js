const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function bEncriptar(){
   const textoEncriptado = encriptar(textArea.value)
   mensaje.value = textoEncriptado
   textArea.value = "";
   mensaje.style.backgroundImage = "none"
}
function encriptar(stringEncriptada){
   let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "afat"]];
   stringEncriptada = stringEncriptada.toLowerCase()

   for(let i = 0; i < matrizCodigo.length; i++){
      if(stringEncriptada.includes(matrizCodigo[i][0])){
         stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
      }
   }
   return stringEncriptada
}
 
 function bDesencriptar(){
   const textoEncriptado = desencriptar(textArea.value)
   mensaje.value = textoEncriptado
   textArea.value = "";
}

 function desencriptar(stringDesencriptada){
   let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o", "ober"],["u","afat"]]
   stringDesencriptada = stringDesencriptada.toLowerCase()


   for(let i = 0; i < matrizCodigo.length; i++){
      if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada =stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
      }
   }
   return stringDesencriptada
}

function copiar() {
   const copyText = document.querySelector(".mensaje");
   copyText.select();
   copyText.setSelectionRange(0,999999);
   navigator.clipboard.writeText(copyText.value);

}