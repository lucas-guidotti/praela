function enviarParaWhatsApp() {
    const dateOption = document.getElementById('date-options').value;
    const telefone = '5553981364363'; // Coloque seu número de WhatsApp aqui (incluindo o código do país)
    const mensagem = `Oi amor, eu escolhi: ${dateOption} para o nosso date!`;

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
}