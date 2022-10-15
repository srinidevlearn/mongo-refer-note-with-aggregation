import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({  app, router, siteData }) {

    router.beforeEach((to) => {
      console.log(to, "before navigation");
    });

    router.afterEach((to) => {
      console.log(to, "after navigation");
    });
  },
  setup() {},
  rootComponents: [],
});
