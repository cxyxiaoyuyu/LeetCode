// function hanoi(disc, src, aux, dst) {
//   if (disc === 1) {
//     console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst)
//     return
//   }

//   hanoi(disc - 1, src, dst, aux)
//   console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst)
//   hanoi(disc - 1, aux, src, dst)
// }

function hanoi(disc, src, aux, dst) {
  if (disc > 0) {
    hanoi(disc - 1, src, dst, aux)
    console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst)
    hanoi(disc - 1, aux, src, dst)
  }
}

hanoi(3, 'A', 'B', 'C')