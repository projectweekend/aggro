var specs = require( "./protractor-specs" );

exports.config = {

    seleniumAddress: 'http://hub.browserstack.com/wd/hub',

    // Capabilities to be passed to the webdriver instance.
     multiCapabilities: [
         {
            "browserName": "chrome",
            "version": "44.0",
            "browserstack.user": process.env.BROWSERSTACK_USER,
            "browserstack.key": process.env.BROWSERSTACK_KEY,
            "browserstack.local": "true",
            "os": "Windows",
            "os_version": "8.1",
            "resolution": "1680x1050",
            "browserstack.debug": "false" // true will capture screenshots of each step
        }
    ],

    params: {},

    maxSessions: 1,
    baseUrl: 'http://localhost:3000',
    rootElement: 'html',

    allScriptsTimeout: 31000,
    getPageTimeout: 30000,

    // Spec patterns are relative to the current working directly when protractor is called.
    specs: specs,

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    },

    onPrepare: function ()
    {
        browser.driver.manage().window().maximize();
        require( "jasmine-bail-fast" ); // this will help stop the test runner near the first failure
        jasmine.getEnv().bailFast();
    }
};
