const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    // Remove todas as classes active
    // removeActive();
    
    // Pega o botão clicado, pai dele, lista de classes do pai e adiciona a classe active (caso já possua, ele remove).
    toggle.parentNode.classList.toggle('active')
  })
})

/*
function removeActive() {
 toggles.forEach(toggle => {
   toggle.parentNode.classList.remove('active')
 })
}
*/