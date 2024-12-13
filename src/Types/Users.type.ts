export interface UsersRequest {
    PhoneNumber: string;
    FirstName: string;
    LastName: string;
    GeoLocationData: {
        StreetAddress: string;
        District: string;
        City: string;
        State: string;
        Country: string;
        Pincode: string;
        Latitude: number;
        Longitude: number;
    };
    IsActive: boolean;
    IsDeleted: boolean;
}

export interface UserResponse {
    PhoneNumber: string;
    Email: string;
    FirstName: string;
    LastName: string;
    GeoLocationId: {
        StreetAddress: string;
        District: string;
        City: string;
        State: {
            _id: string;
            StateName: string;
        };
        Country: {
            _id: string;
            CountryName: string;
        };
        Pincode: string;
        Latitude: number;
        Longitude: number;
    };
    IsActive: boolean;
    IsDeleted: boolean;
}

