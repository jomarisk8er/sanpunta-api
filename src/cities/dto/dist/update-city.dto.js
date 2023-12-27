"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.UpdateCityDto = void 0;
var mapped_types_1 = require("@nestjs/mapped-types");
var create_city_dto_1 = require("./create-city.dto");
var UpdateCityDto = /** @class */ (function (_super) {
    __extends(UpdateCityDto, _super);
    function UpdateCityDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateCityDto;
}(mapped_types_1.PartialType(create_city_dto_1.CreateCityDto)));
exports.UpdateCityDto = UpdateCityDto;
