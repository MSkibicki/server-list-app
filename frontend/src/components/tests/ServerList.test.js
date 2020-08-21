import ServerList from "./../js/ServerList";
import ServerHeading from "./../js/ServerHeading";
import TableHeading from "./../js/TableHeading";

describe("ServerList />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ServerList />);

    expect(wrapper).toMatchSnapshot();
  });

  it("has correct div classname", () => {
    const wrapper = shallow(<ServerList />);

    const divClass = wrapper
      .find("div.server-container")
      .hasClass("server-container");

    expect(divClass).toBe(true);
  });

  it("has correct ul classname", () => {
    const wrapper = shallow(<ServerList />);

    const ulClass = wrapper.find("ul.server-list").hasClass("server-list");

    expect(ulClass).toBe(true);
  });

  it("renders <ServerHeading /> component", () => {
    const wrapper = shallow(<ServerList />);

    const heading = wrapper.find(ServerHeading);

    expect(heading.length).toEqual(1);
  });

  it("renders <TableHeading /> component", () => {
    const wrapper = shallow(<ServerList />);

    const table = wrapper.find(TableHeading);

    expect(table.length).toEqual(1);
  });
});
