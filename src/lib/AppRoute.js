
import router from './../router'

export default {
  go(path, params) {
    params = params || {};
    router.push({ path: path, query: params });
  },
  back() {
    if (window.history.length <= 1) {
      router.push({ path: '/' })
      return false
    } else {
      router.back()
    }
  }
}

