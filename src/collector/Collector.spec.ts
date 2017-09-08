import {ResultType} from "../types/result.type";
import {Collector} from "./Collector";

describe("Collector", () => {
    test("should correctly add errors", () => {
        const collector = Collector.create();
        const errorMock = {
            description: "error",
            param: false,
        };

        collector.addError(errorMock);
        expect(collector.getErrors()).toContainEqual({
            ...errorMock,
            type: ResultType.Error,
        });
    });
});
