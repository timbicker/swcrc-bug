import {myFunction} from "./myFunction";

type MyType = {
  hi: string
}

test("myFunction", () => {
  const obj: MyType = {
    hi: "hello"
  }
  expect(myFunction(obj)).toBe("hello")
})
