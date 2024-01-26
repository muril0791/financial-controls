<template>
  <v-app>
    <v-main>
      <section>
        <router-view></router-view>
      </section>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
