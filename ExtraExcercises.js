//clean the room

const cleanTheRoom = (array) => {
	const cleanedArr=[];
	const cleanedArr2=[];
	for (num of array) {
		if (cleanedArr[num]!=undefined)
			{	cleanedArr[num]=[num];
				cleanedArr[num].push(num);}
		else
			cleanedArr[num]=num;
	}
	for (var i = 0; i < cleanedArr.length; i++) {
		if (cleanedArr[i]!=undefined) {cleanedArr2.push(cleanedArr[i]);}
	}
	return cleanedArr2;
}