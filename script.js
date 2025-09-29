// Função de digitação
function typeWriter(el, speed = 120) {
  const txt = el.textContent;
  el.textContent = '';
  [...txt].forEach((ch, i) =>
    setTimeout(() => el.textContent += ch, i * speed)
  );
}

// Aplica efeito no nome e depois no subtítulo
typeWriter(document.querySelector('.name'));
setTimeout(() => typeWriter(document.querySelector('.title')), 1500);

document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.info-box');
    
    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add('visible');
        }, index * 300); 
    });
});
