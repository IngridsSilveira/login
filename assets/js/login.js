class Login {
  static logado = false;
  static matlogado = null;
  static nomelogado = null;
  static acessologado = null;
  static estilocss = null;
  static ok = null;
  static naoOk = null;
  static endpoint = "https://loginv1.cfbcursos.repl.co/";

  static login = (ok, naoOk) => {
    this.ok = () => {ok()};
    this.naoOk = () => {naoOk()};
    this.createElementosCSS = () => {
      this.estilocss = `
            .fundoLogin {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100vh;
                position: absolute;
                left: 0;
                top: 0;
                background: url('assets/img/bg.jpg');
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
            }
            .baseLogin {
                display: flex;
                justify-content: center;
                align-items: center;
                width: inherit;
            }
            .elementosLogin {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                padding: 20px;
                flex-direction: column;
                width: 30%;
                background-color: #eee;
                border-radius: 5px;
            }
            .campoLogin {
                width: 100%;
                padding: 5px;
            }
            label {
                color: #000;
                font-weight: bold;
            }
            input {
                margin-top: 7px;
                margin-bottom: 10px;
                width: 100%;
                height: 30px;
            }
            .logoLogin {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
            }
            .logoLogin img {
                width: 10%;
            }
            .botoesLogin {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .botoesLogin button {
                background-color: #000;
                color: #fff;
                font-weight: bold;
                padding: 10px;
                border-radius: 5px;
                margin: 5px;
            }
            .botoesLogin button:hover {
                background-color: #303030;
                cursor: pointer;
            }
            footer, footer a{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 5px;
                color: #000;
                text-decoration: none;
            }
            @media screen and (max-width: 767px){
              .elementosLogin {
                  width: 50%;
              }
              footer {
                  font-size: .6rem;
              }
          }
          @media screen and (min-width: 768px) and (max-width: 1023px) {
              .elementosLogin {
                  width: 50%;
              }
              footer {
                  font-size: .9rem;
              }
          }`;
      const styleEstilo = document.createElement("style");
      styleEstilo.setAttribute("id", "id_estiloLogin");
      styleEstilo.innerHTML = this.estilocss;
      document.head.appendChild(styleEstilo);
    };
    this.createElementosHTML = () => {
      const fundoLogin = document.createElement("div");
      fundoLogin.setAttribute("id", "fundoLogin");
      fundoLogin.setAttribute("class", "fundoLogin");

      const baseLogin = document.createElement("div");
      baseLogin.setAttribute("id", "baseLogin");
      baseLogin.setAttribute("class", "baseLogin");

      const elementosLogin = document.createElement("div");
      elementosLogin.setAttribute("id", "elementosLogin");
      elementosLogin.setAttribute("class", "elementosLogin");

      const logoLogin = document.createElement("div");
      logoLogin.setAttribute("id", "logoLogin");
      logoLogin.setAttribute("class", "logoLogin");

      const img = document.createElement("img");
      img.src = "assets/img/user.png";

      const campoLogin = document.createElement("div");
      campoLogin.setAttribute("class", "campoLogin");
      const labelUsername = document.createElement("label");
      labelUsername.innerHTML = "Username:";
      const inputUsername = document.createElement("input");
      inputUsername.setAttribute("type", "text");
      inputUsername.setAttribute("id", "f_username");

      const labelPassowrd = document.createElement("label");
      labelPassowrd.innerHTML = "Senha:";
      const inputPassword = document.createElement("input");
      inputPassword.setAttribute("type", "password");
      inputPassword.setAttribute("id", "f_senha");

      const botoesLogin = document.createElement("div");
      botoesLogin.setAttribute("class", "botoesLogin");

      const btn_login = document.createElement("button");
      btn_login.setAttribute("id", "btn_login");
      btn_login.innerHTML = "Login";
      btn_login.addEventListener("click", (evt) => {
        this.verificaLogin();
      });

      const btn_cancelar = document.createElement("button");
      btn_cancelar.setAttribute("id", "btn_cancelar");
      btn_cancelar.innerHTML = "Cancelar";
      btn_cancelar.addEventListener("click", (evt) => {
        this.fechar();
      });

      const footer = document.createElement("footer");
      const a = document.createElement("a");
      a.innerHTML = "Desenvolvido por Ingrid de Souza";
      a.setAttribute("href", "https://ingriddev.netlify.app/");

      logoLogin.appendChild(img);
      elementosLogin.append(logoLogin, campoLogin, botoesLogin, footer);
      campoLogin.append(
        labelUsername,
        inputUsername,
        labelPassowrd,
        inputPassword
      );
      footer.appendChild(a);
      botoesLogin.append(btn_login, btn_cancelar);
      baseLogin.appendChild(elementosLogin);
      fundoLogin.appendChild(baseLogin);
      document.body.appendChild(fundoLogin);
    };
  };
  static verificaLogin = () => {
    const mat = document.querySelector("#f_username").value;
    const pas = document.querySelector("#f_senha").value;

    const endpoint = `https://loginv1.cfbcursos.repl.co/?matricula=${mat}&senha=${pas}`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          this.logado = true;
          this.matlogado = mat;
          this.nomelogado = res.nome;
          this.acessologado = res.acesso;
          this.ok();
          this.fechar();
        } else {
          this.logado = false;
          this.matlogado = null;
          this.nomelogado = null;
          this.acessologado = null;
          this.naoOk();
        }
      });
  };
  static fechar = () => {
    const fundoLogin = document.querySelector("#fundoLogin");
    fundoLogin.remove();
    const id_estiloLogin = document.querySelector("#id_estiloLogin");
    id_estiloLogin.remove();
  };
}
export { Login };
