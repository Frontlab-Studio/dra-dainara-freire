const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");


const navItems = document.querySelectorAll("#nav-menu a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navItems.forEach(item => item.addEventListener("click"), () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
});

// Formulário do WhatsApp
document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const queixa = document.getElementById('queixa').value;
    const ciente = document.getElementById('ciente').checked;

    // NÚMERO CORRIGIDO COM DDI 55 (Brasil)
    const numeroClinica = "554384137743";

    let mensagem = `Olá! Meu nome é *${nome}* e gostaria de agendar uma avaliação.\n\n`;
    mensagem += `*Minha queixa principal:* ${queixa}\n`;
    mensagem += `*Meu Contato:* ${telefone}\n\n`;

    if (ciente) {
        mensagem += `✅ _Confirmo estar ciente de que os valores e protocolos exatos são definidos apenas em avaliação clínica presencial._`;
    }

    // Abre o WhatsApp
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroClinica}&text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, '_blank');
});