<template>
  <iframe :src="ihtml" frameborder="0"  seamless="seamless"></iframe>
</template>

<script>
  export default {
      props: {
          ihtml: {
              type: String
          }
      }
  }
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap");
font-family: "JetBrains Mono", monospace;

iframe {
  display: flex;
  flex-wrap: wrap;
}


iframe:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}

</style>
