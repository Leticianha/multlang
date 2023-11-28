function Escolher(idioma) {
    fetch(`textos_${idioma}.json`)
        .then(resposta => resposta.json())
        .then(texto => {

            document.getElementById('buscar').placeholder = texto.buscar;
            document.getElementById('botaoLogin').innerText = texto.botaoLogin; 

            var botaoLogin = document.getElementById('botaoLogin');
            botaoLogin.innerText = texto.botaoLogin;
            // Adiciona estilos ao hover do botão
            botaoLogin.addEventListener('mouseover', function () {
                botaoLogin.style.color = '#F8F1EE';
                botaoLogin.style.backgroundColor = '#3C2520';
            });
            botaoLogin.addEventListener('mouseout', function () {
                botaoLogin.style.backgroundColor = '#B99B8D';
                botaoLogin.style.color = '#3C2520' //
        })
        // Remove a classe que estiliza o botão
            botaoLogin.classList.remove('button');

            document.getElementById('pre').innerText = texto.pre;
            document.getElementById('lan').innerText = texto.lan;
            document.getElementById('pro').innerText = texto.pro;
            document.getElementById('sus').innerText = texto.sus;
            document.getElementById('h21').innerText = texto.h21;
            document.getElementById('h22').innerText = texto.h22;
            document.getElementById('h3').innerText = texto.h3;
            document.getElementById('p').innerHTML =  "<span>" + texto.p;
            document.getElementById('p2').innerHTML =  "<span>" + texto.p2;
            document.getElementById('p3').innerText = texto.p3;
            document.getElementById('pre2').innerText = texto.pre2;
            document.getElementById('lan2').innerText = texto.lan2;
            document.getElementById('pro2').innerText = texto.pro2;
            document.getElementById('sus2').innerText = texto.sus2;
            document.getElementById('fav').innerText = texto.fav;
            document.getElementById('sn').innerText = texto.sn;
        })
    .catch(error => console.log('Erro buscando textos:', error));
}