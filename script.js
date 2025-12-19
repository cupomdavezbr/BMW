// --- LÓGICA DA CALCULADORA ---
let valorVeiculo = 50000;
let valorEntrada = 10000;
let meses = 36; // Padrão
const taxaJuros = 0.0159; // 1.59% a.m.

const rangeValor = document.getElementById('range-valor');
const rangeEntrada = document.getElementById('range-entrada');
const displayValor = document.getElementById('display-valor');
const displayEntrada = document.getElementById('display-entrada');
const displayParcela = document.getElementById('valor-parcela');

function calcular() {
    valorVeiculo = parseInt(rangeValor.value);
    
    // Ajusta o máximo da entrada dinamicamente
    rangeEntrada.max = valorVeiculo - 1000;
    
    if(parseInt(rangeEntrada.value) >= valorVeiculo) {
        rangeEntrada.value = valorVeiculo - 5000;
    }
    
    valorEntrada = parseInt(rangeEntrada.value);

    // Formata Dinheiro
    const fmt = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    displayValor.innerText = fmt.format(valorVeiculo);
    displayEntrada.innerText = fmt.format(valorEntrada);

    const valorFinanciado = valorVeiculo - valorEntrada;
    
    // Fórmula Price
    const pmt = valorFinanciado * ( (taxaJuros * Math.pow(1 + taxaJuros, meses)) / (Math.pow(1 + taxaJuros, meses) - 1) );

    displayParcela.innerText = fmt.format(pmt);
}

function setPrazo(prazo) {
    meses = prazo;
    document.querySelectorAll('.btn-prazo').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    calcular();
}

function irParaWhatsapp() {
    const telefone = "5511999999999"; // SEU NÚMERO
    const msg = "Olá! Vim pelo site novo e gostaria de simular um financiamento.";
    window.open(`https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(msg)}`, '_blank');
}

function enviarSimulacao() {
    const telefone = "5511999999999"; // SEU NÚMERO
    const parcela = displayParcela.innerText;
    const msg = `Olá! Fiz a simulação no site.\nVeículo: ${displayValor.innerText}\nEntrada: ${displayEntrada.innerText}\nPrazo: ${meses}x\nParcela: ${parcela}`;
    window.open(`https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(msg)}`, '_blank');
}

rangeValor.addEventListener('input', calcular);
rangeEntrada.addEventListener('input', calcular);

document.addEventListener('DOMContentLoaded', () => {
    calcular();
    
    // Animação de entrada
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    });
    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
});