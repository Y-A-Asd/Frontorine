let inp = [{
    "id": 1,
    "first_name": "Siana",
    "last_name": "Tethacot",
    "age": 19,
    "salary": 7372,
    "workActivity": 22
}, {"id": 2, "first_name": "Gerard", "last_name": "Choke", "age": 35, "salary": 11653, "workActivity": 17}, {
    "id": 3,
    "first_name": "Ignace",
    "last_name": "Maffucci",
    "age": 1,
    "salary": 6950,
    "workActivity": 11
}, {"id": 4, "first_name": "Yasmeen", "last_name": "Kelleher", "age": 62, "salary": 5269, "workActivity": 4}, {
    "id": 5,
    "first_name": "Penn",
    "last_name": "Jordi",
    "age": 35,
    "salary": 7521,
    "workActivity": 15
}]

function sorted(input, base) {
    let sorted_arr = input.sort((a, b) => b[base] - a[base])
    return sorted_arr

}

function countOccurrences(arr) {
    const counts = {};
    arr.forEach((num) => {
        counts[num] = (counts[num] || 0) + 1;
    });
    return counts;
}


function findsamearr(arr, summ) {
  return arr.filter(element => {
    const sum = element.reduce((acc, num) => acc + num, 0);
    return sum === summ;
  });
}


function variance(inp) {
  const n = inp.length;
  const m = inp.reduce((a, num) => a + num, 0) / n;
  const sigma = inp.map(num => (num - m) ** 2);
    return sigma / (n-1)
}