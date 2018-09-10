System.register(["./detector"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var detector_1, WamDetector;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (detector_1_1) {
                detector_1 = detector_1_1;
            }
        ],
        execute: function () {
            WamDetector = (function (_super) {
                __extends(WamDetector, _super);
                function WamDetector(name) {
                    var _this = _super.call(this, name) || this;
                    _this.wams = 0;
                    return _this;
                }
                WamDetector.prototype.detectForWams = function (credits) {
                    if (credits === void 0) { credits = 0; }
                    var result = this.wams + credits;
                    return result === 0 ?
                        'no wams found' :
                        'some wams found';
                };
                return WamDetector;
            }(detector_1.Detector));
            exports_1("WamDetector", WamDetector);
        }
    };
});
