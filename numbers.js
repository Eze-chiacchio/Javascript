function findOutlier(integers){
    var acumulado=0
    var resultado
    for(var i=0; i<integers.length; i++){
      acumulado= acumulado + integers[i]% 2
      console.log(acumulado)
    }
    if(acumulado>=1){
      for(var i=0; i<integers.length;i++)
      if(integers[i % 2]==0){
      resultado=integers[i]   
      }
    }
    return resultado
  }
  findOutlier([0,1,2])