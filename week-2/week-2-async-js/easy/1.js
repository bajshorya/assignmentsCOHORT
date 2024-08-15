const counter = (n, interval) => {
  setInterval(() => {
    console.clear();
    console.log(n);
    console.log("first");
    n++;
  }, interval);
};
counter(1, 1000);
