
//GERADOR DE SENHAS
const request = require("request");

function random(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function strong() {
    var string = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZabcdefgijklmnopqrstuvwxyz`~!@#$%^&*()_+=";
    var ranInt = random(0,string.length - 1);
    return string[ranInt];
}

function memorable() {
    var string = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZabcdefgijklmnopqrstuvwxyz";
    var ranInt = random(0,string.length - 1);
    return string[ranInt];
}

function strongPass(x){
    var ranPass = "";
    if(x != null){
        for(var i=0; i < x.length; i++){
            var rx = x[i];
            ranPass += rx == "x" ? strong() : rx;
        }
    }
    return ranPass;
}

function memorablePass(x){
    var ranPass = "";
    if(x != null){
        for(var i=0; i < x.length; i++){
            var rx = x[i];
            ranPass += rx == "x" ? memorable() : rx;
        }
    }
    return ranPass;
}

function genPassword() {
    return new Promise((resolve, reject) => {
        const low = memorablePass("xxxxxxxx")
        const medium = memorablePass("xxxxxxxxxxxx")
        const strong = strongPass("xxxxxxxxxxxxxxxx")
        const verStrong = strongPass("xxxxxxxxxxxxxxxxxxxxxxxx")
        const res = {
            Fácil: low,
            Médio: medium,
            Dificil: strong,
            MuitoDificil: verStrong
        }
        resolve(res)
    })
}

module.exports = {
  genPassword,
  
};