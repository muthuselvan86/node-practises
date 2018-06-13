import http from 'http';
import url from 'url';

let init = (dispatch, handle) => {
    // call back to handle request.
    let onReq = (req, res) => {
        const path = url.parse(req.url).path;
        let content = dispatch(path, handle);
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.write(content);
        res.end();
    };

    http.createServer(onReq).listen(4000);
    console.log(`Server started`);
};

export default init;