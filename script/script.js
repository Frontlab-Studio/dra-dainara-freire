document.addEventListener("DOMContentLoaded", () => {
    // Menu Responsivo
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

    // Envio WhatsApp
    document.getElementById('whatsappForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const queixa = document.getElementById('queixa').value;
        const ciente = document.getElementById('ciente').checked;

        // Número alvo
        const numeroClinica = "554497739970";

        let mensagem = `Olá! Meu nome é *${nome}* e gostaria de agendar uma avaliação.\n\n`;
        mensagem += `*Área de interesse:* ${queixa}\n`;
        mensagem += `*Meu Contato:* ${telefone}\n\n`;

        if (ciente) {
            mensagem += `✅ _Confirmo estar ciente de que a clínica atua com protocolos que variam de pequenos retoques a planejamentos completos._`;
        }

        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroClinica}&text=${encodeURIComponent(mensagem)}`;
        window.open(urlWhatsApp, '_blank');
    });
});