<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item class="mt-4" link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Cooking</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Automotive</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-currency-usd</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Finance</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="#6c63ff" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Lyfe</span>
      </v-toolbar-title>
      <v-spacer />
      <v-row align="center"></v-row>
    </v-app-bar>

    <v-content class="justify-center">
      <router-view class="justify-center" style="margin: 0 auto"></router-view>
    </v-content>
  </v-app>
</template>

<script>
/**import firebase from "firebase";

var config = {
  apiKey: "AIzaSyD0ekaNP7Hrjtqs0Xhl0eINFhjFjyIyMmw",
  authDomain: "tamuhack-ea6f9.firebaseapp.com",
  databaseURL: "https://tamuhack-ea6f9.firebaseio.com",
  projectId: "tamuhack-ea6f9",
  storageBucket: "tamuhack-ea6f9.appspot.com",
  messagingSenderId: "326402026495",
  appId: "1:326402026495:web:44646b9edacc45d08dd5ca",
  measurementId: "G-5GRJ725JFN"
};

*/

//firebase.initializeApp(config);

export default {
  name: "app",
  data: () => ({
    alignment: "center",
    dense: false,
    justify: "center",
    drawer: null
  })
};
</script>