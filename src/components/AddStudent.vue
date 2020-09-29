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
import StudentTable from "../Common/StudentTable";
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
  max-width: 1000px;
}
</style>
