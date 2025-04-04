
function copiarTexto(elemento) {
    const textos = {
        linear: "background: linear-gradient(to right, #ff6b6b, #54a0ff);",
        radial: "background: radial-gradient(circle, #ff6b6b, #54a0ff);",
        conico: "background: conic-gradient(#ff6b6b, #feca57, #1dd1a1, #54a0ff, purple);",
        angular: "background: conic-gradient(from 90deg, #1dd1a1, #feca57, #1dd1a1, #54a0ff);",
        mesh: "background: radial-gradient(circle at 20% 30%, #ff6b6b, transparent), radial-gradient(circle at 80% 20%, #1dd1a1, transparent), radial-gradient(circle at 50% 80%, #54a0ff, transparent), radial-gradient(circle at 30% 70%, #feca57, transparent);",
        diamante: "background: radial-gradient(closest-side, #ff6b6b, #54a0ff);"

    }

    const textoParaCopiar = textos[elemento.id];


    navigator.clipboard.writeText(textoParaCopiar)
      .then(() => alert("Texto copiado para a área de transferência!"))
      .catch(err => alert("Erro ao copiar: " + err));

}



