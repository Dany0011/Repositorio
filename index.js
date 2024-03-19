const vocales = ["a", "e", "i", "o", "u"];
const reemplazos = ["ai", "enter", "imes", "ober", "ufat"];

function encriptar(texto) {
  let textoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
    const indiceVocal = vocales.indexOf(letra);
    if (indiceVocal !== -1) {
      textoEncriptado += reemplazos[indiceVocal];
    } else {
      textoEncriptado += letra;
    }
  }
  return textoEncriptado;
}

function desencriptar(texto) {
  let textoDesencriptado = "";
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
    const indiceReemplazo = reemplazos.indexOf(letra);
    if (indiceReemplazo !== -1) {
      textoDesencriptado += vocales[indiceReemplazo];
    } else {
      textoDesencriptado += letra;
    }
  }
  return textoDesencriptado;
}

const inputTexto = document.getElementById("input-texto");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const outputTexto = document.getElementById("output-texto");

btnEncriptar.addEventListener("click", () => {
  const texto = inputTexto.value.toLowerCase();
  const textoEncriptado = encriptar(texto);
  outputTexto.textContent = textoEncriptado;
});

btnDesencriptar.addEventListener("click", () => {
  const texto = inputTexto.value.toLowerCase();
  const textoDesencriptado = desencriptar(texto);
  outputTexto.textContent = textoDesencriptado;
});
