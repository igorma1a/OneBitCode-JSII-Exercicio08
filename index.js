function Imovel(id, preco, n_quartos, imovel_tipo, imovel_endereco) {
    this.id = id;
    this.preco = preco;
    this.n_quartos = n_quartos;
    this.imovel_tipo = imovel_tipo;
    this.imovel_endereco = imovel_endereco;
}

let imoveis = [];

function adicionarImovel() {
    let id_imovel = prompt("Digite o ID do imóvel:");
    let preco_imovel = prompt("Digite Preço do imóvel:");
    let n_quartos_imovel = prompt("Digite o Número de Quartos do imóvel:");
    let imovel_tipo_imovel = prompt("Digite o Tipo do imóvel (apartamento/casa):");
    let imovel_endereco_imovel = prompt("Digite o Endereço do imóvel:");

    // Cria um novo objeto de imóvel usando a função construtora
    let novoImovel = new Imovel(id_imovel, preco_imovel, n_quartos_imovel, imovel_tipo_imovel, imovel_endereco_imovel);

    // Adiciona o novo objeto ao array de imóveis
    imoveis.push(novoImovel);

    console.log("Imóvel adicionado com sucesso!");
};

// Função para buscar um imóvel pelo ID
function buscarImovel() {
    let id_imovel = prompt("Digite o ID do imóvel que deseja buscar:");
    let imovelEncontrado = imoveis.find(imovel => imovel.id === id_imovel);

    if (imovelEncontrado) {
        alert(`Imóvel encontrado:
ID: ${imovelEncontrado.id}
Preço: ${imovelEncontrado.preco}
Número de Quartos: ${imovelEncontrado.n_quartos}
Tipo: ${imovelEncontrado.imovel_tipo}
Endereço: ${imovelEncontrado.imovel_endereco}`);
    } else {
        alert("Imóvel não encontrado.");
    }
}

// Menu principal para adicionar imóveis
let opcaoMenu;
do {
    opcaoMenu = prompt(
        "Digite 1 para adicionar um imóvel\n" +
        "Digite 2 para procurar um imóvel\n" +
        "Digite 3 para encerrar o programa");

    switch (opcaoMenu) {
        case '1':
            adicionarImovel();
            break;

        case '2':
            buscarImovel();
            break;

        case '3':
            alert("Programa encerrado.");
            break;

        default:
            alert("Opção inválida! Tente novamente.");
            break;
    }
} while (opcaoMenu !== '3');

// Exibe todos os imóveis cadastrados no console
console.log("Imóveis cadastrados:", imoveis);