import { defineStore } from "pinia";

export const useProductStore = defineStore("ProductStore", {
    state: () => {
        return {
            products: [
                {
                    image: "/images/product-one.png",
                    name: "Lira Earrings",
                    price: 20,
                    category: "earring",
                    stock: 34,
                    discountValue: 21,
                    variant: "Black/Medium",
                },
                {
                    image: "/images/product-two.png",
                    name: "Hal Earrings",
                    price: 25,
                    category: "earring",
                    stock: 4,
                    discountValue: 0,
                    variant: "Black/Medium",
                },
                {
                    image: "/images/product-three.png",
                    name: "Kaede Hair Pin Set Of 3 ",
                    price: 25,
                    category: "pin",
                    stock: 5,
                    discountValue: 0,
                    variant: "Black/Medium",
                },
                {
                    image: "/images/product-four.png",
                    name: "Hair Pin Set of 3",
                    price: 25,
                    category: "pin",
                    stock: 8,
                    discountValue: 0,
                    variant: "Black/Medium",
                },
                {
                    image: "/images/product-five.png",
                    name: "Plaine Necklace",
                    price: 25,
                    category: "necklace",
                    stock: 0,
                    discountValue: 0,
                    variant: "Black/Medium",
                },
                {
                    image: "/images/product-three.png",
                    name: "Yuki Hair Pin Set of 3",
                    price: 25,
                    category: "pin",
                    stock: 13,
                    discountValue: 0,
                    variant: "Black/Medium",
                },
            ],
        };
    },
    actions: {},
    getters: {
        allProducts: (state) => state.products,
    },
});
