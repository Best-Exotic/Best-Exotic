import {AbstractDataAccess} from "./AbstractDataAccess";

test("cannot directly instantiate", () => {
    expect(() => {new AbstractDataAccess()}).toThrow()
})

test("error methods run", () => {
    class ConcreteDataAccess extends AbstractDataAccess {}

    let foo
    expect (() => {foo = new ConcreteDataAccess()}).not.toThrow()
    expect(() => {
        foo.readError()
        foo.writeError()
        foo.appendError()
    }).not.toThrow() // these are really error catchers

})