function fuja() {
    const botaoNao = document.getElementById('nao')

    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const maxX = larguraJanela - botaoNao.offsetWidth;
    const maxY = alturaJanela - botaoNao.offsetHeight;

    const aleatorioX = Math.floor(Math.random() * maxX);
    const aleatorioY = Math.floor(Math.random() * maxY)


    botaoNao.style.left = aleatorioX + 'px'
    botaoNao.style.top = aleatorioY + 'px'
}

function parabens() {
    alert('Parabéns você fez uma sábia escolha :D ')
}