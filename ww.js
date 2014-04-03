addEventListener('message',function(e){
	postMessage('Worker says "Hello '+e.data+'"');
},false)