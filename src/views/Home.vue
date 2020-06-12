<template>
  <v-container>
    <div class="title-app">
      <h1>Fitness APP</h1>
    </div>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="300px"></v-img>
          <v-card-text style="height: 150px; position: relative">
            <div>
              <router-link to="/personal-workout">
                <v-btn absolute dark fab top right color="light pink" small>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </router-link>
            </div>
            <v-card-title>Personal Workout</v-card-title>
            <v-card-subtitle>Your Personal and Customize Workout</v-card-subtitle>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="300px"></v-img>
          <v-card-text style="height: 150px; position: relative">
            <router-link to="/hero-workout">
              <v-btn absolute dark fab top right color="pink" small>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </router-link>
            <v-card-title>Hero Workout</v-card-title>
            <v-card-subtitle>Your Precompiled and Ready to Use Workout</v-card-subtitle>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.title-app {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 60px;
}
</style>