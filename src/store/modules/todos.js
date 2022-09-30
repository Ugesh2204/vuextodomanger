import axios  from "axios";

const state = {
  todos: [
    // {
    //     id: 1,
    //     title: 'Todo One'
    // },
    // {
    //     id: 2,
    //     title: 'Todo Two'
    // }
  ]

};
const getters = {
    //To display our state we need to add this in the getter
    allTodos: (state) => state.todos

};
const actions = {
  //we do not call mutation directly we call it commit
  async fetchTodos(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(response.data)
  }


};
const mutations = {};
export default {
    state,
    getters,
    actions,
    mutations
}