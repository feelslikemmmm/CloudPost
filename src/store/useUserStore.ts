import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
};

type UserStore = {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage', // 로컬 스토리지에 저장될 키
    }
  )
);
