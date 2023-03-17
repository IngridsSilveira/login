import { Login } from "./login.js";
// import { Cxmsg } from "../../../caixaMsg/caixa.js";

const ok = () => {}

const naoOk = () => {
    const config = {
        cor: "#f00",
        tipo: "ok",
        textos: null,
        comando: null,
    }
    Cxmsg.mostrar(config, 'Login', 'Login não efetuado')
}

Login.login(ok, naoOk);
