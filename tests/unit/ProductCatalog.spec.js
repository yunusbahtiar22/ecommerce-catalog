import { shallowMount } from "@vue/test-utils";
import ProductCatalog from "@/components/ProductCatalog.vue";

describe("ProductCatalog.vue", () => {
  const wrapper = shallowMount(ProductCatalog);
  const product = wrapper.findComponent({ name: "ProductCard" });

  beforeEach(() => {
    wrapper.vm.productIndex = 1;
  });

  it("renders ProductCard", () => {
    expect(product.exists()).toBe(true);
  });

  describe("productIndex", () => {
    it("it's initial value should be 1", () => {
      expect(wrapper.vm.productIndex).toEqual(1);
    });

    it("never goes bellow it's initial value", () => {
      wrapper.vm.decrementIndex();
      expect(wrapper.vm.productIndex).toEqual(1);
    });

    it("never goes above maxProduct", () => {
      wrapper.vm.productIndex = wrapper.vm.maxProduct;
      wrapper.vm.incrementIndex();
      expect(wrapper.vm.productIndex).toEqual(20);
    });
  });

  describe("incrementIndex and decrementIndex methods", () => {
    it("increments productIndex by one when called", () => {
      wrapper.vm.incrementIndex();
      expect(wrapper.vm.productIndex).toEqual(2);
    });

    it("decrements productIndex by one when called", () => {
      wrapper.vm.decrementIndex();
      expect(wrapper.vm.productIndex).toEqual(1);
    });
  });
});
