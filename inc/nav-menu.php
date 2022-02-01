<nav class="nav-menu">
    <div id="flex-logo">
        <img id="logo-home" src="assets/imagens/logo/logo.png" alt="">
    </div>
    <ul>
        <li class="nav-menu-item"><a href="<?= $url ?>">Inicio</a></li>
        <li class="nav-menu-item hover-list">
            <a href="#" id="produtos">Produtos</a>
            <?php include("sub-menu.php") ?>
        </li>
        <li class="nav-menu-item"><a href="#">Sobre Nós</a></li>
        <li>
            <button id="lp-button">
                Gostaria de Anunciar?
            </button>
        </li>
    </ul>
</nav>