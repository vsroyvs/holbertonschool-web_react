import React from "react";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import CourseListRow from "./CourseListRow";

configure({ adapter: new Adapter() });

describe("Testing CourseListRow Component", () => {

  let props = {
    isHeader: true,
    textFirstCell: "textFirstCell",
    textSecondCell: "textSecondCell",
  };

  it("Test isHeader is true", () => {

    let wrap = shallow(<CourseListRow {...props} textSecondCell={null}/>);

    expect(
      wrap.contains(
        <tr>
          <th colSpan={2}>{props.textFirstCell}</th>
        </tr>
      )
    ).to.equal(true);
  });

  it("Test if it renders 2 cells when textSecondCell exists and isHeader is true", () => {

    let component = shallow(<CourseListRow {...props} />);

    expect(
      component.contains(
        <tr>
          <th>{props.textFirstCell}</th>
          <th>{props.textSecondCell}</th>
        </tr>
      )
    ).to.equal(true);
  });

  it("Test isHeader is false", () => {

    let component = shallow(<CourseListRow {...props} isHeader={false}/>);

    expect(
      component.contains(
        <tr>
          <td>{props.textFirstCell}</td>
          <td>{props.textSecondCell}</td>
        </tr>
      )
    ).to.equal(true);
  });
});