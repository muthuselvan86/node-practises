import server from './lib/mod-server.mjs';
import dispatch from './lib/mod-dispatcher.mjs';
import * as handler from './lib/mod-handler.mjs';

let handle = {};
handle["/"] = handler.start;
handle["/start"] = handler.start;
handle["/login"] = handler.login;

server(dispatch, handle);