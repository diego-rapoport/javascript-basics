function mudaFeitas(incFeito) {
  const naoFeitos = document.getElementById('tarefasNaoFeitas')
  const feitos = document.getElementById('tarefasFeitas')

  if (incFeito) {
    feitos.innerHTML = parseInt(feitos.innerHTML) + 1
    naoFeitos.innerHTML = parseInt(naoFeitos.innerHTML) - 1
  } else {
    naoFeitos.innerHTML = parseInt(naoFeitos.innerHTML) + 1
  }

}

function criaTarefa(tarefa) {
  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.id = 'checkTarefa'
  checkbox.addEventListener('change', function() {
    const tarefa = this.nextElementSibling
    if (tarefa.style['text-decoration']) {
      mudaFeitas(false)
      tarefa.style['text-decoration'] = ''
    } else {
      mudaFeitas(true)
      tarefa.style['text-decoration'] = 'line-through'
    }

  })

  let novaTarefa = document.createElement('p')
  novaTarefa.innerHTML = tarefa
  let novaDiv = document.createElement('div')
  novaDiv.className = 'divTarefa'
  novaDiv.style.display = 'flex'

  novaDiv.appendChild(checkbox)
  novaDiv.appendChild(novaTarefa)

  const divTarefa = document.getElementById('listaTarefas')
  divTarefa.appendChild(novaDiv)

  mudaFeitas(false)
  tarefa.innerHTML = ''
}

document.getElementById('deletarFeitas').addEventListener('click', function deletar() {
  const lista = document.getElementById('listaTarefas')
  let aRemover = []
  for (let div of lista.children) {
    if (div.children[1].style['text-decoration']) aRemover.push(div)
  }
  aRemover.map(remove => {
    remove.remove()
  })
})

document.getElementById("adicionarBotao").addEventListener('click', function adicionar() {
  let tarefa = document.getElementById('tarefa')
  criaTarefa(tarefa.value)
  tarefa.value = ''
})
