const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
driver.get('http://thetestroom.com');
