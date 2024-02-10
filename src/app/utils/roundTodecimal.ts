/**
 * The function responsible to round the number to 2 decimals.
 * @param value The value is number to round.
 * @returns The number value that is rounded.
 */

export const roundTodecimal = (value: number)=>{
    return(
        Math.round((value + Number.EPSILON)*100) / 100
    )
}