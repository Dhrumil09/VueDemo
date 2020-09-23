<template>
  <div id="AddStudent">
     <Studentform @add:student="addStudent" />
     <StudentTable
      :student="student"
      @delete:student="deleteStudent"
      @edit:student="editStudent"
    />
  </div>
</template>
<script>
import StudentTable from '../Common/StudentTable'
import Studentform from "../Common/Studentform";

export default {
  name: "AddStudent",
  components: {
    Studentform,
    StudentTable
  },
  data() {
    return {
      student: []
    };
  },

  mounted() {
    this.getStudent();
  },

  methods: {
    async getStudent() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        this.student = data;
      } catch (error) {
        console.error(error);
      }
    },

    async addStudent(student) {
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
        this.student = [...this.student, data];
      } catch (error) {
        console.error(error);
      }
    },

    async editStudent(id, updatedStudent) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          {
            method: "PUT",
            body: JSON.stringify(updatedStudent),
            headers: { "Content-type": "application/json; charset=UTF-8" }
          }
        );
        const data = await response.json();
        this.student = this.student.map(student =>
          student.id === id ? data : student
        );
      } catch (error) {
        console.error(error);
      }
    },

    async deleteStudent(id) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: "DELETE"
        });
        this.student = this.student.filter(student => student.id !== id);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style>
button {
  background: #009435;
  border: 1px solid #009435;
}

button:hover,
button:active,
button:focus {
  background: #32a95d;
  border: 1px solid #32a95d;
}

.small-container {
  max-width: 680px;
}
</style>
