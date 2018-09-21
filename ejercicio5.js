function area(r){
    if(r<=0){
        return -1;
    }else{
        return "Area="+ (Math.PI * (Math.pow(r,2)));
    }
}