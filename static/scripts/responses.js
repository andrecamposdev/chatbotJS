function getBotResponse(input) {    
    input = input.toLowerCase(); // let input be case insensitive
    input = input.replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, ''); //remove everything that is not a letter or a number
    
    // Jokenpo
    if (input == "pedra") {
        return "papel";
    } else if (input == "papel") {
        return "tesoura";
    } else if (input == "tesoura") {
        return "pedra";
    }

    // Simple responses
    if (input == "ola") {
        return "Olá!";
    } else if (input == "tchau") {
        return "Tchau, tenha um bom dia!";
    } else if(input == "bom dia"){
        return "Bom dia!";
    } else if(input == "heart"){
        return "Por nada!";
    } else if(input == "devo contratar o andre"){
        return "Com certeza! Ele é muito criativo, engajado e competente.";
    }
    else {
        return "Desculpe, não entendi, tente falar de outra maneira.";
    }
}