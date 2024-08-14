const counter = (n, interval) => {
  setInterval(() => {
    console.clear();
    console.log(n);
    n++;
  }, interval);
};
counter(1, 1000);
