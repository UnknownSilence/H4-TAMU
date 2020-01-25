<template>
  <div class="justify-center" id="cooking">
    <v-container>
      <v-row class="justify-center">
        <h2 class="justify-center">
          Get ready for
          <strong style="color: #6c63ff">life.</strong>
        </h2>
      </v-row>
    </v-container>
    <v-container class="fill-height justify-center">
      <v-row class="fill-height justify-center" style="width: 100%">
        <v-col cols="12" class="justify-center">
          <v-row :align="alignment" :justify="justify" class="fill-height">
            <v-card class="ma-3 pa-4" outlined tile>
              <v-card-title class="justify-center">Cooking</v-card-title>
              <v-img
                style="max-width: 300px; min-height: 250px"
                class="justify-center"
                src="../assets/chef.svg"
              />
              <v-card-actions class="justify-center" style="margin: 0 auto">
                <router-link tag="v-btn" to="/cooking">
                  <v-btn style="margin: 0 auto" class="justify-center">Learn to cook</v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
            <v-card class="ma-3 pa-4" outlined tile>
              <v-card-title class="justify-center">Automotive</v-card-title>
              <v-img
                style="max-width: 300px; min-height: 250px;"
                class="justify-center"
                src="../assets/car.svg"
              />
              <v-card-actions class="justify-center" style="margin: 0 auto">
                <router-link tag="v-btn" to="/auto">
                  <v-btn style="margin: 0 auto" class="justify-center">Get your wrench</v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
            <v-card class="ma-3 pa-4" outlined tile>
              <v-card-title class="justify-center">Finance</v-card-title>
              <v-img
                style="max-width: 300px; min-height: 250px;"
                class="justify-center"
                src="../assets/finance.svg"
              />
              <v-card-actions class="justify-center" style="margin: 0 auto">
                <router-link tag="v-btn" to="/finance">
                  <v-btn style="margin: 0 auto" class="justify-center">Make that bread</v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
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