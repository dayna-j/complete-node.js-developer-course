console.log('Starting app');

setTimeout( () => {
    console.log('setTimeout with 2s delay was called');
}, 2000);

setTimeout( () => {
    console.log('setTimeout with 0s delay was called');
}, 0);

console.log('Finishing app');