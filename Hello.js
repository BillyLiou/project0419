
console.log('first');

async function foo() {
    try {
      await setTimeout(()=>{console.log('~~~')},100);
      await console.log('newResult');
      await console.log('finalResult');
      let finalResult1 = 'FINAL!!!';
      console.log(`Got the final result: ${finalResult1}`);
    } catch(error) {
      console.log(error);
    }
  }
  foo();
  console.log('second');
