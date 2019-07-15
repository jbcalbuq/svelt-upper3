
<script>

import Not404 from '../pages/404.svelte'
import Home from '../pages/home.svelte'
import About from '../pages/about.svelte'

  export let routes = [
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

</script>