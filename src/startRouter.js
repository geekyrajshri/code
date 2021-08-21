const express = require("express")

const startRouter= ()=>{
    router =  express.Router();
    router.route('/').get(async function startBrowserWindow(req,res){
        browser = req.query.browser;
        url     = req.query.url;
        console.log(`Opening ${url} in ${browser} browser`);
        await openBrowserMethod(browser,url);
        return res.status(200).send("Browser opened")
    })
    return router
}

async function openBrowserMethod(browser,url) {
    const open = require("open");
    await open(url, {app: {name: browser}});
  }


  module.exports = startRouter;