import React from "react";
import {render} from "@testing-library/react";
import Header from "../Header";

test("renders and matches snapshot", () => {
	const {container} = render(<Header active="/" />);
	expect(container).toMatchSnapshot();
});
