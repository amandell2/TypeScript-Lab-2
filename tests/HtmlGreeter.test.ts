import {HtmlGreeter} from "../src/HtmlGreeter"

describe("HtmlGreeter Class", () => {
    test("Default h1", () => {
        let hey = new HtmlGreeter("Hey")
        let name = "Amanda"
      expect(hey.greet(name)).toEqual("<h1>Hey, Amanda!</h1>");
    })

    test("h2 tagname", () => {
        let hey = new HtmlGreeter("Hey", "h2")
        let name = "Amanda"
      expect(hey.greet(name)).toEqual("<h2>Hey, Amanda!</h2>");
    })

    test("Hello, h3 tagname, name:Joe", () => {
        let hello = new HtmlGreeter("Hello", "h3")
        let name = "Joe"
      expect(hello.greet(name)).toEqual("<h3>Hello, Joe!</h3>");
    })
});