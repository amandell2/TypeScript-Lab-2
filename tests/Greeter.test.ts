import {Greeter} from "../src/Greeter"

describe("Greeter Class", () => {
    test("Hey, Amanda", () => {
        let hey = new Greeter("Hey")
        let name = "Amanda"
        
      expect(hey.greet(name)).toEqual("Hey, Amanda!");
    })

    test("What's up, Joe", () => {
        let whatsUp = new Greeter("What's up")
        let name = "Joe"
        
      expect(whatsUp.greet(name)).toEqual("What's up, Joe!");
    })
});