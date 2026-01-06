import { getDB } from "./api/db";
import handleGetRequest from "./api/requests/handleGetRequest";
import handlePostRequest from "./api/requests/handlePostRequest"
import getRandomDelay from "./api/util/getRandomDelay";


// Simple _fetch function that mimics real fetch
export default function _fetch(endpoint, options = {}, delay) {

    return new Promise((resolve, reject) => {
        // Simulate network delay
        setTimeout(() => {
            try {
                const db = getDB();
                if (!db) {
                    reject(new Error('Database not found'));
                    return;
                }

                // Parse URL and method
                const method = options.method || 'GET';
                const headers = new FakeHeaders(options.headers || {});
                

                // Create response with proper headers and status
                const createResponse = (data, status = 200, additionalHeaders = {}) => {
                    const responseHeaders = {
                        'content-type': 'application/json',
                        ...additionalHeaders
                    };

                    return new FakeResponse(data, {
                        status: status,
                        statusText: getStatusText(status),
                        headers: responseHeaders,
                        path: endpoint
                    });
                };
                
           
                // Route handling based on endpoint and method
                switch (method) {
                    case 'GET':
                        handleGetRequest({endpoint, resolve, reject, createResponse, headers});
                        break;
                    case 'POST':
                        handlePostRequest(endpoint, options.body, resolve, reject, createResponse, headers);
                        break;
                    // case 'PUT':
                    //     handlePutRequest(endpoint, options.body, resolve, reject, createResponse, headers);
                    //     break;
                    // case 'DELETE':
                    //     handleDeleteRequest(endpoint, queryParams, resolve, reject, createResponse, headers);
                    //     break;
                    default:
                        resolve(createResponse({ error: 'Method not implemented' }, 405));
                }
            } catch (error) {
                reject(error);
            }
        }, getRandomDelay()); // 100ms delay to simulate network
    });
}

// Helper function to get status text
function getStatusText(status) {
    const statusMap = {
        200: 'OK',
        201: 'Created',
        204: 'No Content',
        400: 'Bad Request',
        401: 'Unauthorized',
        404: 'Not Found',
        405: 'Method Not Allowed',
        500: 'Internal Server Error'
    };
    return statusMap[status] || 'Unknown';
}


// Enhanced Response class that mimics real Fetch Response
class FakeResponse {
    constructor(body, init = {}) {
        this._body = body;
        this._bodyUsed = false;
        
        this.status = init.status || 200;
        this.statusText = init.statusText || this._getStatusText(this.status);
        this.ok = this.status >= 200 && this.status < 300;
        this.headers = new FakeHeaders(init.headers || {});
        this.url = init.url || '';
        this.type = 'basic';
        this.redirected = false;
        this.body = null; // ReadableStream would be null in fake implementation
    }

    _getStatusText(status) {
        const statusTexts = {
            200: 'OK',
            201: 'Created',
            204: 'No Content',
            400: 'Bad Request',
            401: 'Unauthorized',
            404: 'Not Found',
            405: 'Method Not Allowed',
            500: 'Internal Server Error'
        };
        return statusTexts[status] || 'Unknown Status';
    }

    json() {
        if (this._bodyUsed) {
            return Promise.reject(new TypeError('Already read'));
        }
        this._bodyUsed = true;
        
        try {
            const data = typeof this._body === 'string' ? JSON.parse(this._body) : this._body;
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(new SyntaxError('Invalid JSON'));
        }
    }

    text() {
        if (this._bodyUsed) {
            return Promise.reject(new TypeError('Already read'));
        }
        this._bodyUsed = true;
        
        if (typeof this._body === 'string') {
            return Promise.resolve(this._body);
        }
        return Promise.resolve(JSON.stringify(this._body));
    }

    blob() {
        if (this._bodyUsed) {
            return Promise.reject(new TypeError('Already read'));
        }
        this._bodyUsed = true;
        
        const blob = new Blob([JSON.stringify(this._body)], { type: 'application/json' });
        return Promise.resolve(blob);
    }

    arrayBuffer() {
        return this.text().then(text => {
            const encoder = new TextEncoder();
            return encoder.encode(text).buffer;
        });
    }

    clone() {
        return new FakeResponse(this._body, {
            status: this.status,
            statusText: this.statusText,
            headers: new FakeHeaders(this.headers)
        });
    }

    get bodyUsed() {
        return this._bodyUsed;
    }
}

// Fake Headers class to mimic Headers API
class FakeHeaders {
    constructor(init = {}) {
        this._headers = new Map();
        
        if (init instanceof FakeHeaders) {
            init._headers.forEach((value, key) => {
                this._headers.set(key.toLowerCase(), value);
            });
        } else if (typeof init === 'object') {
            Object.entries(init).forEach(([key, value]) => {
                this._headers.set(key.toLowerCase(), String(value));
            });
        }
    }

    get(key) {
        return this._headers.get(key.toLowerCase()) || null;
    }

    set(key, value) {
        this._headers.set(key.toLowerCase(), String(value));
    }

    has(key) {
        return this._headers.has(key.toLowerCase());
    }

    delete(key) {
        this._headers.delete(key.toLowerCase());
    }

    forEach(callback) {
        this._headers.forEach((value, key) => {
            callback(value, key, this);
        });
    }

    entries() {
        return this._headers.entries();
    }

    keys() {
        return this._headers.keys();
    }

    values() {
        return this._headers.values();
    }

    [Symbol.iterator]() {
        return this._headers[Symbol.iterator]();
    }
}
