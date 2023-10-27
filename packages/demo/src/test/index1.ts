// @ts-nocheck
import { Inject, Injectable, Injector, rootInjector } from 'injector';

@Injectable()
class TestService3 {
  name: string;

  constructor() {
    this.name = "test3"
  }
}

@Injectable()
class TestService2 {
  
  @Inject({ provide: TestService3 }) aaa;
  public fuck = 'fuck';
}


console.log("[test1] rootInjector", rootInjector)

const test = new TestService2()
console.log("[test1] test with aaa", test)

