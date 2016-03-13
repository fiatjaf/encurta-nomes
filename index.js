module.exports = nameShorten

function nameShorten (name, maxLength) {
  maxLength = maxLength || 23
  var i = 0
  while (name.length >= maxLength) {
    var ns = name.split(' ')
    var index = ns.length - (2 + i)
    if (index === 0) break

    if (ns[index][0] === ns[index][0].toUpperCase()) {
      ns[index] = ns[index][0] + '.'
    }
    name = ns.join(' ')
    i++
  }

  if (name.length >= maxLength) {
    ns = name.split(' ')
    for (var j = 0; j < ns.length; j++) {
      if (ns[j].length <= 2) {
        ns[j] = ''
      }
    }
    name = ns.filter(function (x) { return x }).join(' ')
  }

  return name
}
