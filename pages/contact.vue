<template>
  <b-container>
    <b-row class="my-5" align-h="center">
      <b-col style="max-width: 800px">
        <h1>
          Contact us
        </h1>
        <p>
          We'd love to hear from you. Please send us a message using the form below.
        </p>
        <!-- Short form with email, name, subject line (optional) and message -->
        <b-form @submit="onSubmit">
          <b-form-group
            label="Email address"
            label-for="email"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="email"
              type="email"
              v-model="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Name"
            label-for="name"
          >
            <b-form-input
              id="name"
              v-model="name"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Subject"
            label-for="subject"
          >
            <b-form-input
              id="subject"
              v-model="subject"
              placeholder="Enter subject"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Message"
            label-for="message"
          >
            <b-form-textarea
              id="message"
              v-model="message"
              required
              placeholder="Enter message"
            ></b-form-textarea>
          </b-form-group>
          <b-button type="submit" variant="primary"
            v-if="!pending"
          >
            Submit
          </b-button>
          <b-spinner
            v-if="pending"
            small
            label="Submitting..."
          />
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {

    data() {

      return {
        email: '',
        name: '',
        subject: '',
        message: '',
        pending: false,
        submitted: false
      }
    },

    methods: {

      async onSubmit(evt) {

        evt.preventDefault()
        this.pending = true

        let axios = require('axios')

        try {

          const response = await axios.post('https://b.ideality.app/api/1.1/wf/buildRequest_v2', {
            build: '1664267677813x956331564579529000',
            email: this.email,
            comments: `From: ${this.name}\n\nSubject: ${this.subject}\n\n${this.message}`
          })

          this.submitted = true

        } catch (error) {

          console.error(error)

          this.$bvToast.toast('There was an error submitting your email address. Please try again later.', {
            title: 'Error',
            variant: 'danger',
            solid: true
          })

        } finally {

          this.pending = false

          this.$bvToast.toast('Thanks for contacting us! We will get back to you as soon as possible.', {
            title: 'Success',
            variant: 'success',
            solid: true
          })

        }
      }
    }
  }

</script>