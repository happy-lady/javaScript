//Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time: number | string) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

export {leadingZero };