
<script setup lang="ts">
    const show_menu = (): void => {
        const menu = document.querySelector('.navbar-2box') as HTMLElement | null;
        if (!menu) return; // segurança: caso o elemento não exista
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    };

</script>
<template>
    <header class="navbar">
        <a href="" ><img class="logo-image" src="@/icons/logo_memoriacao.png" alt="Logo do memoriaçao"/></a>
        <div class="navbar-2box">
            <a class="nav-open-menu-bnt">Início</a>
            <a class="nav-open-menu-bnt">Memórias</a>

            <div class="nav-link">
                <a class="nav-open-menu-bnt">Depoimentos +</a>
                <div class="drop-options">
                    <a class="drop-link">Alunos</a>
                    <a class="drop-link">Servidores</a>
                    <a class="drop-link">Terceirizados</a>
                </div>
            </div>

            <div class="nav-link">
                <a class="nav-open-menu-bnt">Repositório +</a>
                <div class="drop-options">
                    <a class="drop-link">Artigos acadêmicos</a>
                    <a class="drop-link">Áudio</a>
                    <a class="drop-link">Livros</a>
                    <a class="drop-link">Aplicativos</a>
                    <a class="drop-link">Galeria de Fotos</a>
                    <a class="drop-link">Vídeos</a>
                </div>
            </div>
            
            <a class="nav-open-menu-bnt" href="https://tour.meupasseiovirtual.com/view/ZOlUYQYSJY2" target="_blank">Passeio virtual</a>
            <div class="nav-link">
                <a class="nav-open-menu-bnt">Projetos +</a>
                <div class="drop-options">
                    <a class="drop-link">Ensino</a>
                    <a class="drop-link">Extensão</a>
                    <a class="drop-link">Inovação</a>
                    <a class="drop-link">Pesquisa</a>
                </div>
            </div>
            <div class="nav-link">
                <a class="nav-open-menu-bnt">Sobre Nós +</a>
                <div class="drop-options">
                    <a class="drop-link">Contatos</a>
                    <a class="drop-link">Equipe</a>
                    <a class="drop-link">Projeto</a>
                </div>
            </div>
        </div>
        <img class="menu-icone" src="@/icons/menu_icone.svg" @click="show_menu"/>
    </header>
</template>

<style scoped>
    .navbar {
        width: 100%;
        display: flex;
        flex: 1;
        border: 1px solid red;
        justify-content: space-between;
        align-items: center;
        background-color: #C62A2A;
        color: #fff;
        padding: 4px 10px;
        flex-wrap: wrap;
        font: normal 1.1rem/1 'Montserrat', sans-serif;
        user-select: none;
    }
    .navbar-2box {
        display: flex;
        padding: 0 20px;
    }

    .logo-image { width: 210px;}
    .drop-options { 
        display: none;
        flex-direction: column;
        position: absolute;
        background-color: #881513;
        padding: 10px 0;
        border-bottom: 5px solid red;
    }
    .drop-options:hover{display: flex;}
    .nav-open-menu-bnt {
        color: #fff;
        text-decoration: none;
    }
    .nav-open-menu-bnt:hover ~ .drop-options { display: flex;}
    .nav-open-menu-bnt {
        padding: 0 10px;
        cursor: pointer;
    }.nav-open-menu-bnt:hover{text-decoration: underline;}

    .drop-link {
        display: block;
        width: 100%;
        padding: 5px 20px;
    }
    .drop-link:hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }

    .menu-icone {
        width: 35px;
        display: none;
        cursor: pointer;
    }

    @media (max-width:930px) {
        .navbar-2box {
            width: 100%;
            padding: 10px 0;
            border-top: 1px solid #500c0b;
        }
        .logo-image { width: 170px;}
    }
    @media (max-width:681px) {
        .navbar-2box  {
            flex-direction: column;
            position: absolute;
            right: 10px;
            width: 290px;
            top: 45px;
            padding-left: 10px;
            background-color: #881513;
            border-bottom: 7px solid red;
            border-radius: 10px;
            box-shadow: 1px 2px 3px #818181;
            display: none;
        }

        .menu-icone {display: block;}
        .drop-options { 
            position: inherit;;
            display: none;
            overflow: hidden;
            border: none;
            padding: 0px;
            background-color: #500c0b;
            width: 95%;
            margin: auto auto;
            border-radius: 10px;
            margin-top: 1px;
        }
        .drop-options:hover{display: block; }
        .nav-open-menu-bnt:hover ~ .drop-options { 
            display: block;
        }
        .nav-open-menu-bnt {
            display: block;
            padding: 5px 10px;
        }
        .nav-link {padding: 4px 0;}
        .drop-link {
            display: block;
            width: 100%;
            padding: 10px;
        }
        .logo-image { width: 190px;}
    }
</style>