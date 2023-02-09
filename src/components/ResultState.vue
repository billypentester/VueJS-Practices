<template>
    <v-container>
        <v-row>
            <v-col cols="5">
                <h1>Counter</h1>
                <div class="ma-10 d-flex justify-center">
                    <v-btn class="ma-4" @click="$store.dispatch('increment')">+</v-btn>
                    <h2 class="ma-4">{{ $store.getters.getCount }}</h2>
                    <v-btn class="ma-4" @click="$store.dispatch('decrement')">-</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: 'InsertPage',
    data() {
        return {
            //
        }
    }
}

</script>
