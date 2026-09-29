import fs from 'fs';

const tests = [
    'package.json',
    'index.html',
    'src/App.jsx',
    'src/main.jsx'
];

console.log('Starting automated tests...');

for (const file of tests) {
    if (!fs.existsSync(file)) {
        console.error(`TEST FAILED: ${file} not found`);
        process.exit(1);
    }

    console.log(`TEST PASSED: ${file} exists`);
}

console.log('All automated tests passed.');

