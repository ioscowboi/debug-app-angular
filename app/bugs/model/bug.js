"use strict";
var Bug = (function () {
    function Bug(id, title, status, severity, description, createdBy, createdDate, 
        //  note the question mark: this makes the var optional
        updatedBy, updatedDate) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.severity = severity;
        this.description = description;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.updatedBy = updatedBy;
        this.updatedDate = updatedDate;
    }
    return Bug;
}());
exports.Bug = Bug;
//# sourceMappingURL=bug.js.map