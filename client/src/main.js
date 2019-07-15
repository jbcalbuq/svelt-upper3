import App from './App.svelte';
import {Router} from 'svelte-easyroute-rollup'
import Not404 from './pages/404.svelte'
import Home from './pages/home.svelte'
import About from './pages/about.svelte'
import Empresa from './pages/empresa.svelte'
import Produtos from './pages/produtos.svelte'
import Insumos from './pages/insumos.svelte'

export var router = new Router({
    base: "", // NOT required
	mode: "hash", // "hash" or "history"
	routes: [
		{
			path: '/',
			component: Home,
			name: 'Home'
		},
		{
			path: '/about',
			component: About,
			name: 'About me'
		},
		{
			path: '/empresa',
			component: Empresa,
			name: 'Empresa'
		},
		{
			path: '/produtos',
			component: Produtos,
			name: 'Produtos'
		},
		{
			path: '/insumos',
			component: Insumos,
			name: 'Insumos'
		},

      ]
});

router.beforeEach = (to,from,next) => {
	console.log('BeforeEachHook::TO')
	console.log(to)
	console.log('\nBeforeEachHook::FROM')
	console.log(from)
	next()
}

router.afterEach = (to,from) => {
	console.log('\n\nAfterEachHook::TRANSTION_COMPLETED!')
}

const app = new App({
	//target: document.getElementById("app"),
	target: document.body,
	props: {
		//name: 'world',
		router
		
	}
});

window.app = app;

export default app;