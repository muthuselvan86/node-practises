export default (path, handle) => {
    console.log(`Requesting Path : ${path}`);

    if (typeof handle[path] === 'function') {
        return handle[path]();
    } else {
        console.log("No request handler found! :-( ");
        return "Dispather: No handler found";
    }

};