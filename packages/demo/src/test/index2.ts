// @ts-nocheck
import { Inject, Injectable, Injector, rootInjector } from 'injector';


const otherInjector = rootInjector.fork();

class AA { }
otherInjector.setInstance(AA, { aaa: '123' });

class TestService5Type { }

@Injectable({ injector: otherInjector, provide: TestService5Type })
class TestService5 {

}

const test5 = new TestService5()
console.log("[test2] new TestService5", test5)


class TestService {
  @Inject({ injector: otherInjector, provide: TestService5 }) aaa5;
  @Inject({ injector: otherInjector, provide: AA }) aaab;
}

const aaa = new TestService();
console.log("[test2] new TestService", aaa)
