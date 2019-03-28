export default {
	namespace: true,
	state: {
		localCount: {

		}
	},
	getters: {
		derivativeCount (state) {
			return state
		}
	},
	mutations: {
		SET_COUNT (state, payload) {
			state = payload
		}
	},
	actions: {
		login ({ commit }, payload) {
			commit('SET_COUNT', payload)
		}
	}
}
