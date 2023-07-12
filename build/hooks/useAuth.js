import { create } from "zustand";
const useAuth = create((set, get) => ({
    count: 1,
    increaseCount: () => set((state) => {
        return {
            count: state.count + 1,
            totalFee: (state.count * state.costFee) + state.shippingFee
        };
    }),
    decreaseCount: () => set((state) => {
        return {
            count: state.count - 1,
            totalFee: (state.count * state.costFee) + state.shippingFee
        };
    }),
    shippingFee: 8584.00,
    costFee: 268584,
    totalFee: 8584.00 + 268584
}));
export default useAuth;
