import { defineClientConfig } from "@vuepress/client";
import { defineAsyncComponent } from "vue";
import CodeTabs from "C:/ng-app/mongodoc/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import "C:/ng-app/mongodoc/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "C:/ng-app/mongodoc/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import Presentation from "C:/ng-app/mongodoc/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import "C:/ng-app/mongodoc/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("Presentation", Presentation);
    
  }
});