import { a } from './lib';

console.log('[main] loading');
console.log('[main] a is:', a);

if (module.hot) {
  module.hot.accept('./lib', function() {
    console.log('[main] updated lib');
    console.log('[main] then a is:', a);
  });
}