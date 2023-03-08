import { Place } from "../types";

export const PlaceMapper = (gPlace: any): Place => {
    const lat = gPlace.geometry.location.lat();
    const lng = gPlace.geometry.location.lng();
    return({
        addressComponents: gPlace.address_components,
        formattedAddress: gPlace.formatted_address,
        location: {
            latitude: lat,
            longitude: lng
        },
        name: gPlace.name,
        placeId: gPlace.place_id,
        types: gPlace.types
    })
};