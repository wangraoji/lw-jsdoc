### ng2-6 js转ts

#### test.js
~~~
function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

export default {
    add,
    minus
}
~~~

#### test.d.ts

~~~

declare namespace Add{
    function add(a: number, b: number): number;
    function minus(a: number, b: number): number;
} 

export default Add;

~~~

#### 要用的地方 .ts

~~~
// test 可以任意命名，这里用什么，下面要用就用什么
import test from './components';

ngOnInit(){
     let result = test.minus(1,2);
     // -1
}
~~~