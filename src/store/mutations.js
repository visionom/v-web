export const state = {
  platform: {
    transProBar: false
  }
}

export const mutations = {
  startTrans (state) {
    state.platform.transProBar = true
  },

  stopTrans (state) {
    state.platform.transProBar = false
  }
}
