export default (): [number, number] | null => {
  if (navigator) {
    navigator.geolocation.getCurrentPosition((position: any) => {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      return [latitude, longitude];
    });
  }
  return null;
};
