<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-spacer></v-spacer>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="User.UserID"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    v-model="User.Password"
                    type="password"
                  ></v-text-field>
                  <p v-if="error" class="error-message">
                    ❗Please fill out all required fields
                  </p>
                  <p v-if="notValid" class="error-message">
                    ❗ Please add valid UserName and Password
                  </p>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="this.handleLogin" color="primary">Login</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      error:false,
      notValid:false,
      User: {
        UserID: "",
        Password: ""
      }
    };
  },
  methods: {
    validate(){
      if(this.User.UserID === "" || this.User.Password === ""){
        this.error = true;
        return;
      }else{
        this.checkCrendentials();
      }
    },
    checkCrendentials(){
      if(this.User.UserID === "Dhrumil" && this.User.Password === "123456"){
        this.$store.commit('changeUserName',this.User.UserID);
        this.$router.push({ name: "Home" });
      }else{
        this.notValid =true;
        return;
      }
    },
    handleLogin() {
      this.clearStatus();
      this.validate();
    },
    clearStatus() {
      this.notValid = false;
      this.error = false;
    },
  }
};
</script>
<style scoped>
[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

</style>
