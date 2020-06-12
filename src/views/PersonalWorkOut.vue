<template>
  <v-container>
    <div class="personal-work-container">
      <v-card class="card-form">
        <v-card-title class="headline font-weight-regular blue-grey white--text">Personal Workout</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="11">
              <v-text-field outlined clearable label="Tambahkan Workout anda" type="text"></v-text-field>
            </v-col>
            <v-col cols="1">
              <v-btn class="mx-2" fab dark color="indigo">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card>
        <v-card-title
          class="headline font-weight-regular blue-grey white--text"
        >List Personal Workout</v-card-title>
        <v-card-text>
          <div v-for="list in listWorkout" :key="list.listname">
            <v-checkbox id="list.listname" v-model="list.status" />
            <label for="list.listname">{{list.listname}}</label>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      listWorkout: [
        { listname: "List 1", status: true },
        { listname: "List 2", status: false },
        { listname: "List 3", status: false },
        { listname: "List 4", status: false },
        { listname: "List 5", status: false }
      ]
    };
  }
};
</script>

<style>
.personal-work-container {
  margin-top: 70px;
}
.card-form {
  margin-bottom: 50px;
}
</style>
