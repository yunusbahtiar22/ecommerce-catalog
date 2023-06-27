import { shallowMount } from "@vue/test-utils";
import ProductCardError from "@/components/ProductCardError.vue";

describe("ProductCardError.vue", () => {
  const wrapper = shallowMount(ProductCardError);
  const button = wrapper.get("button");
  it("renders a message", () => {
    expect(wrapper.html().includes("This product is unavailable to show")).toBe(
      true
    );
  });

  it("renders next button", () => {
    expect(button.html().includes("Next Product")).toBe(true);
  });
});
