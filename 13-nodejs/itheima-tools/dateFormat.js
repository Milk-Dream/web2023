function dateFormat(dateStr) {
    const dt = new Date(dateStr)
    const y = dt.getFullYear()
    const m = padZero(dt.getMonth())
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

//补零的方法
function padZero(n) {
    return n > 9 ? n : "0" + n
}

module.exports = {
    dateFormat
}