function openBrowserMethod1() {
  var url = "http://www.browserstack.com";
  var start = process.platform == "darwin" ? "open" : process.platform == "win32" ? "start" : "xdg-open";
  require("child_process").exec(start + " " + url);
}

function openBrowserMethod2() {
  const open = require("open");

  // opens the url in the default browser
//   open("http://www.browserstack.com");

  // specify the app to open in
  open("http://www.browserstack.com", {app: {name: 'firefox'}});
}


openBrowserMethod2()