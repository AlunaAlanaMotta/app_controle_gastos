const matrizGastos = [
    ['Alimentação', 0],
    ['Transporte', 0],
    ['Lazer', 0],
    ['outros', 0],
    ['Total', 0]
];

const obterElemento = (id) => document.getElementById(id);
const obterValor = () => parseFloat(obterElemento('valor').value);
const obterCategoriaInformada = () => obterElemento('categoria').value;
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);
const atualizarValorCategoria = (categoria, valor) => categoria[1] = somaTotal(categoria[1], valor);
const valorNegativo = (valor) => valor < 0;
const somaTotal = (total, valor) => total + valor;
const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',');

const atualizarInterface = () => {
    matrizGastos.forEach(([nome, valor]) => {
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome} R$ ${formataMoeda(valor)}`;
    });
};

const limparCampos = () => {
    const elemento = obterElemento('valor');
    elemento.value = '';
};

function adicionarGastos() {
    const valorInformado = obterValor();
    const categoriaInformada = obterCategoriaInformada();

    if (valorNegativo(valorInformado)) {
        alert('Digite um valor válido!');
        return;
    }

    const categoria = obterCategoria(matrizGastos, categoriaInformada);
    const total = obterCategoria(matrizGastos, 'Total');

    if (!categoria) {
        alert('Categoria não encontrada!');
        return;
    }

    atualizarValorCategoria(categoria, valorInformado);
    atualizarValorCategoria(total, valorInformado);
    atualizarInterface();
    limparCampos();
}