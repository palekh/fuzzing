import {getResultTypedMock, resultMock} from "../collector/__mocks__/result.mock";
import {Collector} from "../collector/Collector";
import {ResultType} from "../types/result.type";

describe("Collector", () => {
    const collector = Collector.create();
    collector.addError(resultMock);
    collector.addWarning(resultMock);
    collector.addSuccess(resultMock);

    test("should correctly add and get errors", () => {
        expect(collector.getErrors()).toContainEqual(getResultTypedMock(ResultType.Error));
        expect(collector.getErrors().length).toBe(1);
    });

    test("should correctly add and get warnings", () => {
        expect(collector.getWarnings()).toContainEqual(getResultTypedMock(ResultType.Warning));
        expect(collector.getWarnings().length).toBe(1);
    });

    test("should correctly add and get successes", () => {
        expect(collector.getSuccesses()).toContainEqual(getResultTypedMock(ResultType.Success));
        expect(collector.getSuccesses().length).toBe(1);
    });

    test("method getAll return all results", () => {
        expect(collector.getAll()).toContainEqual(getResultTypedMock(ResultType.Error));
        expect(collector.getAll()).toContainEqual(getResultTypedMock(ResultType.Warning));
        expect(collector.getAll()).toContainEqual(getResultTypedMock(ResultType.Success));
        expect(collector.getAll().length).toBe(3);
    });
});
