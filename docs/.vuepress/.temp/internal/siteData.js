export const siteData = JSON.parse("{\"base\":\"/mongo-qrf/\",\"lang\":\"en-US\",\"title\":\"Quick-Reference-Notes\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
