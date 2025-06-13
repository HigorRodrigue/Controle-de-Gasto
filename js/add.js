// Garante que o código será executado somente após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#gastoForm'); // Seleciona o formulário pelo ID

    if (!form) {
        console.error('Formulário não encontrado!');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        const descricao = this.elements[0].value;
        const valor = this.elements[1].value;
        const data = this.elements[2].value;

        if (!descricao || !valor || !data) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        const novoGasto = { descricao, valor, data };
        const gastos = JSON.parse(localStorage.getItem('gastos')) || [];
        gastos.push(novoGasto);
        localStorage.setItem('gastos', JSON.stringify(gastos));

        alert('Gasto adicionado com sucesso!');
        this.reset();
    });
});
