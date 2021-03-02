<!doctype html>
<html lang="en_US">
<?php
/* Main page with two forms: sign up and log in */
require 'admin/db.php';
require 'head.php';
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
?>
<body>
<div id="page" class="ui stackable grid">
    <div class="sixteen wide column"></div>
    <div class="ui two wide column">
        <img class="ui medium centered image" src="img/thenewjourney.png">
    </div>
    <div class="ui fourteen wide column">
        <h1 class="ui title">Ligma | CS:GO Hack | Public Release</h1>
        <h3 class="ui description">Discrete, Powerful, Affordable</h3>
    </div>
    <div class="sixteen wide column">
        <?php require 'menu.php';?>
    </div>
</div>
<footer>&copy; P.o.P Industries 2019</footer>
</body>
</html>