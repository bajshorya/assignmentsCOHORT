let n = 1;
const counter = () => {
  console.clear();
  console.log(n);
  n++;
  setTimeout(counter, 1000);
};
setTimeout(counter, 1000);
