<template>
  <v-app >

    <NavBar />
    
    <v-main style="margin:0px; padding: 0px;">
        <router-view />
    </v-main>

    <teleport to="#footer">
        <Footer />
    </teleport>

  </v-app>
</template>

<script>

import NavBar from './components/NavBar.vue'
import SignUp from './components/SignUp.vue'
import ResultState from './components/ResultState.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    NavBar,
    SignUp,
    ResultState,
    Footer
  },

  data: () => ({
    //
  }),
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
