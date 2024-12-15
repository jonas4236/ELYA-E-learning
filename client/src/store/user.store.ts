import { create } from "zustand";
import axios from "axios";
import { CartDataProp, GetUserDataProps } from "@/Types";
import Cookies from "js-cookie";

interface UserState {
  user: GetUserDataProps[];
  cartData: CartDataProp[];
  fetchUser: () => Promise<void>;
  fetchCart: (userId: string) => Promise<void>;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: [],
  cartData: [],
  fetchUser: async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_FETCH_USER}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      );
      set({ user: [data] });
    } catch (error) {
      console.log("Error fetching data user:", error);
    }
  },
  fetchCart: async (userId: string) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_FETCH_CART}`.replace(":id", userId)
      );
      set({ cartData: data });
    } catch (error) {
      console.log(`error cannot fetchCart because : ${error}`);
    }
  },
  clearUser: () => set({ user: [], cartData: [] }),
}));