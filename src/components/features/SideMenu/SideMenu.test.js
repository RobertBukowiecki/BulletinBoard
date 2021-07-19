import React from "react";
import { shallow } from "enzyme";
import { SiteMenuComponent } from "./SideMenu";

describe("Component SiteMenu", () => {
  it("should render without crashing", () => {
    const component = shallow(<SiteMenuComponent />);
    expect(component).toBeTruthy();
  });
});
