export async function wait(delay = 1000) {
  await new Promise(resolve => setTimeout(resolve, delay));
}

export async function waitFor(func, delay = 100, attempts = 10) {
  while (!func() && !!attempts) {
    await wait(delay);
    attempts--;
  }
}
