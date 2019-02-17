process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quit program!\n')
                process.exit();
                break;
            case '/info':
                process.env.process.stdout.write('information')
                break
            case '/say':
                process.stdout.write('hello!\n');
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});