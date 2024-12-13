export interface FacilityListDataProp {
    title: string;
    id: number;
    badge: string;
    image: string;
    description: string;
    issue: string;
    resolved: string;
    comment: string;
    like: string;
    progress: string;
    customer1: string;
    customer2: string;
    customer3: string;
    sites: string;
}


export interface GeoLocation {
    _id: string;
    StreetAddress: string;
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
    CreatedOn: string;
    UpdatedOn: string;
    IsActive: boolean;
    IsDeleted: boolean;
    __v: number;
  }
  
  export interface StorageType {
    _id: string;
    Type: string;
    CreatedOn: string;
    UpdatedOn: string;
    IsActive: boolean;
    isDeleted: boolean;
    __v: number;
  }
  
  export interface StorageFacilityCapacity {
    _id: string;
    StorageTypeId: StorageType;
    StorageCapacity: string;
    CapacityUnit: string;
  }
  
  export interface FacilityListData {
    _id: string;
    User: string;
    isOwner: boolean;
    Name: string;
    OperatingHours: string;
    ContactDetails: string[];
    CreatedOn: string;
    UpdatedOn: string;
    IsActive: boolean;
    IsDeleted: boolean;
    GeoLocation: GeoLocation;
    __v: number;
    StorageFacilityCapacities: StorageFacilityCapacity[];
  }
  
export interface RegisterType {
    description: string;
    title: string;
    client_name: string;
    rate: number;
}
export interface FacilityListTabProp {
    activeTab: number;
}

export interface FacilityListNavProps {
    activeTab: number;
    setActiveTab: (value: number) => void;
}

export interface CommonFacilityListProps {
    item: FacilityListData;
}