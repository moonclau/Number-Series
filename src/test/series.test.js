import {describe,expect, it} from 'vitest';

/**
 * serie(n) = -3primo(n) -fibonacci(n) + 5triangular(n)
 * Test de pruebas unitarias a un metodo de la serie numerica usando
 * los 10 numeros naturales como entrada (10 casos de prueba en total)
 * 
 * Tomo en cuenta lo siguiente dependiendo de la serie:
 * Primo -> Ejemplo n= 2 entonces el numero primo es 3 entonces -3(3) = -9
 *             n= 3 entonces el numero primo es 5
 *             n= 4 entonces el numero primo es 7
 *             n= 5 entonces el numero primo es 11
 *             n= 6 entonces el numero primo es 13
 *             n= 7 entonces el numero primo es 17
 *             n= 8 entonces el numero primo es 19
 *             n= 9 entonces el numero primo es 23
 *             n= 10 entonces el numero primo es 29
 * Fibonacci -> Ejemplo n= 2 entonces el numero fibonacci es 1 entonces -1
 *                 n= 3 entonces el numero fibonacci es 2
 *                 n= 4 entonces el numero fibonacci es 3
 *                 n= 5 entonces el numero fibonacci es 5
 *                 n= 6 entonces el numero fibonacci es 8
 *                 n= 7 entonces el numero fibonacci es 13
 *                 n= 8 entonces el numero fibonacci es 21   
 *                 n= 9 entonces el numero fibonacci es 34
 *                 n= 10 entonces el numero fibonacci es 55
 * Triangular -> Ejemplo n= 2 entonces el numero triangular es 3 entonces 5(3) = 15
 *                  n= 3 entonces el numero triangular es 6
 *                  n= 4 entonces el numero triangular es 10
 *                  n= 5 entonces el numero triangular es 15
 *                  n= 6 entonces el numero triangular es 21
 *                  n= 7 entonces el numero triangular es 28
 *                  n= 8 entonces el numero triangular es 36
 *                  n= 9 entonces el numero triangular es 45
 *                  n= 10 entonces el numero triangular es 55
 */

//Import function to testing
import SeriesNumbers from '../components/SeriesNumber';

describe('series', ()=>{
 it('should throw if not number is provided as parameter', () => {
     expect(() => SeriesNumbers.operation('dfd').toThrow('parameter provided must be a number'))
 })
 it('should throw if parameter is NAN', () => {
     expect(() => SeriesNumbers.operation(NaN).toThrow('parameter provided must be a number'))
 })
 it('should be return 0 when the parameter is 0',()=>{
    expect(SeriesNumbers.operation(0)).toBe(0);
 })
 it('should be return 0 when the parameter is 0',()=>{
    expect(SeriesNumbers.operation(0)).toBe(0);
 })
 
 it('should return -2 for n = 1', () => {
    expect(SeriesNumbers.operation(1)).toBe(-2);
  });


 it('should be return 5 when the parameter is 2',()=>{
    expect(SeriesNumbers.operation(2)).toBe(5);
 })

 it('should be return 13 when the parameter is 3',()=>{
    expect(SeriesNumbers.operation(3)).toBe(13);
 })

 it('should be return 26 when the parameter is 4',()=>{
    expect(SeriesNumbers.operation(4)).toBe(26);
 })

 it('should be return 37 when the parameter is 5',()=>{
    expect(SeriesNumbers.operation(5)).toBe(37);
 })

 it('should be return 58 when the parameter is 6',()=>{
    expect(SeriesNumbers.operation(6)).toBe(58);
 })

 it('should be return 76 when the parameter is 7',()=>{
    expect(SeriesNumbers.operation(7)).toBe(76);
 })

 it('should be return 102 when the parameter is 8',()=>{
    expect(SeriesNumbers.operation(8)).toBe(102);
 })

 it('should be return 122 when the parameter is 9',()=>{
    expect(SeriesNumbers.operation(9)).toBe(122);
 })

 it('should be return 133 when the parameter is 10',()=>{
    expect(SeriesNumbers.operation(10)).toBe(133);
 })
})