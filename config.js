// Autodesk Forge configuration
module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        client_id: 'pTfgA3QSnko7H8A0b7ceGYicVEjCKXZ6',
        client_secret: 'ysnxrLCFYFyBylq3',
        callback_url: process.env.FORGE_CALLBACK_URL
    },
    scopes: {
        // Required scopes for the server-side application
        internal: ['bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],
        // Required scope for the client-side viewer
        public: ['viewables:read']
    }
};


/*

    module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        client_id: '0pE23wLfkvz76f9Rj56GCQDgK2flZuuf',
        client_secret: 'NzuABvCX7MCbNovZ',
        callback_url: process.env.FORGE_CALLBACK_URL
    },
    scopes: {
        // Required scopes for the server-side application
        internal: ['bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],
        // Required scope for the client-side viewer
        public: ['viewables:read']
    }
};

*/