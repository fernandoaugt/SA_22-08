
//butoes
let btnCadastrar = document.querySelector('#cadastro');
let btnExcluir = document.querySelector('#excluir');
let btnEditar = document.querySelector('#editar');

//inputs
let nome = document.querySelector('#name');
let quantidade = document.querySelector('#qtd');
let preco = document.querySelector('#preço');
let descricao = document.querySelector('#desc');
let categoria = document.querySelector('#categoria');

//tabela
let tabela = document.querySelector('#saida table');
let container = document.querySelector('.box-container')
let BD = [];

btnCadastrar.addEventListener('click', cadastro)


//funçoes
function cadastro() { }
btnCadastrar.onclick = function () {
    let produto = new Object();
    produto.nome = nome.value;
    produto.quantidade = quantidade.value;
    produto.preco = preco.value;
    produto.descricao = descricao.value;
    produto.categoria = categoria.value;
    produto.id = BD.length;
    BD.push(produto);
    tabela.innerHTML += `<tr>
    <td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td>
    <td>${produto.nome}</td>
    <td>${produto.quantidade}</td>
    <td>${produto.preco}</td>
    <td>${produto.descricao}</td>
    <td>${produto.categoria}</td>
    </tr> <br>`; 

    container.innerHTML +=`
    <div class="box-container">
        <div class="box">
            <div class="image">
                <img src="" alt="produto">
                    <a href="#" class="fas fa-heart"></a>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h3> ${produto.nome} </h3>
                <p>${produto.descricao}</p>
                <span class="price">R$ ${produto.preco}</span><br>
                <span class="price">Qtd:${produto.quantidade}</span>
            </div>
        </div>
    </div>`
}

btnExcluir.onclick = function () {
    for (let i = 0; i < BD.length; i++) {
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked) {
            BD.splice(elemento.id, 1);
            tabela.innerHTML = `<tr>
            <td >Check</td>
            <td>Nome</td>
            <td>Quant.</td>
            <td>Preço</td>
            <td>Descrição</td>
            <td>Categoria</td>
            </tr>`;
            montarTabela();
        }
    }
}

function montarTabela() {
    for (let i = 0; i < BD.length; i++) {

        tabela.innerHTML += `<tr>
        <td width="30px"><input type="checkbox" id="${i}" onchange="verificar()"></td>
        <td>${BD[i].nome}</td>
        <td>${BD[i].quantidade}</td>
        <td>${BD[i].preco}</td>
        <td>${BD[i].descricao}</td>
        <td>${BD[i].categoria}</td>
        </tr>`;
    }
}

btnEditar.onclick = function () {
    for (let i = 0; i < BD.length; i++) {
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked) {

            BD[i].nome = nome.value;
            BD[i].quantidade = quantidade.value;
            BD[i].preco = preco.value;
            BD[i].descricao = descricao.value;
            BD[i].categoria = categoria.value;

            tabela.innerHTML = `<tr>
            <td>Check</td>
            <td>Nome</td>
            <td>Quant.</td>
            <td>Preço</td>
            <td>Descrição</td>
            <td>Categoria</td> 
            </tr>`;
            montarTabela();
        }
    }
}

function verificar(id) {
    let cont = 0;
    for (let i = 0; i < BD.length; i++) {
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked) {

            nome.value = BD[i].nome;
            quantidade.value = BD[i].quantidade;
            preco.value = BD[i].preco;
            descricao.value = BD[i].descricao;
            categoria.value = BD[i].categoria;

            cont++;
            if (cont > 1) {
                alert('Não é possível selecionar mais de 1 elemento.');
                elemento.checked = false;
                break;
            }
        }
    }
}
