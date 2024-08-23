function encriptar() {
    const inputText = document.getElementById('inputText').value;
    const resultText = encriptarTexto(inputText);
    document.getElementById('resultText').textContent = resultText;
    document.getElementById('contenedor').classList.add('rotar');
}

function desencriptar() {
    const inputText = document.getElementById('inputText').value;
    const resultText = desencriptarTexto(inputText);
    document.getElementById('resultText').textContent = resultText;
    document.getElementById('contenedor').classList.add('rotar');
}

function copiar() {
    const resultText = document.getElementById('resultText').textContent;
    navigator.clipboard.writeText(resultText)
        .then(() => {
            alert('Texto copiado');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

function encriptarTexto(texto) {
    // Implementa la lógica para encriptar el texto
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
    // Implementa la lógica para desencriptar el texto
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}
