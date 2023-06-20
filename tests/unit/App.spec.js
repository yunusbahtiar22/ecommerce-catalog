import { mount } from "@vue/test-utils";
import App from "@/App";

describe("App.vue", () => {
  const wrapper = mount(App);
  it("renders hello world", () => {
    expect(wrapper.html().includes("Hello World")).toBe(true);
  });
});
