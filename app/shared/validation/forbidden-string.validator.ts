//  check the value of a control and make sure it doesn't match a specific string:
//     abstractcontrol is a base class for form groups and form controls:
import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenStringValidator(strReg: RegExp): ValidatorFn {
    // control <-- locally defined for comparison to regEx
    //  returns a js object, with a key/value pair of any string type
    return (control: AbstractControl): { [key: string]:any } => {
        // get the return data from the key/value pair and store it:
        const str = control.value;
        // pass the 'str' constant and compare to the regular expression:
        const invalid = strReg.test(str);
        return invalid ? { 'forbiddenString': { str } } : null;
    }
}