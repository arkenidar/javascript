
if(typeof logger=="undefined")
    var logger = function(...args){ console.log(...args) }

function FormatDateItalianToInternational(data) { // "GG/MM/AAAA" => "AAAA-MM-GG"
    return data.split("/").reverse().join("-")
}
logger(FormatDateItalianToInternational("GG/MM/AAAA"))
logger(FormatDateItalianToInternational("22/02/2024"))
var date = new Date(FormatDateItalianToInternational("22/02/2024"))
var pad = number => String(number).padStart(2, '0')
var format = date => `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())}`
logger(format(date))
logger(date)
