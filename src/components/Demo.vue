<template>
    <v-container>
        <v-row>
            <v-col cols="6">
                <h1 v-if="values.title">{{ values.title }}</h1>
                <h1 v-else-if="!values.title">No title</h1>
                <h1 v-else>Default title</h1>
                <v-btn class="ma-5" color="blue" @click="setValue()">Set title</v-btn>
                <v-btn class="ma-5" color="red" @click="clearValue()">Clear title</v-btn>
                <div>
                    <v-radio-group v-model="values.gender">
                        <v-radio label="Male" name="gender" value="male"></v-radio>
                        <v-radio label="Female" name="gender" value="female"></v-radio>
                    </v-radio-group>
                </div>
                <div class="d-flex">
                    <v-checkbox v-model="values.skills" label="HTML" value="HTML"></v-checkbox>
                    <v-checkbox v-model="values.skills" label="CSS" value="CSS"></v-checkbox>
                    <v-checkbox v-model="values.skills" label="JavaScript" value="JavaScript"></v-checkbox>
                </div>
                <div>
                    <v-select v-model="values.skills" :items="['HTML', 'CSS', 'JavaScript']" label="Skills" multiple></v-select>
                </div>
                <div v-for="item in values.education">
                    <span label="Name">{{ item.name }} - </span>
                    <span label="Year">{{ item.year }}</span>
                </div>
                <div class="my-10">
                    <span v-html="'<h2>this is html renderd with v-html </h2>'"></span>
                </div>
                <div class="my-10">
                    <v-btn color="blue" class="ma-3" @click="component='ResultState'">Result</v-btn>
                    <v-btn color="blue" class="ma-3" @click="component='SignUp'">Sign Up</v-btn>
                    <v-btn color="blue" class="ma-3" @click="component='NavBar'">Nav Bar</v-btn>
                </div>
                <div class="my-10">
                    <component :is="component"></component>
                </div>
                <div class="my-10">
                    <h3>Send data from child to parent using function</h3>
                    <h3>v-model is 2 way binding while v-bind is one way binding.</h3>
                    <h3>non props data will be get as $attrs</h3>
                    <h3>Computed have better performance than methods</h3>
                    <h3>Created called before script data and methods creation</h3>
                    <h3>Created called after script data and methods creation</h3>
                    <h3>BeforeMount called before template render</h3>
                    <h3>Mounted called after template render</h3>
                    <h3>BeforeUpdate called before template update</h3>
                    <h3>Updated called after template update</h3>
                    <h3>BeforeMount called before template destroy</h3>
                    <h3>Unmounted called after template destroy</h3>
                    <h3>Slots are used to pass HTML component to child</h3>
                </div>
                <div class="my-10">
                    <v-text-field ref="input1" label="Title"></v-text-field>
                    <v-btn color="blue" class="ma-3" @click="focus">Focus Button using ref</v-btn>
                </div>
            </v-col>
            <v-col cols="6">
                <div>
                    {{ values }}
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import ResultState from './ResultState.vue';
import SignUp from './SignUp.vue';
import NavBar from './NavBar.vue';

export default {
    name: 'Demo',
    data: () => ({
        values:{
            title: 'Demo',
            skills: [],
            gender: '',
            education:[
                {name: 'School', year: 2010},
                {name: 'College', year: 2014},
                {name: 'University', year: 2018},
            ]
        },
        component: "ResultState"
    }),
    methods: {
        setValue(){
            this.values.title = 'New title';
        },
        clearValue(){
            this.values.title = '';
        },
        focus(){
            this.$refs.input1.focus();
        }
    },
    components: {
        ResultState, SignUp, NavBar
    },
    mounted(){
        // life cycle method for API calls
    }
}
</script>