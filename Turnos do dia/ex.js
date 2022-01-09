function carregar() {
  var msg = document.querySelector('.msg')
  var imagem = document.querySelector('.imagem')
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()
  msg.innerHTML = `Agora são ${hora}h:${minutos}min`
  if (hora >= 0 && hora < 12) {
    imagem.src = 'manha.jpg'
    document.body.style.background = '#fb942f'
  } else if (hora >= 12 && hora < 18) {
    imagem.src = 'tarde.jpg'
    document.body.style.background = '#d0846a'
  } else {
    imagem.src = 'noite.jpg'
    document.body.style.background = '#002842'
  }
}
