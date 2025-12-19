// --- LÓGICA DO PORTAL DO CLIENTE ---

function irParaWhatsapp(motivo) {
    // 1. COLOQUE SEU NÚMERO AQUI (apenas números, com DDD)
    const telefone = "5511999999999"; 
    
    let mensagem = "";
    
    // 2. Lógica para definir a mensagem baseada no botão clicado
    if (motivo === '2via') {
        mensagem = "Olá. Sou cliente e gostaria de solicitar a 2ª via do meu boleto.";
    } else if (motivo === 'Login') {
        mensagem = "Olá. Não estou conseguindo acessar o Portal do Cliente. Pode me ajudar?";
    } else if (motivo === 'Quitacao') {
        mensagem = "Olá. Gostaria de simular a quitação antecipada (total ou parcial) do meu contrato.";
    } else if (motivo === 'IR') {
        mensagem = "Olá. Preciso do meu informe de rendimentos para declaração.";
    } else if (motivo === 'Extrato') {
        mensagem = "Olá. Gostaria de solicitar o extrato de pagamentos do meu financiamento.";
    } else if (motivo === 'Dados') {
        mensagem = "Olá. Gostaria de atualizar meus dados cadastrais (endereço/telefone).";
    } else if (motivo === 'PlanoFlex') { // Antigo Sign & Go
        mensagem = "Olá. Tenho interesse em saber mais sobre os planos de recompra garantida.";
    } else if (motivo === 'CDC') {
        mensagem = "Olá. Gostaria de simular um financiamento tradicional.";
    } else if (motivo === 'Seguro') {
        mensagem = "Olá. Gostaria de uma cotação de seguro/blindagem para meu veículo.";
    } else if (motivo === 'Eletrico') {
        mensagem = "Olá. Tenho interesse em ofertas de veículos elétricos.";
    
    // --- NOVOS SERVIÇOS ADICIONADOS ---
    } else if (motivo === 'Transferencia') {
        mensagem = "Olá. Gostaria de saber como funciona a transferência de dívida para outra pessoa.";
    } else if (motivo === 'Substituicao') {
        mensagem = "Olá. Gostaria de solicitar a substituição de garantia (trocar o carro do financiamento).";
    } else if (motivo === 'BaixaGravame') {
        mensagem = "Olá. Já quitei meu contrato e gostaria de solicitar a baixa do gravame.";
    } else if (motivo === 'Sair') {
        mensagem = "Gostaria de encerrar minha sessão segura no portal.";
    } else {
        // Mensagem padrão caso não tenha motivo específico
        mensagem = "Olá. Gostaria de falar com um atendente sobre meu financiamento.";
    }
    
    // 3. Cria o link e abre o WhatsApp
    const link = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
}

// --- ANIMAÇÃO DE ENTRADA (VISUAL) ---
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    // Observa todos os elementos com a classe .hidden para animar
    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
});