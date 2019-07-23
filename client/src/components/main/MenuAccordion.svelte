<script>
  import Icons from "../utils/Icons.svelte";
  import RouterLink from "./RouterLink.svelte";
    
  let openTab = 1,
      oneOpen = true,    
      titleClass   = 'js-Accordion-title',
      contentClass = 'js-Accordion-content';

function onClick(e) {
  console.log(e);
    if (e.target.className.indexOf(titleClass) === -1) {
        return;
    }

    if (this.oneOpen) {
        this.closeAll();
    }

    toggle(e.target.nextElementSibling);
}

function closeAll() {
    [].forEach.call(element.querySelectorAll('.' + contentClass), function (item) {
        item.style.height = 0;
    });
}

function toggle(el) {
    // getting the height every time in case
    // the content was updated dynamically
    var height = el.scrollHeight;

    if (el.style.height === '0px' || el.style.height === '') {
        el.style.height = height + 'px';
    } else {
        el.style.height = 0;
    }
}

function getTarget(n) {
    return element.querySelectorAll('.' + contentClass)[n - 1];
}

function open(n) {
    var target = getTarget(n);

    if (target) {
        if (this.oneOpen) this.closeAll();
        target.style.height = target.scrollHeight + 'px';
    }
}

function close(n) {
    var target = this.getTarget(n);

    if (target) {
        target.style.height = 0;
    }
}

function destroy() {
    element.removeEventListener('click', this.onClick);
}


  export let menu = {};
</script>

<style>

.js-Accordion {
    margin: 0;
    max-width: 30em;
    width: 100%;
    z-index: 1000;
    
  }
  .js-Accordion-title {
    color: rgb(231, 231, 231);

    background: #6c6e74;
    background: -moz-linear-gradient(top, #6c6e74 0%, #4b4d51 100%);
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #6c6e74),
      color-stop(100%, #4b4d51)
    );
 background: rgb(76,76,76);
background: -moz-linear-gradient(top, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 50%, rgba(0,0,0,1) 51%, rgba(17,17,17,1) 60%, rgba(43,43,43,1) 76%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%);
background: -webkit-linear-gradient(top, rgba(76,76,76,1) 0%,rgba(89,89,89,1) 12%,rgba(102,102,102,1) 25%,rgba(71,71,71,1) 39%,rgba(44,44,44,1) 50%,rgba(0,0,0,1) 51%,rgba(17,17,17,1) 60%,rgba(43,43,43,1) 76%,rgba(28,28,28,1) 91%,rgba(19,19,19,1) 100%);
background: linear-gradient(to bottom, rgba(76,76,76,1) 0%,rgba(89,89,89,1) 12%,rgba(102,102,102,1) 25%,rgba(71,71,71,1) 39%,rgba(44,44,44,1) 50%,rgba(0,0,0,1) 51%,rgba(17,17,17,1) 60%,rgba(43,43,43,1) 76%,rgba(28,28,28,1) 91%,rgba(19,19,19,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313',GradientType=0 );

    -webkit-box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1),
      0px 1px 0px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1),
      0px 1px 0px 0px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1),
      0px 1px 0px 0px rgba(0, 0, 0, 0.1);
    margin: 0;
    cursor: pointer;
    display: block;
    padding: 10px;
    width: 100%;
    border: 0px;
    text-transform: uppercase;
  }

   .js-Accordion-title:focus {
     outline:none;
     }
.js-Accordion-title:active {
   color: rgb(0, 255, 255);
}     
   .js-Accordion-title::-moz-focus-inner {border:0;}

  .js-Accordion-title:first-child {
    border-top: 1px solid rgb(12, 12, 12);
  }
  .js-Accordion-content {
    display: grid;
    border: 1px solid rgb(7, 7, 7);
    widows: 100%;
    border-top: 0;
    padding: 0;
    height: 0;
    text-decoration: none !important;
    line-height: 1.5;
    overflow: hidden;
    transition: all .25s linear;
  }

.item {
  text-decoration: none;
  display: inline-block;
  height: 35px;
  line-height: 35px;
  padding-right: 10px;
  padding-left: 50px;
  position: relative;
  background-color:rgb(41,127,184);
  color:rgb(255,255,255);
  text-decoration: none;
  letter-spacing: 1px;
  margin-bottom: 0px;
  text-shadow:0px 1px 0px rgba(0,0,0,0.5);
-ms-filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=1,Color=#ff123852,Positive=true)";zoom:1;
filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=1,Color=#ff123852,Positive=true);


 background: rgb(40,52,59);
background: -moz-linear-gradient(left, rgba(40,52,59,1) 0%, rgba(130,140,149,1) 64%, rgba(181,189,200,1) 100%);
background: -webkit-linear-gradient(left, rgba(40,52,59,1) 0%,rgba(130,140,149,1) 64%,rgba(181,189,200,1) 100%);
background: linear-gradient(to right, rgba(40,52,59,1) 0%,rgba(130,140,149,1) 64%,rgba(181,189,200,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#28343b', endColorstr='#b5bdc8',GradientType=1 );

}    



.item span {
  position: absolute;
  left: 0;
  padding-left: 10px;
  width: 30px;
  background-color:rgba(0,0,0,0.5);


border-right: 1px solid  rgba(0,0,0,0.15);
}

.item:hover span{
  background-color:rgb(48, 181, 221);
  border-right: 1px solid  rgba(0,0,0,0.3);
}

.item:active {
   -webkit-box-shadow: inset 1px 1px 5px #333;
   -moz-box-shadow:    inset 1px 1px 5px #333;
   box-shadow:         inset 1px 1px 5px #333;


}

</style>

<div class="js-Accordion" id="accordion">
  {#each menu.folders as m}
    <button on:click={onClick} id={m.title} class="js-Accordion-title">{m.title}</button>
      <div class="js-Accordion-content">
        {#each m.items as item}
           <div class="item">
            <span><Icons data={item.icon}/></span>
         
            <RouterLink to={item.action} text={item.title}/>
         
           </div>
    {/each}
      </div>    
  {/each}
</div>

