const makeChange = (n) => {
  // your name here
	const money=[25,10,5,1];
    let q=0,d=0,ni=0,p=0,sum=0;
    while(money[0]*(q+1)<=n){
        q++;
    }
    sum+=q*money[0];
    while(sum+(money[1]*(d+1))<=n){
        d++;
    }
    sum+=d*money[1];
    while(sum+(money[2]*(ni+1))<=n){
        ni++;
    }
    sum+=ni*money[2];
    while(sum+(money[3]*(p+1))<=n){
        p++;
    }
    sum+=p*money[3];
    
    return {q,d,ni,p};
};

// Do not the change the code below
const c = Number(prompt("Enter c: "));
alert(JSON.stringify(makeChange(c)));
