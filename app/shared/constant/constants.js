"use strict";
// create enum for numeric display items:
//     this is great for use in a pipe in the way that it will interpolate valules:
(function (STATUS) {
    // simply define the value of the first and it'll auto assign the rest:
    STATUS[STATUS['Logged'] = 1] = 'Logged';
    STATUS[STATUS['Recreated'] = 2] = 'Recreated';
    STATUS[STATUS['In Progress'] = 3] = 'In Progress';
    STATUS[STATUS['Fixed'] = 4] = 'Fixed';
    STATUS[STATUS['Declined'] = 5] = 'Declined';
})(exports.STATUS || (exports.STATUS = {}));
var STATUS = exports.STATUS;
(function (SEVERITY) {
    // simply define the value of the first and it'll auto assign the rest:
    SEVERITY[SEVERITY['Severe'] = 1] = 'Severe';
    SEVERITY[SEVERITY['Medium'] = 2] = 'Medium';
    SEVERITY[SEVERITY['Low'] = 3] = 'Low';
    SEVERITY[SEVERITY['Cosmetic'] = 4] = 'Cosmetic';
})(exports.SEVERITY || (exports.SEVERITY = {}));
var SEVERITY = exports.SEVERITY;
//# sourceMappingURL=constants.js.map