import {JavaScriptGreeter} from "../src/JavaScriptGreeter"

describe("JavaScriptGreeter Class", () => {
    test("Hey, Amanda", () => {
        let hey = new JavaScriptGreeter("Hey")
        let name = "Amanda"
        
      expect(hey.greet(name)).toEqual("console.log('Hey, Amanda!')");
    })

    test("What's up, Joe", () => {
        let whatsUp = new JavaScriptGreeter("What's up")
        let name = "Joe"
        
      expect(whatsUp.greet(name)).toEqual("console.log('What's up, Joe!')");
    })
});