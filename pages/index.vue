<template>
  <b-container fluid>
    <!-- Hero section -->
    <b-row align-v="center" align-h="center" style="height: 100vh" class="hero">
      <b-col style="max-width: 800px" class="px-2 px-md-5">
        <b-row align-h="center" class="gx-4">
          <b-col>
            <b-row align-h="center">
              <b-col align-self="center" class="text-center text-md-start">
                <h1 class="display-4 mb-3">
                  Undum
                </h1>
                <h2 class="display-5 mb-3">
                  Powering healthcare with AI, one device at a time
                </h2>
                <img src="/ai-chip/images/undum2.png"
                  style="width: 320px" class="m-3"
                />
                <b-row>
                  <b-col>
                    <p class="lead py-3">
                      Undum is a low-power, high-performance and easy-to-use AI microchip that has been specifically designed for medical equipment. By powering your devices with Undum, you can help your customers make better decisions, faster.
                    </p>
                    <b-button size="lg" variant="primary" v-b-modal.waitlist
                      v-if="!submitted"
                    >
                      Join the waitlist
                    </b-button>                    
                    <b-modal id="waitlist" title="Join the waitlist" hide-footer>
                      <p>
                        Thank you for your interest in Undum! We are currently finalizing our product and preparing for launch. Please enter your email address below, and we’ll let you know as soon as Undum becomes available.
                      </p>
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
                    </b-modal>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row align-h="center" class="text-center second-section pt-5">
      <!-- Story section -->
      <b-col cols="12 my-5" style="max-width: 800px">
        <h2 class="display-5 mb-4">
          <strong>
            Help your customers make better decisions, faster
          </strong>
        </h2>
        <div>
          <p>As a manufacturer of healthcare equipment, you know that AI has the potential to revolutionize the industry. But adding AI to your devices can be costly and time-consuming. <strong>Undum is changing that.</strong> We worked hard to pack all the power of AI into a single, easy-to-use microchip. Now, you can add AI to your devices quickly and easily, without breaking the bank.</p>
        </div>
      </b-col>
      <!-- Benefits section -->
      <b-col cols="12" align-self="center" class="text-center">
        <b-row align-h="center" class="gx-5">
          <b-col cols="12" sm="10" lg="3" class="mt-2 text-center">
            <h5>
              Power efficient
            </h5>
            <p>
              With an average power consumption of just XX mW, Undum is one of the most power-efficient AI chips on the market. That means you can use it in battery-powered devices without sacrificing performance.
            </p>
          </b-col>
          <b-col cols="12" sm="10" lg="3" class="mt-2 text-center">
            <h5>
              High performance
            </h5>
            <p>
              Supporting up to XX trillion operations per second (TOPS), Undum makes sure your devices can keep up with the demands of AI, whether it’s for medical imaging, drug discovery or any other AI-powered application.
            </p>
          </b-col>
          <b-col cols="12" sm="10" lg="3" class="mt-2 text-center">
            <h5>
              Easy to use
            </h5>
            <p>
              Undum comes with an easy-to-use software development kit (SDK) that lets you get started quickly, without the need for expensive and time-consuming hardware modifications or FPGA development.
            </p>
          </b-col>
        </b-row>
      </b-col>
      <!-- Punchline section -->
      <b-col cols="12" class="py-5" style="max-width: 800px">
        <h2 class="display-5 mb-3">
          Ready to take your devices to the next level?
        </h2>
        <p>
          If you’re looking to add AI to your healthcare devices, Undum is the solution for you. Join the waitlist today and be one of the first to get your hands on our game-changing microchip.
        </p>
        <b-button size="lg" variant="primary" v-b-modal.waitlist>
          Join the waitlist
        </b-button>
      </b-col>
    </b-row>
  </b-container> 
</template>

<script>

  export default {

    name: 'IndexPage',

    head() {
      return {
        title: 'Undum 💜 Powering healthcare with AI, one device at a time.',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Undum is a low-power, high-performance and easy-to-use AI microchip that has been specifically designed for medical equipment. By powering your devices with Undum, you can help your customers make better decisions, faster.'
          }
        ]
      }
    },

    data() {
      return {
        email: '',
        pending: false,
      }
    },

    methods: {
      async onSubmit(evt) {
        evt.preventDefault()
        // post https://b.ideality.app/api/1.1/wf/buildRequest_v2
        // body: {"build":"1664267677813x956331564579529000","email": ...}
        let axios = require('axios')
        try {

          this.pending = true

          await axios.post('https://b.ideality.app/api/1.1/wf/buildRequest_v2', {
            build: '1664267677813x956331564579529000',
            email: this.email
          })
          
          this.$bvToast.toast('Thanks for joining the waitlist! We will notify you when we launch.', {
            title: 'Success',
            variant: 'success',
            solid: true
          })

        } catch (error) {

          this.$bvToast.toast('There was an error submitting your email address. Please try again later.', {
            title: 'Error',
            variant: 'danger',
            solid: true
          })

        } finally {

          this.$bvModal.hide('waitlist')
          this.$nextTick(() => {
            this.email = ''
            this.pending = false
          })

        }
      }
    },

  }

</script>

<style>

/* Dark theme with dark green accents */

.hero {
  background-color: #f8f8f8;
  color: #333333;
  /* Badass font */
  font-family: 'Helvetica', sans-serif;
}

.second-section {
  background-color: #ffffff;
  color: #333333;
}

.btn-primary {
  /* Dark with a dark green border */
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover, .btn-primary:focus, .btn-primary:active {
  /* Turns dark green */
  background-color: #007bff;
  border-color: #007bff;
}

</style>
