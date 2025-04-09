function setMunicipioColor(nomeMunicipio){
	const xlinkNS = 'http://www.w3.org/1999/xlink';
	const anchors = document.getElementsByTagName('a');

	for(let anchor of anchors) {
	  if(anchor.getAttributeNS(xlinkNS, 'title') === nomeMunicipio) {
	    const path = anchor.querySelector('path');
	    path.style.fill = '#00394f'; 

	    anchor.addEventListener('mouseover', () => {
                path.style.fill = '#006687'; // Cor altera no hover
            });

            // Efeito hover (mouse sai)
            anchor.addEventListener('mouseout', () => {
                path.style.fill = '#00394f'; // Volta para a cor original
            });
	    break;
	  }
	}
}


// Hamburger Menu (correto)
const hamBurger = document.querySelector(".toggle-btn");
hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

// Correção para eventos no #Destaque
(function(win, doc) {
  'use strict';
  
  const destaque = doc.querySelector('#Destaque');

  // Verifica se o elemento alvo é válido
  function handleHover(e, color) {
    const target = e.target.closest('[id]'); // Encontra o ancestral mais próximo com ID
    if (target && target !== destaque) { // Evita aplicar ao próprio #Destaque
      target.style.fill = color;
    }
  }

  destaque.addEventListener('mouseover', (e) => {
    handleHover(e, '#23238E');
  });

  destaque.addEventListener('mouseout', (e) => {
    handleHover(e, '#999999');
  });

  destaque.addEventListener('click', (e) => {
    const target = e.target.closest('[id]');
    if (target && target !== destaque) {
      win.location.href = `http://localhost/teste2/#D${target.id}`;
    }
  });

})(window, document);

// Modal (correto, mas melhorado para seleção segura)
const button = document.getElementById("DiaButton");
const modal = document.querySelector("dialog");
const buttonClose = modal.querySelector("button"); // Seleção dentro do modal

button.onclick = () => modal.showModal();
buttonClose.onclick = () => modal.close();