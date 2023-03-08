
const calculateMatrix = async ( points: google.maps.places.PlaceResult[] ) => {
    var service = new window.google.maps.DistanceMatrixService();

    var matrixRequest: google.maps.DistanceMatrixRequest = {
       destinations: [
           new google.maps.LatLng(
            points[1].geometry!.location!.lat(),
            points[1].geometry!.location!.lng()
           )
       ],
       origins: [
           new google.maps.LatLng(
            points[0].geometry!.location!.lat(),
            points[0].geometry!.location!.lng()
           )
       ], 
       travelMode: google.maps.TravelMode.DRIVING,
       transitOptions: {}
    }

    const matrix = await service.getDistanceMatrix(matrixRequest);

    return {
        distance: (matrix.rows[0].elements[0].distance.value * 0.000621371).toFixed(1),
        duration: matrix.rows[0].elements[0].duration.text
    }
}

export default calculateMatrix;