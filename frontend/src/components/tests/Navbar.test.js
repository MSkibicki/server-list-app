import Navbar from "./../js/Navbar";

describe("<Navbar />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper).toMatchSnapshot();
  });

  it("has correct nav classname", () => {
    const wrapper = shallow(<Navbar />);

    const divClass = wrapper.find("nav").hasClass("navbar");

    expect(divClass).toBe(true);
  });

  it("displays h1 text correctly", () => {
    const wrapper = shallow(<Navbar />);

    const text = wrapper.find("h1").text();

    expect(text).toEqual("Recruitment task");
  });
});
