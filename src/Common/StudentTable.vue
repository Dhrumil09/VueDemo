<template>
  <div id="StudentTable">
    <p v-if="students.length < 1" class="empty-table">
      No student
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th id="Action">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="student.id" v-for="student in students">
          <td v-if="editing === student.id">
            <v-text-field type="text" v-model="student.name" />
          </td>
          <td v-else>{{ student.name }}</td>
          <td v-if="editing === student.id">
            <v-text-field type="text" v-model="student.email" />
          </td>
          <td v-else>{{ student.email }}</td>
          <td v-if="editing === student.id">
            <button @click="editStudent(student)">Save</button>
            <button class="muted-button" @click="cancelEdit(student)">
              Cancel
            </button>
          </td>
          <td v-else>
            <button @click="editMode(student)">Edit</button>
            <button @click="$store.dispatch('deleteStudent', student.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "StudentTable",
  props: {
    //student: Array
  },
  data() {
    return {
      editing: null
    };
  },
  created() {
    this.$store.dispatch("getStudent");
  },
  computed: {
    ...mapState(["students"])
  },
  methods: {
    editMode(student) {
      this.cachedStudent = Object.assign({}, student);
      this.editing = student.id;
    },

    cancelEdit(student) {
      Object.assign(student, this.cachedStudent);
      this.editing = null;
    },

    editStudent(student) {
      if (student.name === "" || student.email === "") return;
      //this.$emit("edit:student", student.id, student);
      this.$store.dispatch("editStudent",student);
      this.editing = null;
    }
  }
};
</script>

<style scoped>
button {
  margin: 0 0.5rem 0 0;
}

input {
  margin: 0;
}

.empty-table {
  text-align: center;
}
#StudentTable {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
th {
  padding-left: 30px;
}
td {
  padding-left: 30px;
}
</style>
