// import { Login } from "./login.js";
// import { Cxmsg } from "../../../caixaMsg/caixa.js";

const ok = () => {}

const naoOk = () => {
    const config = {
        cor: "#f00",
        tipo: "ok",
        textos: null,
        comando: null,
    }
    Cxmsg.mostrar(config, 'Login', 'Login não efetuado, usuário ou senha incorretos.')
}

const configEnd = {
    endpoint: "https://loginv1.cfbcursos.repl.co"
}

Login.login(ok, naoOk, configEnd);
