function clicou() {
	var dataAtual = new Date();
    console.log(dataAtual);
	var dataString = dataAtual.toLocaleString();
    console.log(dataString);
	document.getElementById("hora-atual").innerText = "Hora Atual : " + dataString;
}
function trocarFundo() {
    document.body.classList.toggle("body-alternativo");
}