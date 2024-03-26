//botão para adicionar tarefa
const btnAdd = document.querySelector("#btn-add")

btnAdd.addEventListener("click", function(e){

    e.preventDefault()

    addTarefa()
})
//funcão para adicionar tarefa
function addTarefa (){

    //titulo da tarefa
    const tiTarefa = document.querySelector("#titulo-tarefa").value
    
    if (tiTarefa){
        //clonar o template
        const template = document.querySelector(".template")
        const nvTarefa = template.cloneNode(true)

        //adicionar o titulo
        nvTarefa.querySelector("#tarefa-adicionada").textContent = tiTarefa

        //remover o hide
        nvTarefa.classList.remove("template")
        nvTarefa.classList.remove("hide")

        //adicionar tarefa na lista
        const lista = document.querySelector("#lista-tarefa")
        lista.appendChild(nvTarefa)

        //limpar texto
        document.querySelector("#titulo-tarefa").value = ""

        //remover tarefa
        const remover = nvTarefa.querySelector(".remove-btn")
        remover.addEventListener("click", function(){
            removerTarefa(this)
        })

        //completar tarefa
        const completar = nvTarefa.querySelector(".done-btn")
        completar.addEventListener("click", function(){
            completarTarefa(this)
        })
    }
}

//função de remover tarefa
function removerTarefa(tarefa){
    tarefa.parentNode.remove(true)
}

//funcão de completar tarefa
function completarTarefa(tarefa){
    const tarefaCompleta = tarefa.parentNode

    tarefaCompleta.classList.toggle("completa")
}