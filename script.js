const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

(function(win,doc){
  'use strict';
  
  doc.querySelector('#Destaque').addEventListener('mouseover',(e)=>{
    let id = e.target.id;
    doc.querySelector('#'+id).style.fill = '#23238E';
  });

  doc.querySelector('#Destaque').addEventListener('mouseout',(e)=>{
    let id = e.target.id;
    doc.querySelector('#'+id).style.fill = '#999999';
  });

  doc.querySelector('#Destaque').addEventListener('click',(e)=>{
    let id = e.target.id;
    win.location.href='http://localhost/teste2/#D'+id;
  });

})(window,document);

const button = document.getElementById("DiaButton")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button");

button.onclick = function() {
  modal.showModal()
};

buttonClose.onclick = function()  {
  modal.close()
};