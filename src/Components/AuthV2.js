import create from "zustand";
import { persist } from "zustand/middleware"

let store = (set) => ({
  user: {
    email: '',
    password: '',
  },
  
  isLoggedIn: false,
  setUser: (user) => set({ user }),
  setLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  logout: (user) => set({ user, isLoggedIn: false })



})

store = persist(store)

const useAuthStore = create(store);


export default useAuthStore;  