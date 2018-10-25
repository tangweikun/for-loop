function forLoop(arr, loops = 2) {
  let res = []
  const len = arr.length - loops
  helper([], 1, 0)

  function helper(cache, currentLoop, start) {
    for (let i = start; i < len + currentLoop; i++) {
      if (currentLoop === loops) {
        res.push(cache.concat(arr[i]))
      } else {
        helper(cache.concat(arr[i]), currentLoop + 1, i + 1)
      }
    }
  }

  return res
}

module.exports = forLoop
