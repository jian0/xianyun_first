export const state = () => {
    return {
        a: 123
    }
}

// 储存异步操作
export const actions = {
    getTextList(store,data){
         return this.$axios({
              url : '/posts',
              params : {
                city : data
              }
            })
    }
}