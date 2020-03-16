var webdriver = require('selenium-webdriver'), //  including web driver
    By = webdriver.By; //obj have properties 
var driver = new webdriver.Builder() // driver provide interaction with hardware
    .forBrowser('chrome') //mebtioning the browser
    .build(); //Opening our browser

driver.get('file://' + __dirname + '/example.html'); //getting the url

Pause(2, ScrapExample);

function ScrapExample() {
    // statement
    console.log("Scraping.. ");
    Pause(3, QuitDriver);
}
//Adding Selenium Wait
function Pause(Time, FuncName) {
    setTimeout(FuncName, Time * 1000);
}
//close and then quiting th webdriver
function QuitDriver() {
    driver.close();
    driver.quit();
}