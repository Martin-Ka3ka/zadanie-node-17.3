
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
    
   var input = process.stdin.read();
   if (input !== null) {
      var instruction = input.toString().trim();
      var info = process.env
      if (instruction === '/exit') {
         process.stdout.write('end');
         process.exit();
      if(instruction==info==='score'){
        process.stdout.write('type of node')
      }   
     } else {
         process.stderr.write('Wrong instruction!\n');
     }
   }
   
});

