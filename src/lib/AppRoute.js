
import router from './../router'

export default {
  checkPath() {

  },
  go(path, params) {
    try {
      params = params || {};
      router.push({ path: path, query: params });
    } catch (error) {
      console.log(error)
    }
    
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

