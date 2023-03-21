let user = [
    // {
    //     name: "admin",
    //     password: "admin"
    // },
    {
        name: "a1@hotmail.com",
        password: "12345"
    },//0
    {
        name: "a2@hotmail.com",
        password: "12345"
    },//1
    {
        name: "a3@hotmail.com",
        password: "12345"
    },//3
    {
        name: "a4@hotmail.com",
        password: "12345"
    },//4
    {
        name: "a5@hotmail.com",
        password: "12345"
    },//5
    {
        name: "a6@hotmail.com",
        password: "12345"
    },//...
    {
        name: "a7@hotmail.com",
        password: "12345"
    },
    {
        name: "a8@hotmail.com",
        password: "12345"
    },
    {
        name: "a9@hotmail.com",
        password: "12345"
    },
    {
        name: "a10@hotmail.com",
        password: "12345"
    },
    {
        name: "a11@hotmail.com",
        password: "12345"
    },
    {
        name: "a12@hotmail.com",
        password: "12345"
    },
    {
        name: "a13@hotmail.com",
        password: "12345"
    },
    {
        name: "a14@hotmail.com",
        password: "12345"
    },
    {
        name: "a15@hotmail.com",
        password: "12345"
    },//14
    {
        name: "admin@hotmail.com",
        password: "admin"
    }

] // let user se chama 'a'
// Array 'user' definido como Global, para poder ser acessado por outras Functions

let nome2 = localStorage.getItem('usuarioativo')


if (nome2 != undefined) {


    let acesso = document.querySelector('h2#acesso')
    acesso.innerHTML += `${nome2}`

    // window.addEventListener('beforeunload', function () {
    //     this.localStorage.removeItem('usuarioativo')
    // })

    let constjs = localStorage.getItem("consjs")

    if (constjs == 1) {
        localStorage.setItem("consjs", 2)

    }

    else {
        window.location.href = "./index.html"
        localStorage.removeItem('usuarioativo')

    }

    function apagar() {
        let lista = document.querySelector('div.cadastros')

        lista.innerHTML = ""



    }
    //Fim de 'function apagar ()'

    function listar() {
        // apagar()

        let divcadastro = document.querySelector('div.cadastros');
        divcadastro.innerHTML = ""
        divcadastro.innerHTML = "<h2>Lista de Usuários</h2>"
        // let divsenhas = document.querySelector('div.senhas')
        for (let a = 0; a < user.length; a++) {

            let cadastros = document.createElement('p');
            // let senhas = document.createElement('p')
            cadastros.innerHTML += `<br> ${user[a].name}`
            // senhas.innerHTML += `<br> ${user[a].password}`
            divcadastro.appendChild(cadastros)
            // divsenhas.appendChild(senhas)
        }
    }


    function voltar() {
        localStorage.removeItem('usuarioativo')
        window.location.href = "./index.html"
    } // Retorna a página de login e apaga o Armazenamento Local

    //Fechar a página apaga o Armazenamento Local


    function deletar() {
        let lista = document.querySelector('div.cadastros')

        apagar()
        lista.innerHTML += "<h2>Deletar Usuário <br> <br></h2>"
        for (let a = 0; a < user.length; a++) {
            lista.innerHTML += `<div><input type="checkbox" id="${a}"><label> -${user[a].name}</label></div>`
        }
        lista.innerHTML += `<input type="button" value="Delete" class="botao" id="deletarusuarios2" >`

        const inputdeletar2 = document.querySelector("#deletarusuarios2")
        inputdeletar2.addEventListener("click", deletausuario2)
    }

    function deletausuario2() {

        let userdeletado = [""]

        for (let a = 0; a < user.length; a++) {
            let checkbox = document.getElementById(`${a}`)

            if (checkbox.checked == true) {
                userdeletado[a] = 1

            }
            else {
                userdeletado[a] = 0
            }

        }
        for (let a = userdeletado.length - 1; a >= 0; a--) {
            if (userdeletado[a] == 1) {
                user.splice(a, 1)
            }
        }
        listar();
    }


    let registrar1 = document.querySelector("#registrar1")
    registrar1.addEventListener("click", registrar)

    function registrar() {
        let lista = document.querySelector('div.cadastros');
        // let register = document.querySelector('h2.tituloh2')


        // register.innerHTML = "<p>Registrar Usuário</p>"
        lista.innerHTML = `<h2 class="title" id="tituloh2">Registrar Usuário</h2><br><br>`
        lista.innerHTML += `<form class="centralizar">
        <label for="inputuser">Username: </label>
        <input type="text" class="inputuser">
        <label for="inputpassword">Password: </label>
        <input type="password" class="inputpassword"><br></br>
        <input type="button" value="Register" class="botao"
        id="adduser2">
        </form>`

        const inputregistrar = document.querySelector("#adduser2")
        inputregistrar.addEventListener("click", adduser2)

    }

    function adduser2() {
        let newuser =
        {
            name: document.querySelector('input.inputuser').value,
            password: document.querySelector('input.inputpassword').value
        }
        let repeat = 0
        for (let a = 0; a < user.length; a++) {
            if (user[a].name == newuser.name) {
                repeat = 1
            }
        }
        if (repeat == 0) {
            user.push(newuser)
            listar()
        }
        else {
            registrar()
        }
    }

    let renew2 = document.querySelector("#renew")
    renew2.addEventListener("click", renew)

    function renew() {
        let lista = document.querySelector('div.cadastros')
        lista.innerHTML = ""
        lista.innerHTML = `<h2 class="title" id="tituloh2">Atualizar Usuário</h2><br><br>`
        lista.innerHTML +=
            `<form class="centralizar">
        <label>Username: </label>
        <input type="text" class="inputuser">
        <label>Password: </label>
        <input type="password" class="inputpassword"><br>
        <label>New Username:</label>
        <input type="text" class="inputuser1">
        <label>New Password:</label>
        <input type="password" class="inputpassword1" required>
        <label>Confirm Password:</label>
        <input type="password" class="inputpassword2" required><br>
        <input type="button" value="Save Changes" id="pass">
        </form>`

        const changepass = document.querySelector("#pass")
        changepass.addEventListener("click", renewuser)


    }


    function renewuser() {
        let name = document.querySelector('input.inputuser').value
        let name1 = document.querySelector('input.inputuser1').value
        let password = document.querySelector('input.inputpassword').value
        let password1 = document.querySelector('input.inputpassword1').value
        let password2 = document.querySelector('input.inputpassword2').value

        let erropassword = 1
        let errouser = 0
        let indice = 0

        for (let a = 0; a < user.length; a++) {
            if (user[a].name == name1) {
                if (user[a].name != name) {
                    errouser = 1
                }
            }
        }
        if (errouser == 0) {
            errouser = 1
            for (let a = 0; a < user.length; a++) {
                if (user[a].name == name) {
                    errouser = 0
                    if ((user[a].password == password) && (password1 == password2) && (password1 != "") && (password2 != "")) {
                        erropassword = 0
                        indice = a
                    }
                }

            }
        }


        if (errouser == 0) {
            if (erropassword == 0) {
                let lista = document.querySelector('div.cadastros')
                lista.innerHTML = ""
                user[indice].name = name1
                user[indice].password = password1
                alert("Dados atualizados com sucesso")
                atualizar()
                window.console(user)
            }
            else {
                alert("Login inválido, verifique os dados...")
                atualizar()
            }
        }
        else {
            alert("Login inválido, verifique os dados...")
            atualizar()
        }
    }


    const inputtestar = document.querySelector("#atualizar")
    atualizar.addEventListener("click", testaruserpass1)

    function testaruserpass1() {
        let lista = document.querySelector('div.cadastros')
        lista.innerHTML = ""
        lista.innerHTML += `<h2 class="title" id="tituloh2">Teste Usuário</h2><br></br>`
        lista.innerHTML += `<form class=centralizar>
        <label> Username:</label>
        <input type="text" class="inputuser">
        <label> Password:</label>
        <input type="password" class="inputsenha"><br><br>
        <input type="button" value="Login" class="botao" id="testaruserpass2">
        </form>
        `
        const inputtestar2 = document.querySelector("#testaruserpass2")
        inputtestar2.addEventListener("click", testaruserpass2)
    }

    function testaruserpass2() {
        let dados = {
            name: document.querySelector('input.inputuser').value,
            password: document.querySelector('input.inputsenha').value

        }
        let erro = 1

        for (let a = 0; a < user.length; a++) {
            if (user[a].name == dados.name && user[a].password == dados.password) {
                erro = 0
                a = user.length
            }
        }
        if (erro == 0) {
            (alert("Usuário está cadastrado no Sistema!"))
            testaruserpass1()
        }
        else{
            (alert("Usuário não encontrado, verifique as informações inseridas."))
        }

    }







}
else {

    localStorage.setItem("consjs", 1)
    // COLOCAR DENTRO DA FUNCTION!!!!
    function logon() {

        let username = document.querySelector('input#usuario').value
        let senha = document.querySelector('input#password').value
        let userfalso = 1

        for (let a = 0; a < user.length; a++) {
            if (username == user[a].name && senha == user[a].password) {

                window.location.href = "./homepage.html"
                localStorage.setItem('usuarioativo', user[a].name)
                userfalso = 0
                a = user.length


            }
        }


        if (userfalso == 1) {
            // a = user.length
            alert(`Usúario ou senha incorretos`)
            // usuario.value = ""
            // password.value = ""
        } //Emite um alerta caso senha ou usuários estejam incorretos


    }
    //Fim de 'function logon ()'
}



