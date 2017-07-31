"use strict";
function forbiddenStringValidator(strReg) {
    // control <-- locally defined for comparison to regEx
    //  returns a js object, with a key/value pair of any string type
    return function (control) {
        // get the return data from the key/value pair and store it:
        var str = control.value;
        // pass the 'str' constant and compare to the regular expression:
        var invalid = strReg.test(str);
        return invalid ? { 'forbiddenString': { str: str } } : null;
    };
}
exports.forbiddenStringValidator = forbiddenStringValidator;
//# sourceMappingURL=forbidden-string.validator.js.map