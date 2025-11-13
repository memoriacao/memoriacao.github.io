
<script lang="ts" setup>
    import 'primeicons/primeicons.css'
</script>
<template>
    <footer class="footer">
        <nav class="fast-menu">
            <a href="">Início</a>
            <a href="">Memórias</a>
            <a href="">Contatos</a>
            <a href="">Sobre</a>
        </nav>
        <hr class="horizontal-line"/>
        <p class="footer-description">
            Um projeto dedicado a revisitar e celebrar as histórias, trajetórias e narrativas 
            de quem construiu e continua construindoo IFSertãoPE – Campus Salgueiro, conectando 
            passado, presente e futuro.
        </p>
        <nav class="social-media">
            <a href="" target="_blank"><span class="pi pi-facebook"></span></a>
            <a href="https://www.instagram.com/memoriacao/" target="_blank"><span class="pi pi-instagram"></span></a>
            <a href="https://www.youtube.com/@memoriacaoifsertaope" target="_blank"><span class="pi pi-youtube"></span></a>
        </nav>
        <p class="copyright">© 2025 Memoriação. Todos os direitos reservados.</p>
    </footer>
</template>
<style scoped>
    .footer {
        width: 100%;
        background-color: #282C36;
    }
    .fast-menu {
        display: flex;
        justify-content: center;
    }
    .fast-menu a {
        color: #fff; 
        text-decoration: none;
        font: normal 1.2rem/1 'Montserrat', sans-serif;
        margin: 50px 30px 10px 30px;
    }
    .fast-menu a:hover {text-decoration: underline;}
    .horizontal-line {
        width: min(700px,70%);
        margin: 20px auto 10px auto;
        height: 1px;
        color: #282C36;
    }
    .footer-description {
        width: min(900px,80%);
        margin: auto;
        text-align: center;
        font: normal 1.2rem/1.3 'Montserrat', sans-serif;
        color: #fff;
    }
    .social-media {
        display: flex;
        width: min(700px,70%);
        justify-content: center;
        margin: 40px auto;
        color: #282C36;
    }
    .pi {
        margin: 0 20px;
        color: #fff;
        font-size: 2.5rem
    }

    .pi:hover {
        transform: scale(1.2);
        transition: 0.5s;
    }
    .copyright {
        width: 100%;
        text-align: center;
        font: normal 1rem/1.3 'Montserrat', sans-serif;
        padding: 20px 0;
        color: #f4f4f4;
        background-color: #1e2128;
    }
</style>