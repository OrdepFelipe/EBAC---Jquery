$(document).ready(function(){
   $('header button').click(function(){
      $('form').slideDown(); // Quando clicado o formulário é renderizado na tela
   });

   $('#btn-cancelar').click(function(){
      $('form').slideUp(); 
   });

   $('form').on('submit', function(e){
      e.preventDefault();
      const tarefaNova = $('#descricao-tarefa').val(); // Capturando o que foi digitado no input

      if(tarefaNova) { // Verifica se a tarefa não está vazia
         const novoItem = $(`<li>${tarefaNova}</li>`); // Criando um elemento dinamicamente
         $(novoItem).appendTo('ul');
         $('#descricao-tarefa').val(''); // Limpa o input após adicionar o item
      }
   });

   $('#lista-tarefas').on('click', 'li', function(c){
      $(c.target).toggleClass('tarefa-concluida'); // Adiciona ou remove a classe dinamicamente
   });
});
