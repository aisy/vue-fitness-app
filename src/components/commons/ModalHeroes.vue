<template>
  <v-dialog max-width="490" v-model="visible">
    <v-card>
      <v-card-title class="headline">{{data.name}}</v-card-title>
      <v-card-text>
        <div v-for="train in data.training" :key="train.exerciseName">
          <div>{{train.exerciseName}}</div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  // v-model yang di kirimkan adalah value? perlu konfirmasi
  props: ["data", "value", "visible"]
  // computed: {
  //   show: {
  //     get() {
  //       return this.value;
  //     },
  //     set(value) {
  //       this.$emit("input", value);
  //     }
  //   }
  // }
};
</script>