import ServerHeading from "./../js/ServerHeading";

describe("<ServerHeading />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ServerHeading />);

    expect(wrapper).toMatchSnapshot();
  });

  it("has correct server container div classname", () => {
    const wrapper = shallow(<ServerHeading />);

    const divClass = wrapper
      .find("div.server-heading-container")
      .hasClass("server-heading-container");

    expect(divClass).toBe(true);
  });

  it("has correct server number div classname", () => {
    const wrapper = shallow(<ServerHeading />);

    const divClass = wrapper
      .find("div.server-number")
      .hasClass("server-number");

    expect(divClass).toBe(true);
  });

  it("has correct server input div classname", () => {
    const wrapper = shallow(<ServerHeading />);

    const divClass = wrapper.find("div.server-input").hasClass("server-input");

    expect(divClass).toBe(true);
  });

  it("displays h1 text correctly", () => {
    const wrapper = shallow(<ServerHeading />);

    const text = wrapper.find("h1").text();

    expect(text).toEqual("Servers");
  });

  it("calls handleInput on change", () => {
    const spy = sinon.spy();
    const wrapper = mount(<ServerHeading handleInput={spy} />);

    wrapper.find("#filter").simulate("change");

    expect(spy.calledOnce).toBe(true);
  });
});
