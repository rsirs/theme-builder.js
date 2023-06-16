import { generateTheme } from "../src/index";

describe("generateTheme", () => {
    it("should return an object", () => {
        expect(generateTheme()).toEqual({});
    });
}
);