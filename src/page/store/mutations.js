import { SHOWLOADING,HIDELOADING,userMessagesList } from './type.js'

const state = {
  showLoading:false,
  power:{},
}

const mutations = {
  [SHOWLOADING](state){
    state.showLoading = true;
  },
  [HIDELOADING](state){
    state.showLoading = false;
  },
  userMessagesList: (state,value) => {
    state.power=value
  },
}

const getters = {
  showLoading(state){
    return state.showLoading
  },
  userMessagesList: state => {
    return state.power
  },
}
export default {
  state,mutations,getters
}
