const { authenticateStudent } = require('./lib/auth-store-admin');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

async function run() {
    try {
        console.log("Starting test...");
        const result = await authenticateStudent(
            'khalil611',
            'n2fw8xkq',
            'test-fingerprint',
            { name: 'Test Device' }
        );
        console.log("Result:", result);
    } catch (e) {
        console.error("Error thrown:", e);
    }
}
run();
