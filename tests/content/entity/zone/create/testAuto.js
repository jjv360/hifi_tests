////var autoTester = Script.require("https://raw.githubusercontent.com/highfidelity/hifi_tests/master/tests/utils/autoTester.js" );
var autoTester = Script.require("https://raw.githubusercontent.com/NissimHadar/hifi_tests/addRecursionToAutotester/tests/utils/autoTester.js" );
////var autoTester = Script.require("../../../../utils/autoTester.js" );

autoTester.enableAuto();

Script.include("./test.js?raw=true");
