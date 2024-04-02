let loginUserV = document.getElementById('loginUser');
let loginEV = document.getElementById('loginE');
let loginPV = document.getElementById('loginP');
let loginErrorEV = document.getElementById('loginErrorE');
let loginErrorPV = document.getElementById('loginErrorP');
let loginErrorAlreadyV = document.getElementById('loginErrorAlready');

let registerUserV = document.getElementById('registerUser');
let registerEV = document.getElementById('registerE');
let registerPV = document.getElementById('registerP');
let registerErrorEV = document.getElementById('registerErrorE');
let registerErrorPV = document.getElementById('registerErrorP');
let registrationMessageV = document.getElementById('registrationMessage');

let homePage = document.getElementById('userDashboard');
let logUser = document.getElementById('userId');

let logBtn =document.getElementById('loginBtn');
logBtn.addEventListener("click",login);

let regBtn =document.getElementById('registerBtn');
regBtn.addEventListener("click",register);

let logoutBtn =document.getElementById('logoutBtn');
logoutBtn.addEventListener("click",logout);

function showRegisterForm(){
    let showR = document.getElementById('registerUser');
    showR.classList.remove('registerDisplay');
    let hideL = document.getElementById('loginUser');
    hideL.classList.add('registerDisplay');
    registrationMessageV.classList.add('registerDisplay');
}

function showLoginForm(){
    let hideR = document.getElementById('registerUser');
    hideR.classList.add('registerDisplay');
    let showL = document.getElementById('loginUser');
    showL.classList.remove('registerDisplay');
}

function isValidPass(password) {
    return /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(password);
}

function isUserAvailable(username) {
    return !localStorage.getItem(username);
}

function register(){
    let username = registerEV.value;
    let password = registerPV.value;

    let registrationMessageS = registrationMessageV;
    let registerErrorEmail = registerErrorEV;
    let registerErrorPass = registerErrorPV; 

    registrationMessageS.classList.add('registerDisplay');
    registerErrorEmail.textContent = " ";
    registerErrorPass.textContent = " ";

    if (!username) {
        registerErrorEmail.textContent = 'Please enter a username.';
    } else if (!isValidPass(password)) {
        registerErrorPass.textContent = 'Please enter alphanumeric characters.';
    } else if (!isUserAvailable(username)) {
        registerErrorEmail.textContent = 'Username already exists.\n Please choose a different username.';
    } else {
        localStorage.setItem(username, password);
        registrationMessageS.textContent = 'Registration successful!';
        registrationMessageS.classList.remove("registerDisplay");
        registerEV.value = '';
        registerPV.value = '';
    }
}

function login(){
    let username = loginEV.value;
    let password = loginPV.value;

    loginErrorEV.textContent = " ";
    loginErrorPV.textContent = " ";

    if(localStorage.getItem(username)===password){
        loginUserV.classList.add('registerDisplay');
        homePage.classList.remove('registerDisplay');
        logUser.textContent = username;
    }
    else if(!username){
        loginErrorAlreadyV.textContent = " ";
        loginErrorEV.textContent = "Please enter a username.";
    }
    else if(!isValidPass(password)){
        loginErrorPV.textContent = 'Please enter alphanumeric characters.';
        loginErrorAlreadyV.textContent = " ";
    }
    else{
        loginErrorAlreadyV.textContent = "Incorrect Username or Password.";
    }
}

function logout(){
    homePage.classList.add('registerDisplay');
    loginUserV.classList.remove('registerDisplay');
    loginErrorEV.textContent="";
    loginErrorAlreadyV.textContent="";
    loginEV.value ='';
    loginPV.value ='';
}