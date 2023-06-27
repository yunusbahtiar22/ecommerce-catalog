import { shallowMount } from "@vue/test-utils";
import CardRating from "@/components/CardRating.vue";

describe("CardRating.vue", () => {
  const wrapper = shallowMount(CardRating, {
    propsData: {
      value: 3.9,
      category: "men's clothing",
    },
  });

  it("renders 5 dots", () => {
    expect(wrapper.findAll("span").length).toEqual(5);
  });

  it("renders filled dots based on props given", () => {
    // filled dots are those without .rating--outline class
    // so here is 5 - 1 = 4 dots which is rounded from 3.9
    // to lazy to refactor the classname
    expect(wrapper.findAll(".rating--outline").length).toEqual(1);
  });
});
