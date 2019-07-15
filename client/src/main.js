import App from './App.svelte';
import {Router} from 'svelte-easyroute-rollup'
import Not404 from './pages/404.svelte'
import Home from './pages/home.svelte'
import About from './pages/about.svelte'

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
			path: '/about',
			component: Not404,
			name: 'About me'
		}
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