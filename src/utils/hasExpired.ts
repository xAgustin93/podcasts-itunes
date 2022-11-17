export const hasExpired = (deadline: number) => {
  const currentData = new Date().getTime();

  if (deadline <= currentData) {
    return true;
  }

  return false;
};
