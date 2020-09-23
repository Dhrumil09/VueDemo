import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import AddStudent from "@/components/AddStudent";
import Login from "@/components/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/AddStudent",
      name: "AddStudent",
      component: AddStudent
    }
  ]
});
