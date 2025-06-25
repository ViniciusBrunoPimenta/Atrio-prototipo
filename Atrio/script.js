// Menu responsivo
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Fechar menu ao clicar em link (mobile)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Header escurecido ao rolar
document.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if(window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Rolagem suave
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Animação de scroll para ícones e cards
function revealOnScroll() {
  document.querySelectorAll('.valores-lista li').forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 60) {
      setTimeout(() => el.classList.add('visible'), i * 120);
    }
  });
  document.querySelectorAll('.card-solucao').forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 60) {
      setTimeout(() => el.classList.add('visible'), i * 120);
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Galeria de Obras (carrossel simples)
const galeriaImagens = [
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1503389152951-9c3d029fd6a0?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80'
];
let galeriaIndex = 0;
const galeriaGrid = document.getElementById('galeria-grid');
function renderGaleria() {
  galeriaGrid.innerHTML = '';
  for(let i=0; i<3; i++) {
    const idx = (galeriaIndex + i) % galeriaImagens.length;
    const div = document.createElement('div');
    div.className = 'galeria-item';
    const img = document.createElement('img');
    img.src = galeriaImagens[idx];
    img.alt = 'Obra Átrio';
    div.appendChild(img);
    galeriaGrid.appendChild(div);
  }
}
document.getElementById('galeria-prev').onclick = () => {
  galeriaIndex = (galeriaIndex - 1 + galeriaImagens.length) % galeriaImagens.length;
  renderGaleria();
};
document.getElementById('galeria-next').onclick = () => {
  galeriaIndex = (galeriaIndex + 1) % galeriaImagens.length;
  renderGaleria();
};
window.addEventListener('load', renderGaleria);

// Formulário de Orçamento - Validação
const form = document.getElementById('form-orcamento');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  const nome = form.nome;
  const email = form.email;
  const telefone = form.telefone;
  const mensagem = form.mensagem;
  // Reset
  [nome, email, telefone, mensagem].forEach(f => f.style.borderColor = '#bfbfbf');
  // Nome
  if(!nome.value.trim()) {
    nome.style.borderColor = 'red';
    valid = false;
  }
  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email.value)) {
    email.style.borderColor = 'red';
    valid = false;
  }
  // Telefone
  if(!telefone.value.trim() || telefone.value.replace(/\D/g,'').length < 10) {
    telefone.style.borderColor = 'red';
    valid = false;
  }
  // Mensagem
  if(!mensagem.value.trim()) {
    mensagem.style.borderColor = 'red';
    valid = false;
  }
  if(valid) {
    form.reset();
    alert('Proposta enviada com sucesso! Entraremos em contato.');
  }
});

// Chat Flutuante
const chatIcone = document.getElementById('chat-icone');
const chatJanela = document.getElementById('chat-janela');
chatIcone.addEventListener('click', () => {
  chatJanela.classList.toggle('open');
});
// Fecha chat ao clicar fora
window.addEventListener('click', function(e) {
  if(!chatJanela.contains(e.target) && !chatIcone.contains(e.target)) {
    chatJanela.classList.remove('open');
  }
});

// Splash Cinematográfica
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('splash-active');
  // Partículas com tsParticles
  if (window.tsParticles) {
    tsParticles.load('splash-bg', {
      background: { color: 'transparent' },
      fpsLimit: 60,
      particles: {
        number: { value: 60, density: { enable: true, area: 800 } },
        color: { value: ['#bfa046', '#bfbfbf', '#00f0ff', '#fff'] },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 2.5, random: { enable: true, minimumValue: 1 } },
        move: { enable: true, speed: 1.2, direction: 'none', outModes: 'out' },
        links: { enable: true, distance: 120, color: '#bfa046', opacity: 0.2, width: 1 }
      },
      detectRetina: true
    });
  }
  // Botão Entrar
  const splashBtn = document.getElementById('splash-enter');
  splashBtn.addEventListener('click', () => {
    const splash = document.getElementById('splash');
    splash.classList.add('splash-hide');
    setTimeout(() => {
      splash.style.display = 'none';
      document.body.classList.remove('splash-active');
    }, 800);
  });
}); 