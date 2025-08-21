export async function wait(delay = 1000) {
  await new Promise(resolve => setTimeout(resolve, delay));
}

export async function waitFor(func, delay = 100, limit = 1000) {
  const timeLimit = Date.now() + limit;
  while (!func() && Date.now() < timeLimit) {
    await wait(delay);
  }
}
