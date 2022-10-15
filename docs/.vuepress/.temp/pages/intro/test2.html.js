export const data = JSON.parse("{\"key\":\"v-95f82116\",\"path\":\"/intro/test2.html\",\"title\":\"Title of this page index 2\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Title of this page index 2\",\"description\":\"Description of this page\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"intro/test2.md\"}")

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
