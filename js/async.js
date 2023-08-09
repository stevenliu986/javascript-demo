const resolver = (msg, timeout) =>
  new Promise((resolve) => {
    console.log(msg);
    setTimeout(resolve, timeout);
  });

async function run() {
  await resolve("First", 1000);
  await resolve("Second", 500);
  await resolve("Third", 1000);
  await resolve("Fourth", 500);
  await resolve("Fifth", 1000);
}
