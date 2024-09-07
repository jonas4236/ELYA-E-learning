import { create } from "zustand";
import { UserProps } from "@/Types";

interface UserStoreState {
  user: UserProps;
  setUser: (payload: UserProps) => void;
  removeUser: () => void;
}

const initialState: UserProps = {
  id: 0,
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  career: "",
  phone: "",
  biography: "",
};

const useUserStore = create<UserStoreState>((set) => ({
  user: initialState,
  setUser: (payload: UserProps) =>
    set((state) => ({ ...state, user: payload })),
  removeUser: () => set({ user: initialState }),
}));

export default useUserStore;
