var webdriver = require('selenium-webdriver'),
    By = webdriver.By;
var fs = require('fs');
var chrome = require('chromedriver');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
driver.get('http://www.github.com/imankitraj');


Pause(2, ScreenShot);

function ScreenShot() {
    console.log("Taking ScreenShot");
    driver.takeScreenshot().then(
        function(image, err) {
            fs.writeFile('./images/1.png', image, 'base64', function(err) {
                if (err)
                    console.log("Error Ankit" + err);
                else
                    console.log("Successful in taking screenShot");
            });
        }
    );
    Pause(3, QuitDriver);
}

function Pause(Time, FuncName) {
    setTimeout(FuncName, Time * 1000);
}

function QuitDriver() {
    driver.close();
    driver.quit();
}