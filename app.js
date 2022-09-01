const http=require('http');
const { isContext } = require('vm');
const server =http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('Welcome to our home page')
    }
    if(req.url =='/about'){
        console.log("hi")
    }
    res.end('<h1>OOps!</h1>')
})

server.listen(5000)

