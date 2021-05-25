function convert(val, unitIn, unitOut) {
var convertionUnit = { "rpm" : 1.0, "rps" : 60.0, "rad/s" : 9.5492965855137, "rad/m" : 572.957795130822, "deg/s" : 0.16666667125087017, "deg/m" : 9.999999998122608 }

return val * convertionUnit[unitIn]/ convertionUnit[unitOut] 
}