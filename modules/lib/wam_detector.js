System.register([], function (exports_1, context_1) {
    "use strict";
    var WamDetector;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            WamDetector = (function () {
                function WamDetector() {
                    this.wams = 0;
                }
                WamDetector.prototype.detectForWams = function (credits) {
                    if (credits === void 0) { credits = 0; }
                    var result = this.wams + credits;
                    return result === 0 ?
                        'no wams found' :
                        'some wams found';
                };
                return WamDetector;
            }());
            exports_1("WamDetector", WamDetector);
        }
    };
});
