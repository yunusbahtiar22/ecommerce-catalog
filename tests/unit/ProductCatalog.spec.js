import { shallowMount } from "@vue/test-utils";
import ProductCatalog from "@/components/ProductCatalog.vue";
import ProductCard from "@/components/ProductCard.vue";
import ProductCardBase from "@/components/ProductCardBase.vue";
import ProductCardError from "@/components/ProductCardError.vue";

global.fetch = jest.fn();

describe("ProductCatalog.vue", () => {
  const wrapper = shallowMount(ProductCatalog);

  beforeEach(() => {
    wrapper.vm.productIndex = 1;
    wrapper.vm.loading = false;
    wrapper.vm.error = false;
  });

  it("renders ProductCard if is not loading and not error", () => {
    expect(wrapper.findComponent(ProductCard).exists()).toBe(true);
  });

  it("renders ProductCardBase when loading", async () => {
    wrapper.vm.loading = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(ProductCardBase).exists()).toBe(true);
  });

  it("renders ProductCardError when error", async () => {
    wrapper.vm.error = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(ProductCardError).exists()).toBe(true);
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
