
    //pegando o botão
    let botao: HTMLButtonElement | null = document.querySelector("#addtime");
    let modal: HTMLDialogElement | null = document.querySelector("dialog")

    if(botao){

        botao.addEventListener("click", function(){ 
            
            if(modal) modal.showModal()

        });
    }

    let file = document.querySelector("#pfp");
    if(file){}
    


