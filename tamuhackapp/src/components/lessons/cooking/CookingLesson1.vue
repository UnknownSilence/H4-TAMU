<template>
  <div class="justify-center" id="cooking">
    <v-container>
      <p class="text-muted">Knife Skills > Lesson 1</p>
      <v-row class="justify-center">
        <h2 class="justify-center">
          Lesson 1:
          <strong style="color: #6c63ff">Different Knives</strong>.
        </h2>
      </v-row>
      <v-divider></v-divider>
      <v-row class="ma-6 justify-center">
        <p
          class="title"
        >The main knife you need for cooking in the kitchen is a standard chef’s knife. This is the large knife pictured above. The blade is usually six to 10 inches long (eight inches is standard). There is no one right chef’s knife for everyone; you should have something that is sharp and feels good in your hand.</p>

        <p
          class="title"
        >A chef’s knife will do the bulk of your cutting, and you don’t need much more. But there are two others that are pretty essential.</p>
        <v-img
          style="max-width: 40%; min-width: 40%;"
          class="ma-3"
          src="http://cdn.shopify.com/s/files/1/1186/5476/products/paring-knife-black-191015-shoppage_grande.jpg?v=1571064549"
        />
        <p
          class="title"
        >Paring knife. This is extremely useful for doing close-up work like cutting eyes out of potatoes, peeling vegetables, segmenting citrus fruit, or deveining shrimp, among other things.</p>
        <v-img
          style="max-width: 40%; min-width: 40%;"
          class="ma-3"
          src="https://cdn.shopify.com/s/files/1/1186/5476/products/serrated-knife-gray-191015-shoppage_grande.jpg?v=1571081602"
        />
        <p
          class="title"
        >Neither the paring knife nor the serrated knife need to be particularly expensive</p>

        <v-img style="max-width: 40%; min-width: 40%;" class="ma-3" src="../../../assets/t1l1.svg" />
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