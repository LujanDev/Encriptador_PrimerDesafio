const inputDatos= document.querySelector(".input-texto");
const mensajeOutput=document.querySelector(".mensaje");

/*`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"` */


function btnEncriptado(){
    const textoEncriptado=encriptar(inputDatos.value);
    mensajeOutput.value= textoEncriptado;
    mensajeOutput.style.backgroundImage="none";
    inputDatos.value="";
}


function encriptar(string_A_Encriptar){
    var matriz_Valores_Reemplazo= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["0"], ["ober"], ["u", "ufat"]];
    string_A_Encriptar=string_A_Encriptar.toLowerCase();
    //Se recorre la matriz de valores para verificar si el string a encriptar tiene alguno de sus 5 valores
    
    for(var i=0; i< matriz_Valores_Reemplazo.length; i++){
    
    if(string_A_Encriptar.includes(matriz_Valores_Reemplazo[i][0])){
        string_A_Encriptar=string_A_Encriptar.replaceAll(matriz_Valores_Reemplazo[i][0], matriz_Valores_Reemplazo[i][1]);
    }
    
    }
    return string_A_Encriptar;


}

function desencriptar(string_A_Desencriptar){
    var matriz_Valores_Reemplazo= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["0"], ["ober"], ["u", "ufat"]];
    string_A_Desencriptar=string_A_Desencriptar.toLowerCase();
    //Se recorre la matriz de valores para verificar si el string a desencriptar tiene alguno de sus 5 valores
    
    for(var i=0; i< matriz_Valores_Reemplazo.length; i++){
    
    if(string_A_Desencriptar.includes(matriz_Valores_Reemplazo[i][1])){
        string_A_Desencriptar=string_A_Desencriptar.replaceAll(matriz_Valores_Reemplazo[i][1], matriz_Valores_Reemplazo[i][0]);
    }
    
    }
    return string_A_Desencriptar;

}
function btnDesencriptar(){
    const textodesencriptado=desencriptar(inputDatos.value);
    mensajeOutput.value= textodesencriptado;
    inputDatos.value="";
    
}
function copiar(){
    mensajeOutput.select();
    navigator.clipboard.writeText(mensajeOutput.value);
    mensajeOutput.value="";
    alert("texto copiado");
}
