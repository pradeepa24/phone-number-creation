function createPhoneNumber(numbers){
    let phFirst = '(';
    let phSecond = ' ';
    let phThird = '';
      for(let i=0;i<3;i++){
      phFirst += numbers[i];
      }
      phFirst += ')';
      for(let j=3;j<6;j++) {
      phSecond += numbers[j];
      }
      phSecond += '-';
      for(let k=6;k<numbers.length;k++) {
      phThird += numbers[k];
      }
      return phFirst+phSecond+phThird;
    }
    console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));