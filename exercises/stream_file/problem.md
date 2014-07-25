Create a koa server that listens on a port passed from the command line and replies with contents of the requested file when an HTTP GET request is sent to `/<file_name>`

P.S: The fun part is, it shall be using a Stream here ;)

HINTS:

* Create a file named `hello` in the same dir where the `program.js` is present and contents of it being `Hello from Koa!`

* When request for `/hello` the server must responsed with the contents of the file `hello`

* When request for something else either than `/hello` it must responsed saying `File not Found.` ( As expected. )

* The path to the file will be `path = __dirname + this.path;`

* You can use `fs` module to check if the file is present or not and set the body to `fs.createReadStream(path)`. 

So, what are you waiting for? 

Go ahead and code, good luck!
