import { shallowMount } from "@vue/test-utils";
import ProductCard from "@/components/ProductCard.vue";

describe("ProductCard.vue", () => {
  const wrapper = shallowMount(ProductCard);
  it("renders correctly", () => {
    expect(wrapper.get("img").exists()).toBe(true);
    expect(wrapper.get("h2").exists()).toBe(true);
    expect(wrapper.get("p").exists()).toBe(true);
  });
});
