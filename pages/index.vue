<template>
  <b-container fluid>
    <!-- Hero section -->
    <b-row align-v="center" align-h="center" style="height: 100vh" class="hero">
      <b-col style="max-width: 800px" class="px-2 px-md-5">
        <b-row align-h="center" class="gx-4">
          <b-col>
            <b-row align-h="center">
              <b-col align-self="center" class="text-center text-md-start">
                <h1 class="display-6 mb-3">
                  <strong>
                    Grendel. A Beast of a Chip
                  </strong>
                </h1>
                <img src="/images/grendel.png" alt="Grendel 👹 A Beast of a Chip"
                  style="width: 192px" class="m-3"
                />
                <b-row>
                  <b-col>
                    <p class="lead py-3">
                      Grendel is a powerful AI chip that can be used for a wide range of applications. It is designed to accelerate the development of AI-based systems by providing a simple, scalable and cost-effective solution for designing and testing AI models.
                    </p>
                    <b-button size="lg" variant="primary" v-b-modal.waitlist>
                      Join the waitlist
                    </b-button>
                    <b-modal id="waitlist" title="Join the waitlist" hide-footer>
                      <p>
                        We are currently in the process of building our waitlist. If you would like to be notified when we launch, please enter your email address below.
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
                        <b-button type="submit" variant="primary">Submit</b-button>
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
      <b-col cols="12">
        <h2 class="display-5 mb-3">
          <strong>
            Defeat the competition
          </strong>
        </h2>
        <p class="lead">
          It’s no secret that AI is the future. Every industry is going to be disrupted by AI in one way or another, and the companies that are able to harness its power will be the ones that come out on top. Grendel changes the way AI is developed by making it easier and more affordable to design, test and deploy AI models. Truly, it’s a beast of a chip — and a beast whose power you can harness to defeat the competition.
        </p>
      </b-col>
      <!-- Benefits section -->
      <b-col cols="12" align-self="center" class="text-center">
        <b-row align-h="center" align-v="center">
          <b-col cols="12" sm="10" lg="3" class="mt-2 text-center">
            <h5>
              Flexible
            </h5>
            <p class="lead">
              Grendel is designed to be flexible and scalable. It can be used for a wide range of AI applications, and it can be easily integrated into existing systems.
            </p>
          </b-col>
          <b-col cols="12" sm="10" lg="3" class="mt-2 text-center">
            <h5>
              Simple
            </h5>
            <p class="lead">
              Grendel is designed to be simple and easy to use. It comes with a number of pre-built AI models that can be used to get started quickly.
            </p>
          </b-col>
          <b-col cols="12" sm="10" lg="3" class="mt-2 text-center">
            <h5>
              Scalable
            </h5>
            <p class="lead">
              Whether you’re testing a prototype or deploying a production system, Grendel can be scaled to meet your needs. Its modular design makes it easy to add more chips as your system grows.
            </p>
          </b-col>
        </b-row>
      </b-col>
      <!-- Punchline section -->
      <b-col cols="12" class="py-5">
        <h2 class="display-5 mb-3">
          Harness the power of Grendel today
        </h2>
        <p class="lead">
          If you’re ready to take your business to the next level with AI, we have the perfect solution. Get in touch with our team today and find out how Grendel can help you defeat the competition.
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
        title: 'Grendel 👹 A Beast of a Chip',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Grendel is a powerful AI chip that can be used for a wide range of applications. It is designed to accelerate the development of AI-based systems by providing a simple, scalable and cost-effective solution for designing and testing AI models.'
          }
        ]
      }
    },

    data() {
      return {
        email: ''
      }
    },

    methods: {
      async onSubmit(evt) {
        evt.preventDefault()
        // post https://b.ideality.app/api/1.1/wf/buildRequest_v2
        // body: {"build":"1664267677813x956331564579529000","email": ...}
        let axios = require('axios')
        try {

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
        }
      }
    },

  }

</script>

<style>

/* Dark theme with dark green accents */

.hero {
  background-color: #2d2d2d;
  color: #f2f2f2;
  /* Badass font */
  font-family: 'Roboto', sans-serif;
}

.second-section {
  background-color: #3d3d3d;
  color: #f2f2f2;
}

.btn-primary {
  /* Dark with a dark green border */
  background-color: #2d2d2d;
  border-color: #00a351;
}

.btn-primary:hover, .btn-primary:focus, .btn-primary:active {
  /* Turns dark green */
  background-color: #00a351;
  border-color: #00a351;
}

</style>
