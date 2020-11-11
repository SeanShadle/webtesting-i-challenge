module.exports = {
    success,
    fail,
    repair,
    get,
};

const enhancer = require('./enhancer.js');

describe('repair', () => {
    const item = {
        name: "Chest Plate",
        durability: 80,
        enhancement: 10
    };

    it('Repairs items durability to 100', () => {
        const expected = 100;
        const actual = enhancer.repair(item)
        expect(actual.durability).toBe(expected)
    })
});

describe("success", () => {
    it("increases item enhancement by 1 if enhancement is less than 20", () => {
        const item = {
            name: "Success: Item less than 20",
            enhancement: 10,
            durability: 10,
        };
        const expected = 11;
        const actual = enhancer.success(item);
        expect(actual.enhancement).toBe(expected);
    });
    it("No change if enhancement is 20+", () => {
        const item = {
            name: "Success: Item is equal to 20",
            enhancement: 20,
            durability: 10,
        };
        const expected = 20;
        const actual = enhancer.success(item);
        expect(actual.enhancement).toBe(expected);
    });
});

describe("fail", () => {
    it("decreases item durability by 5 if enhancement is less than 15", () => {
        const item = {
            name: "Fail: Item less than 15",
            enhancement: 14,
            durability: 10,
        };
        const expected = 15;
        const actual = enhancer.fail(item);
        expect(actual.durability).toBe(expected);
    });

    it("decreases item durability if enhancement is above 15", () => {
        const item = {
            name: "Fail: Item is below 15",
            enhancement: 16,
            durability: 20,
        };
        const expected = 10;
        const actual = enhancer.fail(item);
        expect(actual.durability).toBe(expected);
    });

    it("decreases item durability by 1 if enhancement is greater than 16", () => {
        const item = {
            name: "Fail: Item more than 16",
            enhancement: 20,
            durability: 20,
        };
        const expected = 19;
        const actual = enhancer.fail(item);
        expect(actual.enhancement).toBe(expected);
    });
});
