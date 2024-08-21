const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const image = document.querySelector('.image-cookie');
const backBtn = document.querySelector('.back-btn');

image.addEventListener('click', function() {
    document.querySelector('.image-cookie').classList.add('ativo')
    setTimeout(toggleScreen,3000);
    
    
    let listaDaSorte = [
        "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.", 
        "A vida trará coisas boas se tiver paciência.", 
        "Siga os bons e aprenda com eles."];

    let randomNumber = Math.round(Math.random() * 2); 

    let novoScreen = 
    `<div>
        <h2>Aqui está a sua sorte de hoje:</h2>

        <p>${listaDaSorte[randomNumber]}</p>

        <div class="image">
            <img src="/ASSETS/opened-cookie.png" alt="Biscoito da Sorte aberto">
        </div>

        <button class="back-btn" onclick="backScreen()">Abrir outro biscoito</button>
    </div>`;

    screen2.innerHTML = novoScreen;
});

function toggleScreen() {
    screen1.classList.add('hide');
    screen2.classList.remove('hide');
};

 function backScreen() {
    screen1.classList.remove('hide');
    screen2.classList.add('hide');
    document.querySelector('.image-cookie').classList.remove('ativo')
};

