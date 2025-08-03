const merge = (arr, s, m, e) => {
  const aL = m - s + 1;
  const bL = e - m;
  const a = arr.slice(s, s + aL);
  const b = arr.slice(m + 1, m + 1 + bL);
  let i = 0,
    j = 0,
    k = s;
  while (i < aL && j < bL) arr[k++] = a[i] < b[j] ? a[i++] : b[j++];
  while (i < aL) arr[k++] = a[i++];
  while (j < bL) arr[k++] = b[j++];
};
const mergeSort = (arr, s, e) => {
  if (s < e) {
    const m = Math.floor((s + e) / 2);
    mergeSort(arr, s, m);
    mergeSort(arr, m + 1, e);
    merge(arr, s, m, e);
  }
};
const fibsRec = (n) => {
  const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
  return Array.from({ length: n }, (v, k) => fib(k));
};
const fibs = (n, arr = []) => {
  let t1 = 0;
  let t2 = 1;
  if (n == 1) return [t1];
  else if (n == 2) return [t1, t2];
  arr.push(t1);
  arr.push(t2);
  for (let i = 3; i <= n; i++) {
    let t3 = t1 + t2;
    arr.push(t3);
    t1 = t2;
    t2 = t3;
  }
  return arr;
};
const arr = [9, 5, 8, 1, 3, 1];
mergeSort(arr, 0, arr.length - 1);
console.log("merge sort:", arr);
const n = 8;
console.log(`iterative fibs series for n = ${n}:`);
console.log(fibs(n));
console.log(`recursive fibs series for n = ${n}`);
console.log(fibsRec(n));
