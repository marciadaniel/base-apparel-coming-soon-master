// Adicionando o ouvinte de eventos ao botão
document.getElementById("submit").addEventListener("click", handleClick);

// Função para lidar com o clique no botão
function handleClick() {
    
    var email = document.getElementById("email").value;
  
    if (validarEmail(email)) {
        document.getElementById("icon-error").style.visibility = "hidden";
       document.getElementById("response").style.visibility = "hidden";
       
    } else {
        
        document.getElementById("email").style.border = "2px solid red"; // Muda a cor da borda para vermelho se o email for inválido
        document.getElementById("icon-error").style.visibility = "visible";
        document.getElementById("response").style.visibility = "visible"; // Mostra o parágrafo se o email for inválido
        
    }

}

// Função para validar o email
function validarEmail(email) {
    var padrao = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return padrao.test(email);
}

