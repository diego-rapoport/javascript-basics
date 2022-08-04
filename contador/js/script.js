function retornaContador() {
  return document.getElementById('contador')
}

function mudaCor() {
  const contador = retornaContador()
  const valor = contador.innerHTML
  if (valor > 0) contador.style.color = 'green'
  else if (valor < 0) contador.style.color = 'red'
  else contador.style.color = 'black'
}
function incrementa() {
  const contador = retornaContador()
  contador.innerHTML++
  mudaCor()
}

function reduz() {
  const contador = retornaContador()
  contador.innerHTML--
  mudaCor()
}
