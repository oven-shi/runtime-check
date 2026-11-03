const os=require('os');const cp=require('child_process');
console.log('NODE-ACTION-OK');
console.log('uid',process.getuid&&process.getuid());
console.log('host',os.hostname());
console.log('cwd',process.cwd());
try{console.log(cp.execSync('id').toString());}catch(e){console.log('id err',e.message);}
try{console.log(cp.execSync('ls /tmp/w3-step | head').toString());}catch(e){console.log('ls err',e.message);}
