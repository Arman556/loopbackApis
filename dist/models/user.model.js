"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let User = class User extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "empid", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        postgresql: {
            columnName: 'firstname',
            dataType: 'varchar(30)',
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstname", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        postgresql: {
            columnName: 'middlename',
            dataType: 'varchar(30)',
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "middlename", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        postgresql: {
            columnName: 'lastname',
            dataType: 'varchar(30)',
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastname", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        jsonSchema: {
            format: 'email',
            errorMessage: 'Invalid Email',
        },
        postgresql: {
            columnName: 'email',
            dataType: 'varchar(50)',
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        postgresql: {
            columnName: 'phoneno',
            dataType: 'varchar(20)',
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phoneno", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "role", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "address", void 0);
User = tslib_1.__decorate([
    repository_1.model({
        settings: {
            postgresql: {
                table: 'user',
            },
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map