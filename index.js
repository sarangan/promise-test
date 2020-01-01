function rp(){
    return new Promise( (resolve, reject) => {
      resolve(3);
    });
}
  
function a(){
    const r = rp();
    console.log('a - ' , r);
    return r;
}
  
function b(){
    const r = rp();
    console.log('b - ' , r);
    return r;
}
  
async function main(){
    console.log('main');
    // const ax = await a();
    // const bx = await b();

    const [ax, bx] = await Promise.all([a(),b()]);
    console.log(ax);
    console.log(bx);

  }
  
  main();


async function race(){
    var promise1 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 500, 'one');
    });
    
    var promise2 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'two');
    });

    const p = await Promise.race([promise1, promise2]);
    console.log(p);
}

race();
