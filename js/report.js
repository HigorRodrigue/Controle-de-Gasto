// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    const tabela = document.querySelector('table'); // Seleciona a tabela onde os dados serão exibidos

    // Recupera os dados de gastos salvos no LocalStorage
    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];

    // Verifica se há gastos salvos; caso contrário, exibe uma mensagem
    if (gastos.length === 0) {
        const novaLinha = tabela.insertRow(); // Adiciona uma nova linha à tabela
        novaLinha.innerHTML = `<td colspan="3">Nenhum gasto encontrado.</td>`; // Mensagem de aviso
        return;
    }

    // Adiciona cada gasto à tabela
    gastos.forEach((gasto) => {
        const novaLinha = tabela.insertRow();
        novaLinha.innerHTML = `
            <td>${gasto.descricao}</td>
            <td>R$ ${gasto.valor}</td>
            <td>${gasto.data}</td>
        `;
    });
});
