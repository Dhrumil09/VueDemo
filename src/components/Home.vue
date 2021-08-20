<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right color="blue-grey" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>

      <v-list dense>
        <v-list-item
          ><v-spacer
            ><h1>{{ $store.getters.getUserName }}</h1></v-spacer
          ></v-list-item
        >
        <v-divider inset></v-divider>
        <v-list-item @click="handleStudentForm('Student List')">
          <v-list-item-content>
            <v-list-item-title>Student List</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="handleStudentForm('Home')">
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container class="fill-height" fluid v-if="flag">
        <v-row justify="center" vertical-align: top>
          <v-col class="shrink">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <h1>Hey {{ $store.getters.getUserName }}</h1>
              </template>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
      <AddStudent v-else />
    </v-main>
  </v-app>
</template>

<script>
import AddStudent from "./AddStudent";
export default {
  name: "Home",
  props: {
    source: String
  },
  components: {
    AddStudent
  },
  data: () => ({
    drawer: false,
    flag: true,
    title: "Home",
    drawerRight: null,
    left: false
  }),
  methods: {
    handleStudentForm(item) {
      this.drawer = false;
      if (item == "Student List") {
        this.flag = false;
        this.title = item;
      } else {
        this.flag = true;
        this.title = item;
      }
    }
  }
};
</script>
