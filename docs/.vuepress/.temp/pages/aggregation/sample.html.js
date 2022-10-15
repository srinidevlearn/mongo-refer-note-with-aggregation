export const data = JSON.parse("{\"key\":\"v-5a3c4aa9\",\"path\":\"/aggregation/sample.html\",\"title\":\"$sample\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"$sample\",\"description\":\"$project in aggregation\",\"pageClass\":\"custom-page-class\",\"next\":\"./sort.md\",\"toc\":false},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":3.66,\"words\":1098},\"filePathRelative\":\"aggregation/sample.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
