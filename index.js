// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  /*const superbowlWin =record.find(rec => {
    if (rec === 'W') {
        return 'a win!';
    }
    else {
        return undefined;
    }
});*/
/*function superbowlWin() {
    record.find((rec,yr) => {
        if (rec === 'W') {
            return 'a win!', yr;
        }
        else {
            return undefined;
        }
    });
}
console.log(superbowlWin());*/
function superbowlWin(record) {
    const win = record.find(rec => rec.result === 'W');
    return win ? win.year : undefined;
}
