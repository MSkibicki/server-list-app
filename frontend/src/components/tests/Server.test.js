import Server from "./../js/Server";
import ServerMenu from "./../js/ServerMenu";

describe("Server />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Server />);

    expect(wrapper).toMatchSnapshot();
  });

  it("has correct li classname", () => {
    const wrapper = shallow(<Server />);

    const liClass = wrapper.find("li.server").hasClass("server");

    expect(liClass).toBe(true);
  });

  it("renders <ServerMenu /> component", () => {
    const wrapper = shallow(<Server />);

    const menu = wrapper.find(ServerMenu);

    expect(menu.length).toEqual(1);
  });
});
