<template>
  <div>Loading...</div>
</template>

<script>
export default {
  created() {
    this.unwatch = this.$watch(
      () => this.$store.getters["loginUser/status"],
      (status) => {
        if (status !== "loading") {
          this.$router.push(this.$route.query.returnUrl || "/").catch(() => {});
        }
      },
      { immediate: true }
    );
  },
  destroyed() {
    this.unwatch();
  },
};
</script>

<style>
</style>