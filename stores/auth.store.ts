interface User {
  name: string,
  email: string,
  password: string,
  lastName: string,
  address: string,
  chosenProducts: string[],
  cartProducts: string[],
}

const initialData: {user: User} = {
  user: {
    name: '',
    email: '',
    password: '',
    lastName: '',
    address: '',
    chosenProducts: [],
    cartProducts: []
  }
}

export const useAuthStore = defineStore('auth', {
  state: () => initialData,
  getters: {
    currentUser: (state) => state.user
  },
  actions: {
    set(user: User){
      this.$patch({user})
      localStorage.setItem('user', JSON.stringify(user))
    },
    clear(){
      this.$patch(initialData)
    }
  }
})