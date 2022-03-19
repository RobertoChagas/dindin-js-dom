//1 - O header deve ter cor de fundo #2E948A

let header = document.getElementsByTagName('header');
//console.log(header[0]); esse é para testar se está pegando
//document.getElementsByTagName('header').style.backgroundColor = '#2E948A'
header[0].style.backgroundColor = '#2E948A'


//2 - No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html

let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
//console.log(linkCursos);
linkCursos.setAttribute('href', 'cursos.html');

//HOME

//1. No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.



//2 - Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
let depoimentos = document.querySelector('.titulo.depoimento h3')
//console.log(depoimentos);
depoimentos.innerHTML = 'O que falam sobre nós';

//3. Na etapa de blog, o título deveria ser "Mais conteúdo pra você".

let blog = document.querySelectorAll('.titulo h3')[1].innerHTML = "Mais conteúdo pra você"; 

// 4. Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.
const maiuscula = document.querySelectorAll('.titulo'); 
for (let i = 0; i < maiuscula.length; i++) { 
    maiuscula[i].style.textTransform = 'uppercase';
 } 

 // 5. o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
 let linkPosts = document.querySelector('#todos_posts');
 //console.log(linkPosts);
 linkPosts.setAttribute('href', 'blog.html');

 // 6. Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:

 let novoCurso = document.querySelector('#investimentos_poupando_independencia');
 