import { mount } from "@vue/test-utils";
import ProductCatalog from "@/components/ProductCatalog.vue";

global.fetch = jest.fn();

describe("ProductCatalog.vue", () => {
  const wrapper = mount(ProductCatalog);
  const product = wrapper.findComponent({ name: "ProductCard" });

  beforeEach(() => {
    wrapper.vm.productIndex = 1;
  });

  it("renders ProductCard if is not loading", () => {
    expect(product.exists()).toBe(true);
  });

  it("makes api call when mounted", () => {
    expect(fetch).toHaveBeenCalled();
  });

  describe("productIndex", () => {
    it("it's initial value should be 1", () => {
      expect(wrapper.vm.productIndex).toEqual(1);
    });

    it("it resets when after maxProduct", () => {
      wrapper.vm.productIndex = wrapper.vm.maxProduct;
      wrapper.vm.incrementIndex();
      expect(wrapper.vm.productIndex).toEqual(1);
    });
  });

  describe("incrementIndex methods", () => {
    it("increments productIndex by one when called", () => {
      wrapper.vm.incrementIndex();
      expect(wrapper.vm.productIndex).toEqual(2);
    });
  });
});
