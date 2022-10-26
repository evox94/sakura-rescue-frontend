import create from 'zustand'

export const useSaveCounterStore = create<CounterState>((set) => ({
    count: undefined,
    setCount: (c: number) => set({ count: c }),
    fetch: (username: string) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(5);
                set({ count: 5 });
            },5000)
        });
    }
}))

interface CounterState {
    count?: number
    setCount: (c: number) => void
    fetch: (username: string) => Promise<number>
}