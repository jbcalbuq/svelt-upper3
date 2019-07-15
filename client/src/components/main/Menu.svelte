<script>

import Icons from "../utils/Icons.svelte";
import MAccordion from "./MenuAccordion.svelte";

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }


  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  let menu = {
    folders: [
      {
        title: "Cadastro",
        icon: "cadastro",
        items: [
          { title: "Empresa", icon: "box", action: "/empresa" },
          { title: "Usuários", icon: "user", action: "/about" },
          { title: "Produtos", icon: "box", action: "/produtos" },
          { title: "Insumos", icon: "coffee", action: "/insumos" },
          { title: "Ficha Técnica", icon: "file-text", action: "Empresa" },
          { title: "Ficha de Produção", icon: "film", action: "Empresa" },
          { title: "Cardápio", icon: "layers", action: "Empresa" }
        ]
      },
      {
        title: "Tabelas",
        icon: "tabelas",
        items: [
          { title: "Unidades", icon: "film", action: "Empresa" },
          { title: "Estados", icon: "film", action: "Empresa" },
          { title: "Países", icon: "film", action: "Empresa" }
        ]
      },
      {
        title: "Sair",
        icon: "Sair",
        items: [
          { title: "Log out", icon: "film", action: "Empresa" },
          { title: "Mensagens", icon: "film", action: "Empresa" }
        ]
      }
    ]
  };
</script>

<style>
  /* The side navigation menu */
  .sidenav {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0;
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 40px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  }

  /* The navigation menu links */
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 14px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  /* When you mouse over the navigation links, change their color */
  .sidenav a:hover {
    color: #f1f1f1;
  }

  /* Position and style the close button (top right corner) */
  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 0px;
    font-size: 16px;
    margin-left: 50px;
    margin-bottom: 15px;
  }

  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
  #main {
    transition: margin-left 0.5s;
    padding: 10px;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .navbar {
    font-size: 18px;
    background-image: linear-gradient(260deg, #2f2f30 0%, #2c2b2c 100%);
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .main-nav {
    list-style-type: none;
    display: none;
  }

  .nav-links,
  .logo {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
  }

  .main-nav li {
    text-align: center;
    margin: 15px auto;
  }

  .logo {
    display: inline-block;
    font-size: 22px;
    margin-top: auto;
    margin-left: 8px;
  }

  .navbar-toggle {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    font-size: 24px;
  }

  .active {
    display: block;
  }

  @media screen and (min-width: 768px) {
    .navbar {
      display: flex;
      justify-content: space-between;
      height: 40px;
      align-items: center;
    }

    .main-nav {
      display: flex;
      margin-right: 30px;
      flex-direction: row;
      justify-content: flex-end;
    }

    .main-nav li {
      margin: 0;
    }

    .nav-links {
      margin-left: 40px;
    }

    .logo {
      margin-top: 0;
    }

    .navbar-toggle {
      display: none;
    }

    .logo:hover,
    .nav-links:hover {
      color: rgba(255, 255, 255, 1);
    }
  }

 /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 360px) {
    .sidenav {
      padding-top: 10px;
    }
    .sidenav a {
      font-size: 12px;
    }
 .navbar {
      display: flex;
      justify-content: space-between;
      padding-bottom: 0;
      height: 30px;
      align-items: center;
      width: 100%;
    }    
   
  }     

  .left-bar {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .logo-text {
    white-space: nowrap;
  }
</style>

<div id="mySidenav" class="sidenav">
  <nav class="navbar left-bar">
    <span class="logo">
      <b class="logo-text">Upper Chef</b>
    </span>
    <a href="javascript:void(0)" class="nav-links" on:click={closeNav}>
      <Icons iclass="feather-24" data="x" />
    </a>
  </nav>
  <MAccordion menu={menu} />
</div>

<!-- Use any element to open the sidenav -->
<nav class="navbar">
  <span class="navbar-toggle" id="js-navbar-toggle">
    <i class="fas fa-bars" />
  </span>
  <span class="logo" on:click={openNav}>
    <Icons iclass="feather-32" data="menu" />
  </span>
  <ul class="main-nav" id="js-menu">
    <li>
      <a href="/" class="nav-links">Ínicio</a>
    </li>
    <li>
      <a href="/" class="nav-links">Vídeos</a>
    </li>
    <li>
      <a href="/" class="nav-links">Sobre nós</a>
    </li>
    <li>
      <a href="/" class="nav-links">Contatar</a>
    </li>
    <li>
      <a href="/" class="nav-links">Blog</a>
    </li>
  </ul>
</nav>

