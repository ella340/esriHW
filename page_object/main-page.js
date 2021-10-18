"use strict";
class Main {
get $signInBtn() {return $('[class="esri-header-account-control esri-header-account-control--signin"]');}
get $aboutBtn() {return $('[id="esri-header-menus-link-desktop-0-4"]');}
}

module.exports = new Main();