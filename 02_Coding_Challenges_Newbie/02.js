// 2. Print the odd numbers less than 100.
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        process.stdout.write(`${i} `);
    }
}