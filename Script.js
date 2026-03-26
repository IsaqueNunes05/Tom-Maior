document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    
    function showSlide(index) {
        if (index < 0) index = items.length - 1;
        if (index >= items.length) index = 0;
        
        // Remove active de todos
        items.forEach(item => item.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        
        // Ativa o atual
        items[index].classList.add('active');
        indicators[index].classList.add('active');
        
        currentIndex = index;
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 10000);
    
    // Teclas do teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            showSlide(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            showSlide(currentIndex + 1);
        }
    });
});

document.getElementById('formulario').addEventListener('submit', function(event) {


    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const nivel = document.getElementById('nivel').value;
    const modalidade = document.getElementById('modalidade').value;

    const mensagem = encodeURIComponent(`*Nome:* ${nome}\n*Idade:* ${idade}\n*Nível:* ${nivel}\n*Modalidade:* ${modalidade}`);
    window.location.href = `https://wa.me/5571984321359/?text=${mensagem}`;
});