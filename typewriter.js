const sentence = "hello there from lighthouse labs";

let time = 50;
let end = sentence.length - 1;

for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i];
  setTimeout(() => {
    process.stdout.write(char);
    if (i === sentence.length - 1) {
      process.stdout.write("\n");
    }
  }, time);
  
  time += 50;
}