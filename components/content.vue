<template>
  <b-container>
    <b-row class="my-5" align-h="center">
      <b-col style="max-width: 800px">
        <h1 class="display-4 my-3" v-text="document.title" />
        <article>
          <nuxt-content :document="document" />
        </article>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

  export default {

    head() {

      return {
        title: this.document.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.document.description
          }
        ]
      }

    },
    
    props: {
      document: {
        type: Object,
        default: () => ({})
      }
    },

  }

</script>

<style>

  h2 {
    /* Add space before and after the heading */
    margin: 2rem 0 1.5rem;
  }

  img {
    /* Max width 600px */
    max-width: 600px;
  }


</style>  