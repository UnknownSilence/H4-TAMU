<template>
  <div class="justify-center" id="auto">
    <v-container>
      <v-row class="justify-center">
        <h2 class="justify-center">
          Lets work on that
          <strong style="color: #6c63ff">rust</strong> bucket
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
              src="../assets/tire.png"
            ></v-img>
            <p style="font-size: 2em">Topic 1</p>
            <p style="color:#6c63ff">
              <strong style="font-size: 2em;">Tire Changing</strong>
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
                  <router-link tag="a" to="/auto/lesson1">
                    <a style="color: #6c63ff" class="ma-4">Jacking up the vehicle</a>
                  </router-link>
                  <v-img
                    class="ma-2 pa-2"
                    style="max-width: 25px; width: 25px;"
                    src="../assets/checkmark.svg"
                  ></v-img>
                  <v-row>
                    <p class="subtitle-1 ma-12">How do I jack it? Where do I jack it?</p>
                  </v-row>
                </v-list-item>
                <v-list-item>
                  <p class="ma-2 pa-2">
                    <strong>Lesson 2</strong>
                  </p>
                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                  <router-link tag="a" to="/auto/lesson2">
                    <a style="color: #6c63ff" class="ma-4">Changing the tire</a>
                  </router-link>
                  <v-row>
                    <p class="subtitle-1 ma-12">Proper way to change a flat tire.</p>
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
              src="../assets/oil.png"
            ></v-img>
            <p style="font-size: 2em">Topic 2</p>
            <p style="color:#6c63ff">
              <strong style="font-size: 2em;">Oil Checking</strong>
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
                  <router-link tag="a" to="/auto/lesson3">
                    <a style="color: #6c63ff" class="ma-4">Checking your oil</a>
                  </router-link>
                  <v-row>
                    <p class="subtitle-1 ma-12">What it is, how to do it, and why you need to.</p>
                  </v-row>
                </v-list-item>
                <v-list-item>
                  <p class="ma-2 pa-2">
                    <strong>Lesson 2</strong>
                  </p>
                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                  <router-link tag="a" to="/auto/lesson4">
                    <a style="color: #6c63ff" class="ma-4">Adding Oil</a>
                  </router-link>
                  <v-row>
                    <p class="subtitle-1 ma-12">Proper way to add oil and what type to get.</p>
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