export const countingFunction = (sun, timeZone=0) => {
    const time = new Date((sun + timeZone) * 1000);
    const res = time.getUTCHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
    return res
}