function irParaWhatsapp(interesse) {
    // 1. SEU NÚMERO AQUI (apenas números)
    const telefone = "5511999999999"; 
    
    // 2. A frase padrão OBRIGATÓRIA solicitada
    let mensagem = "Olá, gostaria de iniciar meu atendimento.";
    
    // 3. Adiciona contexto se o cliente clicou em uma categoria
    if (interesse) {
        mensagem += ` Tenho interesse especial na categoria: ${interesse}.`;
    } 
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseUrl = isMobile ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send";
    
    const linkWhatsApp = `${baseUrl}?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;
    
    window.open(linkWhatsApp, '_blank');
}

// Lógica de Animações (não precisa alterar nada aqui)
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});