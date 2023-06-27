import { shallowMount } from "@vue/test-utils";
import ProductCard from "@/components/ProductCard.vue";

const mockData = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};

describe("ProductCard.vue", () => {
  const wrapper = shallowMount(ProductCard, {
    propsData: {
      product: mockData,
    },
  });
  const img = wrapper.get("img");
  it("renders correctly", () => {
    expect(wrapper.html().includes(mockData.title)).toBe(true);
    expect(wrapper.html().includes(mockData.description)).toBe(true);
    expect(img.attributes("src")).toBe(mockData.image);
  });
});
