var input  = document.querySelector('#campo-mensagem');
var button = document.querySelector('#botao-enviar');
var chat   = document.querySelector('.chat');

console.log(input)
console.log(button)
console.log(chat)

if(input && button && chat){
  button.addEventListener('click', adicionaMensagem);
  document.addEventListener('keydown',function(e){
      if(e.keyCode == 13 && document.activeElement.tagName == 'INPUT'){
          adicionaMensagem();
      }
  });
}

function adicionaMensagem(){
  if(input.value != ''){
      var mensagem = input.value;
      input.value = '';
      var element = document.createElement('div');
      element.classList.add('msg-container');
      element.classList.add('msg-direita');
      element.innerHTML = mensagem;
      chat.appendChild(element);
  }
}