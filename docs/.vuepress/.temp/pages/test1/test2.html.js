export const data = JSON.parse("{\"key\":\"v-5bb3f222\",\"path\":\"/test1/test2.html\",\"title\":\"Title of this page index 2\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Title of this page index 2\",\"description\":\"Description of this page\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"test1/test2.md\"}")

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
