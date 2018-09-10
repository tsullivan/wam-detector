System.register(["./lib/wam_detector"], function (exports_1, context_1) {
    "use strict";
    var wam_detector_1, credits, wammer, exit;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (wam_detector_1_1) {
                wam_detector_1 = wam_detector_1_1;
            }
        ],
        execute: function () {
            credits = 0;
            wammer = new wam_detector_1.WamDetector('blenry');
            console.log(wammer.detectForWams(credits));
            wammer.speak();
            exports_1("exit", exit = 0);
        }
    };
});
