export type Place = {
    addressComponents: AddressComponent[];
    formattedAddress: string;
    location: {
        latitude: number;
        longitude: number;
    };
    name: string;
    placeId: string;
    types: string[];
}

export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}

export interface IGMapsApiStatus {
    status: "loading" | "idle" | "ready" | "error";
}

export interface TripRoute {
    origin: Place | null;
    destination: Place | null;
    distance: number | null;
    duration: string | null;
}