interface TestInterface {
  foo: string
  bar: string
}

class TestClass implements TestInterface {
  public foo = 'foo'
  public bar = 'bar'
}

const test = new TestClass()
console.log(test.foo)