const success = async (position) => {
  console.log(position);
  return {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
};

const error = () => {
  alert("Unable to to find your location, please try again");
};

export default () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("Looks like your browser can't acces your location");
  }
};
