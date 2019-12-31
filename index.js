function rp(){
    return new Promise( (resolve, reject) => {
      resolve(3);
    });
}
  
async function a(){
    const r = await rp();
    console.log('a - ' , r);
    return r + 1;
}
  
async function b(){
    const r = await rp();
    console.log('b - ' , r);
    return r + 2;
}
  
async function main(){
    console.log('main');
    // const ax = await a();
    // const bx = await b();

    const [ax, bx] = await Promise.race([a(),b()]);
    console.log(ax);
    console.log(bx);

    const s = await a();
    console.log(s);

  }
  
  main();

  
