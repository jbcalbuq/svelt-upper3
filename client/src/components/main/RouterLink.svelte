<div class="router-link" on:click={navigateRouter}>
{#if text && text !== ""}
{text}
{/if}
<slot></slot>
</div>

<script>
    export let to
    export let text

    function navigateRouter() {
        if (window.routermode == 'hash') window.location.hash = to
        if (window.routermode == 'history') {
            let stateObj = { path: to, needAddBase: true };
            let event = new CustomEvent('svelteEasyrouteLinkClicked', 
                { 
                    'detail': stateObj
                });
            window.dispatchEvent(event)
        }
        if (window.routermode == 'silent') {
            let stateObj = { path: to, needAddBase: true };
            let event = new CustomEvent('svelteEasyrouteSilentNavigated', 
                { 
                    'detail': stateObj
                });
            window.dispatchEvent(event)
        }
    }
</script>

<style>
    div.router-link {
        cursor: pointer;
        display: inline-block;
        width: 100%;
    }
</style>