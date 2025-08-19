import test from 'node:test';
import * as assert from 'assert';

export function compare(
    name: string,
    json: Record<string, any>,
    fromJson: (json: Record<string, any>) => any,
) {
    test(name, () => {
        var actual = fromJson(json).toJson();
        assert.deepEqual(actual, json);
    });
}

export function compareParams(
    name: string,
    json: Record<string, any>,
    fromJson: (json: Record<string, any>) => any,
    skip?: string[],
) {
    test(name, () => {
        var object = fromJson(json);
        var actual = object.toJson();
        // var testSetters = object.testSetters;
        if (skip != null) {
            for (var item in skip) {
                delete actual[item];
                // delete testSetters[item];
            }
        }
        // assert.deepEqual(json, actual);
        // assert.deepEqual(json, testSetters);
    });
}