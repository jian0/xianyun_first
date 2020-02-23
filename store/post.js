export const state = () => {
    return {
        followInfo: {}
    }
}

export const mutations = {
    getFollowInfo(state, data) {
        state.followInfo = data
    }
}
