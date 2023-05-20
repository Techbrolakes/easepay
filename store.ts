import { create } from 'zustand';

interface GlobalStore {
   nav: boolean;
   setNav: (nav: boolean) => void;
}

const useGlobalStore = create<GlobalStore>((set) => ({
   nav: false,
   setNav: (nav: boolean) => set(() => ({ nav })),
}));

export default useGlobalStore;
