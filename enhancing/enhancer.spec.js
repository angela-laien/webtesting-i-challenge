const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    it('should run tests without errors', () => {
        expect(true).toBe(true);
    });

    // it('item should have a name property', () => {
    //     expect(enhancer.item).toHaveProperty(name = Angela);
    // })

    describe('.repair()', function() {
        it("should restore durability to 100", () => {
            expect(enhancer.repair({durability: 100}).durability).toBe(100);
            expect(enhancer.repair({durability: 85}).durability).toBe(100);
            expect(enhancer.repair({durability: 50}).durability).toBe(100);
        })
    })

    describe('.succeed()', function() {
        it("should increase item enhancement by 1", () => {
            expect(enhancer.succeed({enhancement: 16}).enhancement).toBe(17);
            expect(enhancer.succeed({enhancement: 18}).enhancement).toBe(19);
            expect(enhancer.succeed({enhancement: 20}).enhancement).toBe(20);
        })
    })

    describe('.fail()', function() {
        it('decrease item durbility by 5 if item enhancement is less than 15', () => {
            expect(enhancer.fail({enhancement: 10, durability: 80}).durability).toBe(75);
            expect(enhancer.fail({enhancement: 14, durability: 85}).durability).toBe(80);
        })
        it('decrease item durbility by 10 if item enhancement is less than 15', () => {
            expect(enhancer.fail({enhancement: 10, durability: 80}).durability).toBe(75);
            expect(enhancer.fail({enhancement: 14, durability: 85}).durability).toBe(80);
        })
        it('decrease item durbility by 10 if item enhancement is 15 or 16', () => {
            expect(enhancer.fail({enhancement: 15, durability: 70}).durability).toBe(60);
            expect(enhancer.fail({enhancement: 16, durability: 75}).durability).toBe(65);
        })
        it('decrease item durbility by 1 if item enhancement is greater than 16', () => {
            expect(enhancer.fail({enhancement: 17, durability: 90}).durability).toBe(89);
            expect(enhancer.fail({enhancement: 20, durability: 88}).durability).toBe(87);
        })
    })
})
