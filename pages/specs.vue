<template>
  <Content :document="document" />
</template>

<script>

  export default {

    async asyncData({ $content }) {
      const document = await $content('specs').fetch()
      return { document }
    }

  }

</script>