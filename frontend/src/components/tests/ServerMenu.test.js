import ServerMenu from "./../js/ServerMenu";

describe("<ServerMenu />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ServerMenu />);

    expect(wrapper).toMatchSnapshot();
  });

  it("has correct div classname", () => {
    const wrapper = shallow(<ServerMenu />);

    const divClass = wrapper.find("div.server-icon").hasClass("server-icon");

    expect(divClass).toBe(true);
  });
});
