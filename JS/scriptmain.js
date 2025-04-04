
// Dados dos posts (normalmente viriam de uma API ou de um arquivo JSON)
const posts = [
    {
        titulo: "Meu Primeiro Post",
        conteudo: "Este é o conteúdo do meu primeiro post no blog.",
        data: "04/04/2025"
    },
    {
        titulo: "Dicas de Programação",
        conteudo: "Aqui estão algumas dicas de programação para iniciantes...",
        data: "03/04/2025"
    }
];

// Função para carregar os posts na página
function carregarPosts() {
    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${post.titulo}</h3>
            <p><em>Publicado em: ${post.data}</em></p>
            <p>${post.conteudo}</p>
        `;
        postsContainer.appendChild(postDiv);
    });
}

// Função para adicionar comentários
function adicionarComentario(event) {
    event.preventDefault();
    const comentarioInput = document.getElementById('comentario');
    const comentarioTexto = comentarioInput.value;

    if (comentarioTexto) {
        const comentarioDiv = document.createElement('div');
        comentarioDiv.classList.add('comentario');
        comentarioDiv.innerHTML = `<p>${comentarioTexto}</p>`;
        document.getElementById('lista-comentarios').appendChild(comentarioDiv);
        comentarioInput.value = ''; // Limpa o campo de comentário
    }
}

// Inicializar o blog
document.addEventListener('DOMContentLoaded', () => {
    carregarPosts();

    // Adiciona evento ao formulário de comentários
    const formComentario = document.getElementById('form-comentario');
    formComentario.addEventListener('submit', adicionarComentario);
});

