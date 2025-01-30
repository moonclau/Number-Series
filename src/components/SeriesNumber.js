/*
* A class with a method that returns the nth term of the series.
*/ 
class SeriesNumber {
    static operation(number) {
        let serieTotalResult =0;
        if(typeof number !== 'number') throw new Error('parameter provided must be a number');
        if(Number.isNaN(number)) throw new Error('parameter provided must be a number');
        if(number <= 0){
            return serieTotalResult;
        }
        //Prime number
        let count =2, numberPrimeResult=2, numPrimeResult =0;
        let numbersPrime= [2];
        while (count <= number){
                    while( numbersPrime.some((element) => numberPrimeResult % element === 0)  ){
                        numberPrimeResult++;
                    }
                numbersPrime.push(numberPrimeResult);
                count++;
                numberPrimeResult++;
            }
        numPrimeResult = -3 *  numbersPrime[numbersPrime.length - 1];
        //fibonacci
        let fibonacciAcomulacion = 0;
        let fibonacciResult = 1;
        for (let f = 2; f <= number;f++){
            [fibonacciAcomulacion,fibonacciResult] =[fibonacciResult, fibonacciAcomulacion+ fibonacciResult]  
            
        }

        //triangular 
         let triangular =(number*(number+1))/2;
         let triangularResult = 5*triangular;
         console.log('triangular',triangular);
         return numPrimeResult - fibonacciResult + triangularResult;
    }

}

export default SeriesNumber;