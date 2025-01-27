/*Una clase con un metodo que entregue el termino n de la serie.
*
*/ 
class SeriesNumber {
    static operation(number) {
        let serieTotalResult =0;
        if(typeof number !== 'number') throw new Error('parameter provided must be a number');
        if(Number.isNaN(number)) throw new Error('parameter provided must be a number');
        if(number <= 0){
            return serieTotalResult;
        }
        //Numero primo
        let count =2, numberPrimeResult=2, numPrimeResult =0;
        let numbersPrime= {1:2};
        while (count <= number){
                    while( Object.values(numbersPrime).some((element) => numberPrimeResult % element === 0)  ){
                        numberPrimeResult++;
                    }
                numbersPrime[count] = numberPrimeResult;
                count++;
                numberPrimeResult++;
            }
        numPrimeResult = -3 *  numbersPrime[count-1];
        console.log('primo',numbersPrime[count-1]);
        //fibonacci
        let fibonacciAcomulacion = 0;
        let fibonacciResult = 1;
        for (let f = 2; f <= number;f++){
            [fibonacciAcomulacion,fibonacciResult] =[fibonacciResult, fibonacciAcomulacion+ fibonacciResult]
        }

        //triangular num=3
        let triangular =(number*(number+1))/2;
        let triangularResult = 5*triangular;
        return numPrimeResult - fibonacciResult + triangularResult;
    }

}

export default SeriesNumber;