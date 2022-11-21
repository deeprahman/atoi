/**
 * Converts string to integer
 */

export class MyAtoi
{
    public static main():void{
        const str = "-234";
        const expected = -234
        const actual = (new MyAtoi()).atoi(str);
        console.assert(expected === actual);
    }

    /**
     * Converts string to integer
     * @param str 
     * @returns integer form of the staring
     */
    public atoi(str: string): number{
        if (! str.length){
            return NaN;
        }
        let res = 0, sign = 1, i = 0;
        let part_1:number, part_2:number, char_code_1:number, char_code_2:number;
        if(str[0]  === '-'){
            sign = -1;
            i = 1;
        }
        do{
            char_code_1 = str.charCodeAt(i);
            char_code_2 = '0'.charCodeAt(0);
            part_1 = res  * 10;
            part_2 = char_code_1 - char_code_2;
            res = part_1 + part_2;
            // res = res * 10 + str[i].charCodeAt(0) - '0'.charCodeAt(0);
            
        }while(++i && i < str.length);

        // while( i < str.length){
        //     this.debug("value of i "+i);
        //      char_code_1 = str.charCodeAt(i);
        //     console.log(" the character code for str[i]:  "+char_code_1);
        //     char_code_2 = '0'.charCodeAt(0);

        //     console.log(" the character code for 0:  "+ char_code_2);
        //     part_1 = res  * 10;
        //     this.debug("Value of part-1: "+part_1);
        //     part_2 = char_code_1 - char_code_2;
        //     this.debug("Value of the part - 2: "+ part_2);
        //     res = part_1 + part_2;
        //     // res = res * 10 + str[i].charCodeAt(0) - '0'.charCodeAt(0);
        //     i++;
        // }

        return sign * res;
    }

    debug(str:string):void
    {
        console.log(str);
    }
}

