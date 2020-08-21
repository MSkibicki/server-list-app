import TableHeading from "./../js/TableHeading";

describe("<TableHeading />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<TableHeading />);

    expect(wrapper).toMatchSnapshot();
  });

  it("has correct div classname", () => {
    const wrapper = shallow(<TableHeading />);

    const divClass = wrapper.find("div").hasClass("table-heading");

    expect(divClass).toBe(true);
  });

  it("has correct name paragraph classname", () => {
    const wrapper = shallow(<TableHeading />);

    const paragraphNameClass = wrapper.find("p.name").hasClass("name");

    expect(paragraphNameClass).toBe(true);
  });

  it("has correct status paragraph classname", () => {
    const wrapper = shallow(<TableHeading />);

    const paragraphStatusClass = wrapper.find("p.status").hasClass("status");

    expect(paragraphStatusClass).toBe(true);
  });

  it("displays paragraph text correctly", () => {
    const wrapper = shallow(<TableHeading />);

    const text = wrapper.find("p.name").text();

    expect(text).toEqual("name");
  });

  it("displays paragraph text correctly", () => {
    const wrapper = shallow(<TableHeading />);

    const text = wrapper.find("p.status").text();

    expect(text).toEqual("status");
  });
});
