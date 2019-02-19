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
         case '/version':
            console.log(process.versions.node);
            break;
         case '/sayhello':
            process.stdout.write('hello!\n');
            break;
         default:
            process.stderr.write('Wrong instruction!\n');
      };
   }
});