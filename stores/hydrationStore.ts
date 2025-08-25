import {create} from "zustand";

type HydrationState = {
    themeHydrated: boolean;
    authHydrated: boolean;
    queryHydrated: boolean;

    // Derived
    progress: number;
    allHydrated: boolean;

    // Actions
    setHydrated: (key: "themeHydrated" | "authHydrated" | "queryHydrated") => void;
};

export const useHydrationStore = create<HydrationState>((set, get) => ({
    themeHydrated: false,
    authHydrated: false,
    queryHydrated: false,

    progress: 0,
    allHydrated: false,

    setHydrated: (key) => {
        set((state) => {
            const updated = {...state, [key]: true};

            const total = 3; // aantal providers dat je hydrateert
            const count = [updated.themeHydrated, updated.authHydrated, updated.queryHydrated].filter(Boolean).length;

            return {
                ...updated,
                progress: count / total,
                allHydrated: count === total,
            };
        });
    },
}));
