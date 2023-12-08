"use strict";
//pegando o botão
let botao = document.querySelector("#addtime");
let modal = document.querySelector("dialog");
if (botao) {
    botao.addEventListener("click", function () {
        if (modal)
            modal.showModal();
    });
}
