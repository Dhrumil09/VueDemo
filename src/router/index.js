import Vue from "vue";
import Router from "vue-router";
import AddStudent from "@/components/AddStudent";
import Login from "@/components/Login";
import Home from "@/components/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:"/home",
      name:"Home",
      component:Home,
    },
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
