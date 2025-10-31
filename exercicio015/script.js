let contatos = [];

function fnSalvar() {
    nome = document.getElementById('nome').value.trim();
    telefone = document.getElementById('telefone').value.trim();
    email = document.getElementById('email').value.trim();
    foto = document.getElementById('foto').value.trim();

    if (!nome || !telefone || !email) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    contatos.push({ nome, telefone, email, foto });
    limparFormulario();
    fnListar();
}

function fnListar() {
    const lista = document.getElementById('listaDeContatos');
    lista.innerHTML = ''; // limpa o conteúdo antes de atualizar

    contatos.forEach((c, i) => {
        // cria o card do contato
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';

        const cardInner = document.createElement('div');
        cardInner.className = 'card shadow-sm';

        const img = document.createElement('img');
        img.src = c.foto || 'https://via.placeholder.com/150';
        img.className = 'card-img-top';
        img.style.height = '200px';
        img.style.objectFit = 'cover';

        const body = document.createElement('div');
        body.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = c.nome;

        const text = document.createElement('p');
        text.className = 'card-text';
        text.innerHTML = `<strong>Telefone:</strong> ${c.telefone}<br><strong>Email:</strong> ${c.email}`;

        const btn = document.createElement('button');
        btn.className = 'btn btn-danger btn-sm';
        btn.textContent = 'Excluir';
        btn.onclick = () => fnExcluir(i);

        body.appendChild(title);
        body.appendChild(text);
        body.appendChild(btn);
        cardInner.appendChild(img);
        cardInner.appendChild(body);
        card.appendChild(cardInner);
        lista.appendChild(card);
    });
}

function fnExcluir(index) {
    contatos.splice(index, 1);
    fnListar();
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('foto').value = '';
}

document.getElementById('btSalvar').addEventListener('click', (event) => {
    event.preventDefault();
    fnSalvar();
});
