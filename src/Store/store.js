import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    UserName: "",
    students: []
  },
  mutations: {
    changeUserName(state, username) {
      state.UserName = username;
    },
    SAVE_STUDENT(state, students) {
      state.students = students;
    }
  },
  actions: {
    async getStudent(context) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        context.commit("SAVE_STUDENT", data);
      } catch (error) {
        console.error(error);
      }
    },
    async addStudent(context, student) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "POST",
            body: JSON.stringify(student),
            headers: { "Content-type": "application/json; charset=UTF-8" }
          }
        );
        const data = await response.json();
        context.commit("SAVE_STUDENT", [...this.state.students, data]);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteStudent(context, id) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: "DELETE"
        });
        context.commit(
          "SAVE_STUDENT",
          this.state.students.filter(student => student.id !== id)
        );
      } catch (error) {
        console.error(error);
      }
    },
    async editStudent(context, updatedStudent) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${updatedStudent.id}`,
          {
            method: "PUT",
            body: JSON.stringify(updatedStudent),
            headers: { "Content-type": "application/json; charset=UTF-8" }
          }
        );
        const data = await response.json();
        context.commit(
          "SAVE_STUDENT",
          this.state.students.map(student =>
            student.id === updatedStudent.id ? data : student
          )
        );
      } catch (error) {
        console.error(error);
      }
    }
  },

  getters: {
    getUserName: state => state.UserName,
    getstudent: state => state.students
  }
});
export default store;
