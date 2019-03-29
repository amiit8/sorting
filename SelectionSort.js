console.log('Selection Sort');

window.sort = function(input){
	var temp1, temp2;
	for(var i=0;i<input.length-1;i++){
		for(var j=i;j<input.length-1;j++){
			//debugger;
			if(input[j]<input[j+1]){
				temp1 = input[j+1];
				input[j+1]=input[j];
				input[j]=temp1;
			}
		}
		temp2 = input[i]; 
		input[i] = input[input.length-1];
		input[input.length-1] = temp2;
	}
	return input;
}