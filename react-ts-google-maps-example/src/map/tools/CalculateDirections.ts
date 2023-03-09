

const calculateDirections = async (points: google.maps.places.PlaceResult[]) => {
    const service  = new google.maps.DirectionsService();

    const directions = await service.route(
      {
          origin: points[0].formatted_address!,
          destination: points[1].formatted_address!,
          travelMode: google.maps.TravelMode.DRIVING,
      }
    );

    return directions;
}

export default calculateDirections;