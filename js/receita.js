var receitas = [];
var inputDescricao;
var inputValor;
var inputDataRecebimento;
var inputTipoReceita;
var inputCliente;
var inputFormaPagamento;

loadDataFromLocalStorage();
salvarReceitaButtonEvent();

function salvarReceitaButtonEvent() {
    var saveButton = document.getElementById('salvarReceita');
    saveButton.onclick = function() {
        salvarReceita();
    };
}

function salvarReceita() {
    inputDescricao = document.getElementById('descricao');
    inputValor = document.getElementById('valor');
    inputDataRecebimento = document.getElementById('dataRecebimento');
    inputTipoReceita = document.getElementById('tipoReceita');
    inputCliente = document.getElementById('cliente');
    inputFormaPagamento = document.getElementById('formaPagamento');

    var receita = {
        descricao: inputDescricao.value,
        valor: inputValor.value,
        dataRecebimento: inputDataRecebimento.value,
        tipoReceita: inputTipoReceita.value,
        cliente: inputCliente.value,
        formaPagamento: inputFormaPagamento.value
    };

    receitas.push(receita);
    clearTable();
    populateTable();
    saveLocalStorage(); 
    clearInputs();
}

function clearTable() {
    var table = document.getElementById('receita_table');
    var tBody = table.tBodies[0];

    for (var i = tBody.children.length; i > 0; i--) {
        var tr = tBody.children[i - 1];
        tBody.removeChild(tr);
    }
}

function populateTable() {
    var table = document.getElementById('receita_table');

    for (var i = 0; i < receitas.length; i++) {
        var receita = receitas[i];
        var tr = document.createElement('tr');
        var tdDescricao = document.createElement('td');
        var tdValor = document.createElement('td');
        var tdDataRecebimento = document.createElement('td');
        var tdTipoReceita = document.createElement('td');
        var tdCliente = document.createElement('td');
        var tdFormaPagamento = document.createElement('td');


        tdDescricao.innerHTML = receita.descricao;
        tdValor.innerHTML = receita.valor;
        tdDataRecebimento.innerHTML = receita.dataRecebimento;
        tdTipoReceita.innerHTML = receita.tipoReceita;
        tdCliente.innerHTML = receita.cliente;
        tdFormaPagamento.innerHTML = receita.formaPagamento;
        
        tr.appendChild(tdDescricao);
        tr.appendChild(tdValor);
        tr.appendChild(tdDataRecebimento);
        tr.appendChild(tdTipoReceita);
        tr.appendChild(tdCliente);
        tr.appendChild(tdFormaPagamento);
        
        table.tBodies[0].appendChild(tr);
    }
}

function saveLocalStorage() {
    var data = JSON.stringify(receitas);
    localStorage.setItem("receitas", data);
}

function loadDataFromLocalStorage() {
    var receitasSaved = localStorage.getItem("receitas");
    if (receitasSaved) {
        receitas = JSON.parse(receitasSaved);
        populateTable();
    }
}
function clearInputs(){
    inputDescricao.value = "";
    inputValor.value = "";
    inputDataRecebimento.value = "";
    inputTipoReceita.value = "";
    inputCliente.value = "";
    inputFormaPagamento.value = "";
}
