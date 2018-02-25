export const setActiveStore = store => ({
  type: 'SET_ACTIVE_STORE',
  payload: store,
});

export const flyToStore = (map, currentFeature) => (
  () => {
    map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15,
    });
  }
);
