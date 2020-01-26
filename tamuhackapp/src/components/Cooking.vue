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
            <p style="font-size: 2em">Topic 1</p>
            <p style="color:#6c63ff">
              <strong style="font-size: 2em;">Knife Skills</strong>
            </p>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-list>
                <v-list-item>
                  <p class="ma-2 pa-2">
                    <strong>Lesson 1</strong>
                  </p>
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
                <v-list-item>
                  <p class="ma-2 pa-2">
                    <strong>Lesson 2</strong>
                  </p>
                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                  <router-link tag="a" to="/cooking/lesson2">
                    <a style="color: #6c63ff" class="ma-4">Holding the knife</a>
                  </router-link>
                  <v-row>
                    <p class="subtitle-1 ma-12">This is a description of this lesson.</p>
                  </v-row>
                </v-list-item>
                <v-list-item>
                  <p class="ma-2 pa-2">
                    <strong>Lesson 3</strong>
                  </p>
                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                  <router-link tag="a" to="/cooking/lesson3">
                    <a style="color: #6c63ff" class="ma-4">Different Knife Cuts</a>
                  </router-link>
                  <v-row>
                    <p class="subtitle-1 ma-12">This is a description of this lesson.</p>
                  </v-row>
                </v-list-item>
              </v-list>
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
            <p style="font-size: 2em">Topic 2</p>
            <p style="color:#6c63ff">
              <strong style="font-size: 2em;">Spices, Heat, and Oil</strong>
            </p>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-list>
                <v-list-item>
                  <p class="ma-2 pa-2">
                    <strong>Lesson 1</strong>
                  </p>
                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                  <router-link tag="a" to="/cooking/lesson4">
                    <a style="color: #6c63ff" class="ma-4">The Basics</a>
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
                <v-list-item>
                  <p class="ma-2 pa-2">
                    <strong>Lesson 2</strong>
                  </p>
                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                  <router-link tag="a" to="/cooking/lesson5">
                    <a style="color: #6c63ff" class="ma-4">Saute & Sear</a>
                  </router-link>
                  <v-row>
                    <p class="subtitle-1 ma-12">This is a description of this lesson.</p>
                  </v-row>
                </v-list-item>
                <v-list-item>
                  <p class="ma-2 pa-2">
                    <strong>Lesson 3</strong>
                  </p>
                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                  <router-link tag="a" to="/cooking/lesson6">
                    <a style="color: #6c63ff" class="ma-4">Oil and Pan Types</a>
                  </router-link>
                  <v-row>
                    <p class="subtitle-1 ma-12">This is a description of this lesson.</p>
                  </v-row>
                </v-list-item>
              </v-list>
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
    justify: "center",
    fireData: null,
    firedata2: null
  })
};
</script>