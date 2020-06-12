<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>Fitness App</v-toolbar-title>

      <div class="menu-container">
        <router-link class="menu-link" to="/">Home</router-link>
        <router-link class="menu-link" to="/about">About</router-link>
      </div>

      <v-spacer></v-spacer>
      <div class="searchbar-content">
        <v-text-field label="Prepend inner" prepend-inner-icon="place" v-model="search"></v-text-field>
        <!-- <v-text-field class="searchbar" label="Pencarian..." single-line solo v-model="search"></v-text-field> -->
      </div>
    </v-app-bar>
    <v-container>
      <v-row>
        <!-- modal -->
        <!-- <ModalHeroes :data="modalData" :visible="modalVisible" /> -->
        <v-dialog max-width="490" v-model="modalVisible">
          <v-card>
            <v-card-title class="headline">{{modalData.name}}</v-card-title>
            <v-card-text>
              <div v-for="training in modalData.training" :key="training.exerciseName">
                <p>{{training.exerciseName}}</p>
              </div>
            </v-card-text>
          </v-card>
        </v-dialog>

        <!-- card content -->
        <v-col cols="4" v-for="hero in filteredList" :key="hero.heroId">
          <v-card class="mx-auto" max-width="344" width="344">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="300px"></v-img>
            <v-card-actions>
              <v-card-title>{{hero.name}}</v-card-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-text>
              <v-btn @click="openModal(hero)">Detail</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import ModalHeroes from "../components/commons/ModalHeroes";
import HeroesJson from "../data/Heroes.json";
export default {
  components: {
    // ModalHeroes
  },
  data() {
    return {
      modalVisible: false,
      modalData: {},
      heroes: HeroesJson,
      search: ""
    };
  },
  methods: {
    openModal(params) {
      this.modalData = params;
      this.modalVisible = true;
    }
  },
  computed: {
    filteredList() {
      return this.heroes.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style>
.searchbar-content {
  /* margin-top: 30px; */
  width: 200px;
}
</style>