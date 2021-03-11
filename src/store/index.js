import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'vuex-todo',
});

export default new Vuex.Store({
  state: {
    todoItems: [
      {
        id: 1,
        title: 'Pray',
        isCompleted: false,
        description: 'Pray my 5 daily prayers and at least 6 voluntary ones',
      },
      {
        id: 2,
        title: 'Eat',
        isCompleted: false,
        description: 'Breakfast, Lunch, Dinner with between-meals intake',
      },
      {
        id: 3,
        title: 'Code',
        isCompleted: false,
        description: 'Check on VueX Modules and complete my unfinished projects',
      },
      {
        id: 4,
        title: 'Read',
        isCompleted: false,
        description: 'Read The Alchemist again',
      },
      {
        id: 5,
        title: 'Sleep',
        isCompleted: false,
        description: 'Six hours of Sleep',
      },
    ],
    deletedItems: [],
    currentID: 0,
  },
  // persist: ['todoItems'],
  getters: {
    getTodoItems: (state) => state.todoItems,
    getTodoById: (state) => (id) => (state.todoItems.find((item) => item.id === id)),
    getDeletedTodos: (state) => state.deletedItems,
    getDeletedTodoById: (state) => (id) => (state.deletedItems.find((item) => item.id === id)),
  },
  plugins: [vuexLocal.plugin],
  mutations: {
    updateTodoItems: (state, payload) => {
      state.todoItems.push(payload);
    },
    updateDeletedItems: (state, payload) => {
      state.todoItems = state.todoItems.filter((item) => item !== payload);
      state.deletedItems.push(payload);
    },
    updateCurrentID: (state) => { state.currentID += 1; },
    updateRemoveItem(state, payload) {
      state.todoItems = state.todoItems.filter((item) => item.id !== payload);
    },
  },
  actions: {
    addTodoItem(context, payload) {
      const { currentID } = context.state.currentID;
      const data = {
        ...payload,
        id: currentID + 1,
        isCompleted: false,
      };
      context.commit('updateTodoItems', data);
      context.commit('updateCurrentID');
    },
    deleteTodoItem(context, payload) {
      context.commit('updateDeletedItems', payload);
      context.commit('removeItem', payload);
    },
    // restoreTodoItem(context, payload) {
    //   const currentTodo = context.state.deletedItems.find((item) => item.id = payload);
    //   context.commit('updateTodoItems', currentID);
    //   context.commit('removeItem', payload);
    // },
  },
});
