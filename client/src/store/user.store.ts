import { create } from "zustand";
import axios from "axios";
import { GetUserDataProps } from "@/Types";
import Cookies from "js-cookie";

interface UserState {
  user: GetUserDataProps[];
  fetchUser: () => Promise<void>;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: [],
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
  clearUser: () => set({ user: [] }),
}));
