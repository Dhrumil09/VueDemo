<template>
  <div id="Studentform">
          <V-card class="justify-center">
            <v-text-field
              ref="first"
              label="Student Name"
              type="text"
              :class="{ 'has-error': submitting && invalidName }"
              v-model="Student.name"
              @focus="clearStatus"
              @keypress="clearStatus"
            />
            <v-text-field
              label="Email"
              type="text"
              :class="{ 'has-error': submitting && invalidEmail }"
              v-model="Student.email"
              @focus="clearStatus"
            />
            <p v-if="error && submitting" class="error-message">
              ❗Please fill out all required fields
            </p>
            <p v-if="success" class="success-message">
              ✅ Student successfully added
            </p>
            <v-card-actions>
              <v-btn @click="handleSubmit">Add Student</v-btn>
            </v-card-actions>
          </V-card>
  </div>
</template>
<script>
export default {
  name: "Studentform",
  data() {
    return {
      error: false,
      submitting: false,
      success: false,
      Student: {
        name: "",
        email: ""
      }
    };
  },
  computed: {
    invalidName() {
      return this.Student.name === "";
    },

    invalidEmail() {
      return this.Student.email === "";
    }
  },
  methods: {
    handleSubmit() {
      this.clearStatus();
      this.submitting = true;

      if (this.invalidName || this.invalidEmail) {
        this.error = true;
        return;
      }

      this.$emit("add:student", this.Student);
      this.$refs.first.focus();
      this.Student = {
        name: "",
        email: ""
      };
      this.success = true;
      this.error = false;
      this.submitting = false;
    },

    clearStatus() {
      this.success = false;
      this.error = false;
    }
  }
};
</script>

<style scoped>
#Studentform{
width:50%;
margin-left:25%;
padding:10px;
}
[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>
