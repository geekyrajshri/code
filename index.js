const express = require('express')
const app = express()
const port = 3000
const startRouter =  require("./src/startRouter");
const { exec } = require("child_process");

app.use('/start',startRouter())

app.get('/stop', (req, res) => {
    // console.log(__dirname);
    // exec("wmctrl -c 'Firefox' -x 'Navigator.Firefox'", (error, stdout, stderr) => {
    //     if (error) {
    //         console.log(`error: ${error.message}`);
    //         return;
    //     }
    //     if (stderr) {
    //         console.log(`stderr: ${stderr}`);
    //         return;
    //     }
    //     console.log(`stdout: ${stdout}`);
    // });
    // res.sendFile(__dirname + "/index.html");
    res.send('Hello World! stop')
  })

  app.get('/cleanup', (req, res) => {
    res.send('Hello World! cleanup')
  })

  app.get('/geturl', (req, res) => {
    console.log(browser);

    res.send(200)
  })

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})