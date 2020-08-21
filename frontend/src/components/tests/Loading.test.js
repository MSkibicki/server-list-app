import Loading from "./../js/Loading";

describe("<Loading />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper).toMatchSnapshot();
  });

  it("displays h1 text correctly", () => {
    const wrapper = shallow(<Loading />);

    const text = wrapper.find(".loading-text").text();

    expect(text).toEqual("Loading...");
  });

  it("has correct div classname", () => {
    const wrapper = shallow(<Loading />);

    const divClass = wrapper.find("div").hasClass("loading");

    expect(divClass).toBe(true);
  });

  it("has correct h1 classname", () => {
    const wrapper = shallow(<Loading />);

    const headingClass = wrapper.find("h1").hasClass("loading-text");

    expect(headingClass).toBe(true);
  });
});
