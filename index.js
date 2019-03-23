const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  const result = record.find(e => e.result === "W");
  return result ? result.year : result;
}