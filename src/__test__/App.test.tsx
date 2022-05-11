import { render } from "@testing-library/react";
import App from "../App";

describe("Component: <App/>", () => {
    test("Renders correctly", () => {
        const component = render(<App />);
        expect(component.container).toHaveTextContent("Home");
    });
});
