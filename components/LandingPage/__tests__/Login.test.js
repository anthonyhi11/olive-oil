import React from "react";
import {render} from "@testing-library/react";
import Login from "../Login";

it("Renders and matches snapshot", () => {
	const {container} = render(<Login show={true} handleClose={() => {}} />);
	expect(container).toMatchSnapshot();
});
