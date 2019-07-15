<script>
import { onMount } from 'svelte'
import Menu from './components/main/Menu.svelte'

export let router
let outlet = false;

onMount(()=> {
  console.log(outlet)
  if (!outlet) {
    outlet = true;
    router.createOutlet();
  }
})


</script>

<Menu/>

<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
<div id="main" class="container" style="background-color: yellow;">
  <div id="router-outlet"></div>
 </div>