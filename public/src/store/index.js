import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },
  mutations: {
    setResults(state, results){
      state.results = results
    },
    setPlaylist(state, track) {
      state.track = track
    }
  },
  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
      // var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      // var apiUrl = url + encodeURIComponent(url2);
      $.get(url2).then(data => {
        data = JSON.parse(data)
        commit('setResults', data.results)
      })
    },
    getMyTunes({commit, dispatch}){
      //this should send a get request to your server to return the list of saved tunes
    },
    addToMyTunes({ commit, dispatch }, track) {
      $.post('/mytunes').then(track => {
        track = data.results.trackName
        commit('')
      })
    },
    removeTrack({commit, dispatch}, track){
      //Removes track from the database with delete
    },
    promoteTrack({commit, dispatch}, track){
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({commit, dispatch}, track){
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
