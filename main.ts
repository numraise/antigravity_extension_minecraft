/**
 * Switch Case Blocks to replace nested if-else
 * Usable by member players
 */
//% color="#FF5733" weight=100 icon="\uf0e8" block="Switch Case"
namespace switch_case {

    let strSwitches: string[] = [];
    let strMatched: boolean[] = [];

    /**
     * Start a switch text block to compare a text value against multiple cases.
     */
    //% blockId=switch_start_text block="switch text %value"
    //% weight=100
    export function switchText(value: string, handler: () => void): void {
        strSwitches.push(value);
        strMatched.push(false);
        handler();
        strSwitches.pop();
        strMatched.pop();
    }

    /**
     * Add a case text to execute code if the switch text matches matchValue.
     */
    //% blockId=switch_case_text block="case text %matchValue"
    //% weight=90
    export function caseText(matchValue: string, handler: () => void): void {
        const len = strSwitches.length;
        if (len === 0) return;
        
        const currentValue = strSwitches[len - 1];
        const isMatched = strMatched[len - 1];
        
        if (!isMatched && currentValue === matchValue) {
            strMatched[len - 1] = true;
            handler();
        }
    }

    /**
     * Default text case that executes if no other text case matches.
     */
    //% blockId=switch_default_text block="default text"
    //% weight=80
    export function defaultText(handler: () => void): void {
        const len = strMatched.length;
        if (len === 0) return;
        
        const isMatched = strMatched[len - 1];
        
        if (!isMatched) {
            strMatched[len - 1] = true;
            handler();
        }
    }

    let numSwitches: number[] = [];
    let numMatched: boolean[] = [];

    /**
     * Start a switch number block to compare a number value against multiple cases.
     */
    //% blockId=switch_start_num block="switch number %value"
    //% weight=70
    export function switchNumber(value: number, handler: () => void): void {
        numSwitches.push(value);
        numMatched.push(false);
        handler();
        numSwitches.pop();
        numMatched.pop();
    }

    /**
     * Add a case number to execute code if the switch number matches matchValue.
     */
    //% blockId=switch_case_num block="case number %matchValue"
    //% weight=60
    export function caseNumber(matchValue: number, handler: () => void): void {
        const len = numSwitches.length;
        if (len === 0) return;
        
        const currentValue = numSwitches[len - 1];
        const isMatched = numMatched[len - 1];
        
        if (!isMatched && currentValue === matchValue) {
            numMatched[len - 1] = true;
            handler();
        }
    }

    /**
     * Default number case that executes if no other number case matches.
     */
    //% blockId=switch_default_num block="default number"
    //% weight=50
    export function defaultNumber(handler: () => void): void {
        const len = numMatched.length;
        if (len === 0) return;
        
        const isMatched = numMatched[len - 1];
        
        if (!isMatched) {
            numMatched[len - 1] = true;
            handler();
        }
    }
}