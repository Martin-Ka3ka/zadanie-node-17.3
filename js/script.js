process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
    
   var input = process.stdin.read();
   if (input !== null) {
      var info = process.env
      if (info === '/node') {
         process.stdout.write('score');
         process.exit();
      if(instruction==info==='score'){
        process.stdout.write('type of node')
      }   
     } else {
         process.stderr.write('Wrong instruction!\n');
     }
   }
   
});

