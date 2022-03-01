import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter Class", () => {
    test("Don't call addVolume", () => {
        let hey = new LoudGreeter("Hey")
        let name = "Amanda"
      expect(hey.greet(name)).toEqual("Hey, Amanda!!!");
    })
    
    test("One addVolume Call", () => {
        let hey = new LoudGreeter("Hey")
        let name = "Amanda"
        hey.addVolume();
      expect(hey.greet(name)).toEqual("Hey, Amanda!!!!");
    })

    test("Two addVolume Calls", () => {
        let whatsUp = new LoudGreeter("What's up")
        let name = "Joe"
        whatsUp.addVolume();
        whatsUp.addVolume();
        expect(whatsUp.greet(name)).toEqual("What's up, Joe!!!!!"); 
    })

    test("Three addVolume Calls", () => {
      let whatsUp = new LoudGreeter("What's up")
      let name = "Joe"
      whatsUp.addVolume();
      whatsUp.addVolume();
      whatsUp.addVolume();
      expect(whatsUp.greet(name)).toEqual("What's up, Joe!!!!!!"); 
  })
});