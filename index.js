// option 1
const fiboResult = [];

function fibo() {
	for (let i = 0; i <= 100; i++) {
		if (i === 0 || i === 1) {
			fiboResult[i] = i;	
		} else {
			fiboResult[i] = fiboResult[i-1] + fiboResult[i-2];
		}
	}
}

fibo();
console.log('final Fibonacci 1: ');
console.log(fiboResult.join(', \n'));



// option 2
const fiboResult2 = [];

function fibo2() {
	for (let i = 0; i <= 100; i++) {
		fiboResult2[i] = i === 0 || i === 1 ? i : fiboResult2[i-1] + fiboResult2[i-2];	
	}
}

fibo2();
console.log('final Fibonacci 2: ');
console.log(fiboResult2.join(', \n'));
