document.addEventListener('DOMContentLoaded', function(){
    const formularioContato = document.getElementById('contato-form');
    const tabelaContatos = document.getElementById('contatos');

    formularioContato.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;

        if (nome && telefone) {

            const novaLinha = tabelaContatos.insertRow();
            const colunaNome = novaLinha.insertCell(0);
            const colunaTelefone = novaLinha.insertCell(1);

            colunaNome.textContent = nome;
            colunaTelefone.textContent = telefone;

            document.getElementById('nome').value;
            document.getElementById('telefone').value;
        }
    });
});




