<script>
    import {LoadIcon, Replace} from './icons.js'
    import { onMount } from 'svelte';



    export let data = "";
    export let size = "16";

    let element;

    onMount(async () => {
      //console.log("create", element.parentNode);
      Replace(data, element, size);
	 });
    
    //srcset={Icon.data['trash2]}
    //console.log('icons2', Icons);
    
</script>

<style>
/*
  i {
    color: red;
  }

  .feather-16 {
    width: 16px;
    height: 16px;
  }

  .feather-24 {
    width: 24px;
    height: 24px;
  }

  .f

<!--<i class="{iclass}" data-feather={data} />-->
*/


</style>

<span bind:this={element}/>



