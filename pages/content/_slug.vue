<template>
  <Content :document="document" />
</template>

<script>

  export default {

    async asyncData({ $content, route: { params: { slug } } }) {
      const document = await $content(slug).fetch()
      return { document }
    }

  }

</script>