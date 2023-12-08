
document.querySelector("#btn").addEventListener("click", ()=>{
    fetch("http://localhost:3000/")
        .then((response)=>{
            if(response.ok){
                response.json().then((data)=>{
                    data.map((nome)=>{
                        const div = document.createElement("div");
                        div.innerText = nome
                        document.querySelector("#root").append(div);
                    });
                });
            }
        })
})