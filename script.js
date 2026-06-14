//your JS code here. If required.

dayOfAYear(let n){
	if(n%4===0) return 366;
	else if(n%100 && n%400===0) return 366;
	else return 365;
}