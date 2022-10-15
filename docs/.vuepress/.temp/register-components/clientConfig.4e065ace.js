import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("HomeCard", defineAsyncComponent(() => import("C:/ng-app/mongodoc/docs/.vuepress/components/HomeCard.vue"))),
      app.component("MongoPlayground", defineAsyncComponent(() => import("C:/ng-app/mongodoc/docs/.vuepress/components/MongoPlayground.vue")))
  },
}
