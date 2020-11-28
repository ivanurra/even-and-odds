function evensAndOdds(num){
    if (num % 2 === 0){
      return (num >>> 0).toString(2)
    } else {
      let hex = num.toString(16)
      return hex
    }
  }