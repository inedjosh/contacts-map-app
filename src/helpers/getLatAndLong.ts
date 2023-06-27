export default () => {
  const lat = Math.random() * 10 + 4; // Generate random latitude between 4 and 14
  const long = Math.random() * 12 + 3; // Generate random longitude between 3 and 15

  return { lat, long };
};
