document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validação simples
    if (name && email && message) {
        // Exibe uma mensagem de feedback
        const feedback = document.getElementById('feedback');
        feedback.classList.remove('hidden');
        feedback.innerHTML = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
        feedback.style.color = 'green';

        // Limpa o formulário
        document.getElementById('contactForm').reset();
    } else {
        const feedback = document.getElementById('feedback');
        feedback.classList.remove('hidden');
        feedback.innerHTML = 'Por favor, preencha todos os campos.';
        feedback.style.color = 'red';
    }
});