<template>

    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app color="blue" dark container>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar" class="hidden-sm-and-up">
        </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer; text-decoration: none; color:#fff">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark style="margin-right:10px;">mdi-domain</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

</template>

<script>

export default {
    name: 'NavBar',
    data: () => ({
        appTitle: 'CRUD App',
        sidebar: false,
        menuItems: [
            { title: 'Home', path: '/home', icon: 'home' },
            { title: 'Sign Up', path: '/signup', icon: 'face' },
            { title: 'Result', path: '/result', icon: 'lock_open' }
        ]
    })
}

</script>