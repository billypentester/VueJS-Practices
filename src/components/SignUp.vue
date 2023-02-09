<template>
  <v-sheet id="sheetbg" class="h-screen">
    <div class="overlay d-flex flex-column justify-center align-center">
      <v-card class="pa-6" elevation="12" width="35%">
        <v-card-title>
          <h2 class="display-3 mt-1 mb-7 text-center text-blue">Sign Up</h2>
        </v-card-title>
        <v-card-text>
          <v-form v-for="field in fields" :key="field.name" :lazy-validation="true">
            <v-text-field :label=field.label variant="underlined" :type="field.type" :rules="field.rules" class="mb-3" color="blue-darken-2" v-model="values[field.name]">
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue" variant="flat" class="px-4 py-1 mx-auto" @click="submit">Sign Up</v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-btn color="warning" variant="flat" class="px-4 py-1 my-3 mx-auto w-100" @click="submitProvider">Sign Up with Google</v-btn>
      </v-card>
      
    </div>
  </v-sheet>

</template>

<script>

// firebase auth
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './../firebase/init'


export default {
    name: 'ViewPage',
    data() {
      return {
        title: 'Sign Up',
        fields:[
          {
            name: 'first_name',
            label: 'First Name',
            type: 'text',
            rules: [
                v => !!v || 'First name is required',
                v => (v && v.length <= 10) || 'First name must be less than 10 characters',
            ]
          },
          {
            name: 'last_name',
            label: 'Last Name',
            type: 'text',
            rules: [
                v => !!v || 'First name is required',
                v => (v && v.length <= 10) || 'First name must be less than 10 characters',
            ]
          },
          {
            name: 'email',
            label: 'Email',
            type: 'email',
            rules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ]
          },
          {
            name: 'password',
            label: 'Password',
            type: 'password',
          },
          {
            name: 'confirm_password',
            label: 'Confirm Password',
            type: 'password',
            rules:[
              v => this.values.password === v || 'Passwords must match'
            ]
          },
        ],
        values: {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirm_password: ''
        }
      }
    },
    methods: {
      submit() {
        createUserWithEmailAndPassword(auth, this.values.email, this.values.password)
          .then((userCredential) => {
            const user = userCredential.user;
            alert('User created successfully')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      },
      submitProvider() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            alert(user)
            console.log(user)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
      }
    },
}

</script>


<style>


#sheetbg {
    background: url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

</style>