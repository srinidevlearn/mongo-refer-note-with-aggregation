export const data = JSON.parse("{\"key\":\"v-d556fb2e\",\"path\":\"/test1/\",\"title\":\"Title of this page\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Title of this page\",\"description\":\"Description of this page\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"test1/index.md\"}")

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
