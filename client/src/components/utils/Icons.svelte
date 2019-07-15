<script>
    export let data = "";
    export let iclass = "feather-16";
</script>

<style>
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

  .feather-32 {
    width: 32px;
    height: 32px;
  }
</style>

<i class="{iclass}" id="teste" data-feather={data} />
