System.register([], function (exports_1, context_1) {
    "use strict";
    var Detector;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Detector = (function () {
                function Detector(name) {
                    this.name = name;
                    this.speaked = 0;
                }
                Detector.prototype.speak = function () {
                    this.speaked++;
                    console.log('hi ' + this.name);
                };
                return Detector;
            }());
            exports_1("Detector", Detector);
        }
    };
});
