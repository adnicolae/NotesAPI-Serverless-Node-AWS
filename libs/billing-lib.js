export const calculateCost = (storagePreference) => {
  const rate = storagePreference <= 10
    ? 5
    : storagePreference <= 100
    ? 3
    : 1;
  // return the price in pennies
  return rate * storagePreference * 100;
};