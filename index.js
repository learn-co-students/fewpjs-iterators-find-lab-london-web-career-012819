
superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}

function superbowlWin(array){
return array.find(record => record.result === "W")
}