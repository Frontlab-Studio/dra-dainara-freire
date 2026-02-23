const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");


const navItems = document.querySelectorAll("#nav-menu a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navItems.forEach(item => item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const queixa = document.getElementById('queixa').value;
    const ciente = document.getElementById('ciente').checked;

    // INSERIR NÚMERO AQUI (Apenas números, com DDI e DDD. Ex: 5511999999999)
    const numeroClinica = "4384137743";

    let mensagem = `Olá! Meu nome é *${nome}* e gostaria de agendar uma avaliação.\n\n`;
    mensagem += `*Minha queixa principal:* ${queixa}\n`;
    mensagem += `*Meu Contato:* ${telefone}\n\n`;

    if (ciente) {
        mensagem += `✅ _Confirmo estar ciente de que a clínica atua com protocolos que variam desde pequenos retoques até o planejamento facial completo, com valores definidos em avaliação clínica._`;
    }

    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroClinica}&text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, '_blank');
});