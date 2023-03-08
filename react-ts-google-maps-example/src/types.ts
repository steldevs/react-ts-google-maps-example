export type Place = {
    formattedAddress: string;
    location: {
        latitude: number;
        longitude: number;
    };
    name: string;
    placeId: string;
    types: string[];
}

export interface IGMapsApiStatus {
    status: "loading" | "idle" | "ready" | "error";
}