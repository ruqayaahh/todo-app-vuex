import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoItems: [
      {
        id: 1,
        title: 'Pray',
        isCompleted: false,
        isNotcom: 2,
        description: 'Pray my 5 daily prayers and at least 6 voluntary ones',
      },
      {
        id: 2,
        title: 'Eat',
        isCompleted: false,
        isNotcom: 3,
        description: 'Breakfast, Lunch, Dinner with between-meals intake',
      },
      {
        id: 3,
        title: 'Code',
        isCompleted: false,
        isNotcom: 4,
        description: 'Check on VueX Modules and complete my unfinished projects',
      },
      {
        id: 4,
        title: 'Read',
        isCompleted: false,
        isNotcom: 5,
        description: 'Read The Alchemist again',
      },
      {
        id: 5,
        title: 'Sleep',
        isCompleted: false,
        isNotcom: 6,
        description: 'Six hours of Sleep',
      },
    ],
  },
  getters: {
    getTodoItems: (state) => state.todoItems,
    getTodoById: (state) => (id) => (state.todoItems.find((item) => item.id === id)),
  },
  mutations: {
    updateTodoItems: (state, payload) => {
      state.todoItems.push(payload);
    },
  },
  actions: {
    addTodoItem(context, payload) {
      let currentID = 0;
      const idArray = [];
      context.state.todoItems.forEach((item) => {
        idArray.push(item.id);
      });
      currentID = idArray.length ? Math.max(...idArray) : 0;
      const data = {
        ...payload,
        id: currentID + 1,
        isCompleted: false,
        isNotcom: currentID + 2,
      };
      context.commit('updateTodoItems', data);
    },
  },
  modules: {
  },
});
