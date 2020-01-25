<template>
  <div class="justify-center" id="cooking">
    <v-container>
      <v-row class="justify-center">
        <h2 class="justify-center">
          Time for some
          <strong style="color: #6c63ff">cooking.</strong>
        </h2>
      </v-row>
    </v-container>
    <v-container>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-img
              class="ma-5"
              style="width: 100px; height: 100px; max-width: 100px;"
              src="../assets/knife.png"
            ></v-img>
            <v-title style="font-size: 2em">Topic 1</v-title>
            <v-subtitle-1 style="color:#6c63ff">
              <strong style="font-size: 2em;">Knife Skills</strong>
            </v-subtitle-1>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-list>
                <v-list-item>
                  <v-title class="ma-2 pa-2">
                    <strong>Lesson 1</strong>
                  </v-title>
                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                  <router-link tag="a" to="/cooking/lesson1">
                    <a style="color: #6c63ff" class="ma-4">Different knives.</a>
                  </router-link>
                  <v-img
                    class="ma-2 pa-2"
                    style="max-width: 25px; width: 25px;"
                    src="../assets/checkmark.svg"
                  ></v-img>
                  <v-row>
                    <p class="subtitle-1 ma-12">This is a description of this lesson.</p>
                  </v-row>
                </v-list-item>
              </v-list>
              <v-list-item>
                <v-title class="ma-2 pa-2">
                  <strong>Lesson 1</strong>
                </v-title>
                <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                <router-link tag="a" to="/cooking/lesson2">
                  <a style="color: #6c63ff" class="ma-4">Holding the knife</a>
                </router-link>
                <v-row>
                  <p class="subtitle-1 ma-12">This is a description of this lesson.</p>
                </v-row>
              </v-list-item>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-img
              class="ma-5"
              style="width: 100px; height: 100px; max-width: 100px;"
              src="../assets/fire.png"
            ></v-img>
            <v-title style="font-size: 2em">Topic 2</v-title>
            <v-subtitle-1 style="color:#6c63ff">
              <strong style="font-size: 2em;">Spices, Heat, and Oil</strong>
            </v-subtitle-1>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-list>
                <v-list-item>
                  <v-title class="ma-2 pa-2">
                    <strong>Lesson 1</strong>
                  </v-title>
                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                  <router-link tag="a" to="/cooking/lesson1">
                    <a style="color: #6c63ff" class="ma-4">Different knives.</a>
                  </router-link>
                  <v-img
                    class="ma-2 pa-2"
                    style="max-width: 25px; width: 25px;"
                    src="../assets/checkmark.svg"
                  ></v-img>
                  <v-row>
                    <p class="subtitle-1 ma-12">This is a description of this lesson.</p>
                  </v-row>
                </v-list-item>
              </v-list>
              <v-list-item>
                <v-title class="ma-2 pa-2">
                  <strong>Lesson 1</strong>
                </v-title>
                <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                <router-link tag="a" to="/cooking">
                  <a style="color: #6c63ff" class="ma-4">Holding the knife</a>
                </router-link>
                <v-row>
                  <p class="subtitle-1 ma-12">This is a description of this lesson.</p>
                </v-row>
              </v-list-item>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>


<script>
export default {
  data: () => ({
    alignment: "center",
    justify: "center"
  })
};
</script>