var despesas = [];
var inputDescricao;
var inputValor;
var inputDataPagamento;
var inputTipoDespesa;
var inputFornecedor;
var inputCentroCustos;

loadDataFromLocalStorage();
salvarDespesaButtonEvent();

function salvarDespesaButtonEvent() {
    var saveButton = document.getElementById('salvarDespesa');
    saveButton.onclick = function() {
        salvarDespesa();
    };
}

function salvarDespesa() {
    inputDescricao = document.getElementById('descricao');
    inputValor = document.getElementById('valor');
    inputDataPagamento = document.getElementById('dataPagamento');
    inputTipoDespesa = document.getElementById('tipoDespesa');
    inputFornecedor = document.getElementById('fornecedor');
    inputCentroCustos = document.getElementById('centroCustos');

    var despesa = {
        descricao: inputDescricao.value,
        valor: inputValor.value,
        dataPagamento: inputDataPagamento.value,
        tipoDespesa: inputTipoDespesa.value,
        fornecedor: inputFornecedor.value,
        centroCustos: inputCentroCustos.value
    };

    despesas.push(despesa);
    clearTable();
    populateTable();
    saveLocalStorage(); 
    clearInputs();
}

function clearTable() {
    var table = document.getElementById('despesa_table');
    var tBody = table.tBodies[0];

    for (var i = tBody.children.length; i > 0; i--) {
        var tr = tBody.children[i - 1];
        tBody.removeChild(tr);
    }
}

function populateTable() {
    var table = document.getElementById('despesa_table');

    for (var i = 0; i < despesas.length; i++) {
        var despesa = despesas[i];
        var tr = document.createElement('tr');
        var tdDescricao = document.createElement('td');
        var tdValor = document.createElement('td');
        var tdDataPagamento = document.createElement('td');
        var tdTipoDespesa = document.createElement('td');
        var tdFornecedor = document.createElement('td');
        var tdCentroCustos = document.createElement('td');


        tdDescricao.innerHTML = despesa.descricao;
        tdValor.innerHTML = despesa.valor;
        tdDataPagamento.innerHTML = despesa.dataPagamento;
        tdTipoDespesa.innerHTML = despesa.tipoDespesa;
        tdFornecedor.innerHTML = despesa.fornecedor;
        tdCentroCustos.innerHTML = despesa.centroCustos;
        
        tr.appendChild(tdDescricao);
        tr.appendChild(tdValor);
        tr.appendChild(tdDataPagamento);
        tr.appendChild(tdTipoDespesa);
        tr.appendChild(tdFornecedor);
        tr.appendChild(tdCentroCustos);
        
        table.tBodies[0].appendChild(tr);
    }
}

function saveLocalStorage() {
    var data = JSON.stringify(despesas);
    localStorage.setItem("despesas", data);
}

function loadDataFromLocalStorage() {
    var despesasSaved = localStorage.getItem("despesas");
    if (despesasSaved) {
        despesas = JSON.parse(despesasSaved);
        populateTable();
    }
}
function clearInputs(){
    inputDescricao.value = "";
    inputValor.value = "";
    inputDataPagamento.value = "";
    inputTipoDespesa.value = "";
    inputFornecedor.value = "";
    inputCentroCustos.value = "";
}
