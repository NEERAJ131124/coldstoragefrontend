export interface CountryRequest{
    ISOCode: string;
    CountryName: string;
}

export interface StateRequest{
    CountryID: string;
    StateName: string;
}