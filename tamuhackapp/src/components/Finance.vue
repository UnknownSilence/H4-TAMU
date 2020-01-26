<template>
  <div class="justify-center" id="auto">
    <v-container>
      <v-row class="justify-center">
        <h2 class="justify-center">
          Keep those numbers
          <strong style="color: #6c63ff">high</strong>
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
              src="../assets/old.png"
            ></v-img>
            <p style="font-size: 2em">Topic 1</p>
            <p style="color:#6c63ff">
              <strong style="font-size: 2em;">401(k)</strong>
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
                  <router-link tag="a" to="/finance/lesson1">
                    <a style="color: #6c63ff" class="ma-4">What is it?</a>
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
                  <router-link tag="a" to="/finance/lesson2">
                    <a style="color: #6c63ff" class="ma-4">How do I apply for one?</a>
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
              src="../assets/money.png"
            ></v-img>
            <p style="font-size: 2em">Topic 2</p>
            <p style="color:#6c63ff">
              <strong style="font-size: 2em;">IRS 1040</strong>
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
                  <router-link tag="a" to="/finance/lesson3">
                    <a style="color: #6c63ff" class="ma-4">What is it?</a>
                  </router-link>
                  <v-row>
                    <p class="subtitle-1 ma-12">This is a description of this lesson.</p>
                  </v-row>
                </v-list-item>
                <v-list-item>
                  <p class="ma-2 pa-2">
                    <strong>Lesson 2</strong>
                  </p>
                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                  <router-link tag="a" to="/finance/lesson4">
                    <a style="color: #6c63ff" class="ma-4">How do I fill the IRS 1040</a>
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