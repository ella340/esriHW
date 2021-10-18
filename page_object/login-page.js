"use strict";
class Login {
    get $usernameTxt() {return $('[id="user_username"]');}
    get $passwordTxt() {return $('[id="user_password"]');}
    get $signInBtn() {return $('[id="signIn"]');}
    get $invalidUsernamePasswordError() {return $('[id="errMessage"]');}
}

module.exports = new Login();