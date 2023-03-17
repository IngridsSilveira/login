import {Cxmsg} from "./caixa.js"

const config = {
    cor: "#48f",
    tipo: "ok",
    textos: ["SIM", "NÃO"], 
    comando: () => {}
}

const fsim = () => {
    console.log("SIM/OK Pressionado")
}

const btn_exibir = document.getElementById("btn_exibir")
const btn_exibir2 = document.getElementById("btn_exibir2")

btn_exibir.addEventListener("click", () => {
    config.tipo = "sn"
    config.textos = ["OK", "CANCELA"]
    config.comando = () => {fsim()}
    Cxmsg.mostrar(config, "Teste", "Testando......")
})

btn_exibir2.addEventListener("click", () => {
    config.tipo = "sn"
    config.textos = ["SIM", "NÃO"]
    config.comando = () => {fsim()}
    Cxmsg.mostrar(config, "Teste 2", "Testando 2 ......")
})