import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Col, Form, FormGroup, Input, Row } from "reactstrap";
import { Btn, H5, P } from "../../../../AbstractElements";
import { Cancel, Select } from "../../../../Utils/Constants";
import { getStorageType, submitFacility } from "../../../../api-service/Facility/Index";
import { getCountry, getStateByCountryId } from "../../../../api-service/Location/Index";
import { getCurrentLocation } from "../../../../Common/methods";
import { toast } from "react-toastify";

interface FacilityFormData {
    isOwner: boolean;
    Name: string;
    ContactDetails: string[];
    OpeningTime: string;
    ClosingTime: string;
    GeoLocationData: {
        StreetAddress: string;
        District: string;
        City: string;
        State: string;
        Country: string;
        Latitude: number;
        Longitude: number;
        Pincode: string;
    };
    StorageCapacities: [];
    StorageTypeId: string;
    StorageCapacity: string;
    CapacityUnit: string;
}

export default function CreateNewFacilityForm() {

    const { register, handleSubmit, formState: { errors }, setValue, clearErrors, watch } = useForm<FacilityFormData>();
    const navigate = useNavigate();
    const [stateId, setStateId] = useState("");
    const [unit, setUnit] = useState("Tons");
    const [storageCap, setStorageCap] = useState("");
    const [StorageTypeId, setStorageTypeId] = useState("");
    const [storageTypeName, setStorageTypeName] = useState("");
    const [storagetypeList, setStorageTypeList] = useState<any[]>([]);
    const [storagetypeListCopy, setStorageTypeListCopy] = useState<any[]>([]);
    const [countryId, setCountryId] = useState("6756db013ed3e2903dd608fc");
    const [storagetype, setStorageTypes] = useState([]);
    const [countryList, setCountryList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const getStorageTypes = async () => {
        const response = await getStorageType()
        if (response != null) {
            setStorageTypes(response.data)
        }
    }

    const resetForm = () => {
        setValue('isOwner', false);
        setValue('Name', '');
        setValue('OpeningTime', '');
        setValue('ClosingTime', '');
        setValue('ContactDetails.0', "");
        setValue('ContactDetails.1', "");
        setValue('GeoLocationData.StreetAddress', '');
        setValue('GeoLocationData.District', '');
        setValue('GeoLocationData.City', '');
        setValue('GeoLocationData.State', '');
        setValue('GeoLocationData.Country', '');
        setValue('GeoLocationData.Pincode', '');
        setValue('StorageCapacities', []);
        setValue('StorageTypeId', '');
        setValue('StorageCapacity', '');
        setValue('CapacityUnit', 'Tons');
        setStorageTypeList([]);
        setStorageTypeListCopy([]);
    }

    const getCountryList = async () => {
        const response = await getCountry(navigate);
        if (response != null) {
            setCountryList(response.data);
        }
    }

    const getStateList = async (id: any) => {
        const response = await getStateByCountryId(id, navigate);
        if (response != null) {
            setStateList(response.data);
        }
        else {
            setStateList([]);
        }
    }

    const handleCountryChange = (e: any) => {
        setCountryId(e.target.value);
        setValue('GeoLocationData.Country', e.target.value);
        getStateList(e.target.value);
    }


    const addFacility = async (data: any) => {
        debugger;
        const location = await getCurrentLocation();
        data.StorageCapacities = storagetypeListCopy;
        data.GeoLocationData.Latitude = location.latitude;
        data.GeoLocationData.Longitude = location.longitude;
        console.log(data)
        const response = await submitFacility(data, navigate,resetForm);
    };
    const clearStorageTypeForm = () => {
        setUnit('Tons');
        setStorageTypeId('');
        setStorageCap('');
    }
    const addStorageType = async (data: any) => {
        debugger;
        if (storageCap == '' || StorageTypeId == '') {
            toast.error("Storage Type and capacity are required.")
            return;
        }
        if (storagetypeList.some(storagetype => storagetype.StorageTypeId === data.StorageTypeId)) {
            toast.warning(`Storage type "${storageTypeName}" already exists.`)
        }
        else {
            storagetypeList.push({
                StorageTypeId: data.StorageTypeId,
                StorageTypeName: storageTypeName,
                StorageCapacity: data.StorageCapacity,
                CapacityUnit: data.CapacityUnit,
            });

            storagetypeListCopy.push({
                StorageTypeId: data.StorageTypeId,
                StorageCapacity: data.StorageCapacity,
                CapacityUnit: data.CapacityUnit,
            })
        }
        clearStorageTypeForm()
    };

    const removeItem = (indexToRemove:any) => {
        const updatedList = storagetypeList.filter((_, index) => index !== indexToRemove);
        setStorageTypeList(updatedList);

        const updatedListCopy = storagetypeListCopy.filter((_, index) => index !== indexToRemove);
        setStorageTypeListCopy(updatedListCopy);
    };


    useEffect(() => {
        getCountryList();
        getStateList(countryId)
        setValue('GeoLocationData.Country', countryId);
        getStorageTypes();
    }, [])

    return (
        <Form className="theme-form basic-form mb-4" onSubmit={handleSubmit(addFacility)}>
            <Row>
                <Col sm={6} md={6}>
                    <FormGroup>
                        <H5 className="f-w-600 mb-2">Facility Name</H5>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Facility Name"
                            {...register("Name", { required: "Facility Name is required" })}
                        />
                        {errors.Name && <span style={{ color: "red" }}>{errors.Name.message}</span>}
                    </FormGroup>
                </Col>
                <Col sm={3} md={3}>
                    <FormGroup>
                        <H5 className="f-w-600 mb-2">Opening Time</H5>
                        <input
                            id="opening-time"
                            className="form-control me-3"
                            type="time"
                            {...register("OpeningTime", {
                                required: "Opening Time is required",
                            })}
                        />
                        {errors.OpeningTime && (
                            <span style={{ color: "red" }}>{errors.OpeningTime.message}</span>
                        )}
                    </FormGroup>
                </Col>

                <Col sm={3} md={3}>
                    <H5 className="f-w-600 mb-2">Closing Time</H5>
                    <FormGroup>
                        <input
                            id="closing-time"
                            className="form-control"
                            type="time"
                            {...register("ClosingTime", {
                                required: "Closing Time is required",
                            })}
                        />
                        {errors.ClosingTime && (
                            <span style={{ color: "red" }}>{errors.ClosingTime.message}</span>
                        )}
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <H5 className="f-w-600 mb-2">Contact Details</H5>
                <Col sm={6} md={6}>
                    <FormGroup>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Phone Number"
                            {...register("ContactDetails.0", {
                                required: "Phone Number is required",
                            })}
                        />

                        {errors.ContactDetails?.[0] && (
                            <span style={{ color: "red" }}>{errors.ContactDetails[0].message}</span>
                        )}
                    </FormGroup>
                </Col>
                <Col sm={6} md={6}>
                    <FormGroup>
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Email Address"
                            {...register("ContactDetails.1", {
                                required: "Email Address is required",
                            })}
                        />
                        {errors.ContactDetails?.[1] && (
                            <span style={{ color: "red" }}>{errors.ContactDetails[1].message}</span>
                        )}
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <H5 className="f-w-600 mb-2">Address</H5>
                <Col sm={6}>
                    <FormGroup>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Street Address"
                            {...register("GeoLocationData.StreetAddress", {
                                required: "Street Address is required",
                            })}
                        />
                        {errors.GeoLocationData?.StreetAddress && (
                            <span style={{ color: "red" }}>{errors.GeoLocationData.StreetAddress.message}</span>
                        )}
                    </FormGroup>
                </Col>
                <Col sm={6}>
                    <FormGroup>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="District"
                            {...register("GeoLocationData.District", {
                                required: "District is required",
                            })}
                        />
                        {errors.GeoLocationData?.District && (
                            <span style={{ color: "red" }}>{errors.GeoLocationData.District.message}</span>
                        )}
                    </FormGroup>
                </Col>
                <Col sm={6}>
                    <FormGroup>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="City"
                            {...register("GeoLocationData.City", {
                                required: "City is required",
                            })}
                        />
                        {errors.GeoLocationData?.City && (
                            <span style={{ color: "red" }}>{errors.GeoLocationData.City.message}</span>
                        )}
                    </FormGroup>
                </Col>
                <Col sm={6}>
                    <FormGroup>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Pincode"
                            {...register("GeoLocationData.Pincode", {
                                required: "Pincode is required",
                            })}
                        />
                        {errors.GeoLocationData?.Pincode && (
                            <span style={{ color: "red" }}>{errors.GeoLocationData.Pincode.message}</span>
                        )}
                    </FormGroup>
                </Col>
                <Col sm={6}>
                    <FormGroup>
                        <Input
                            type="select"
                            {...register("GeoLocationData.Country", {
                                required: "Country is required",
                            })}
                            onChange={(e) => { handleCountryChange(e) }}
                            value={countryId}
                        >
                            <option value="">Select Country</option>
                            {countryList && countryList.map((country: any, index) => (
                                <option key={index} value={country._id}>
                                    {country.CountryName}
                                </option>
                            ))}
                        </Input>

                        {errors.GeoLocationData?.Country && (
                            <span style={{ color: "red" }}>{errors.GeoLocationData.Country.message}</span>
                        )}
                    </FormGroup>
                </Col>
                <Col sm={6}>
                    <FormGroup>
                        <Input
                            type="select"
                            {...register("GeoLocationData.State", {
                                required: "State is required",
                            })}
                            onChange={(e) => {
                                setValue('GeoLocationData.State', e.target.value);
                                setStateId(e.target.value);
                            }}
                            value={stateId}

                        >
                            <option value="">Select State</option>
                            {stateList && stateList.map((state: any, index) => (
                                <option key={index} value={state._id}>
                                    {state.StateName}
                                </option>
                            ))}
                        </Input>
                        {errors.GeoLocationData?.State && (
                            <span style={{ color: "red" }}>{errors.GeoLocationData.State.message}</span>
                        )}
                    </FormGroup>
                </Col>

            </Row>
            <Row>
                <H5 className="f-w-600 mb-2">Storage Type</H5>
                <Col sm={5}>
                    <FormGroup>
                        <select
                            onChange={(e) => {
                                setStorageTypeId(e.target.value);
                                const selectedOption = e.target.selectedOptions[0];
                                const selectedValue = selectedOption.value;
                                const selectedText = selectedOption.text;
                                setStorageTypeId(selectedValue);
                                setStorageTypeName(selectedText);
                            }}
                            style={{ width: '100%' }}
                            value={StorageTypeId}
                        >
                            <option value="">Select Storage Type</option>
                            {storagetype && storagetype.map((storagetype: any) => (
                                <option key={storagetype._id} value={storagetype._id}>{storagetype.Type}</option>
                            ))
                            }
                        </select>
                        {/* {errors.StorageTypeId && (
                            <span style={{ color: "red" }}>{errors.StorageTypeId.message}</span>
                        )} */}
                    </FormGroup>
                </Col>
                <Col sm={4} md={4}>
                    <FormGroup>
                        <input
                            className="form-control"
                            type="number"
                            placeholder="Storage Capacity"
                            onChange={(e) => { setStorageCap(e.target.value) }}
                            value={storageCap}
                        />
                        {errors.StorageCapacity && <span style={{ color: "red" }}>{errors.StorageCapacity.message}</span>}
                    </FormGroup>
                </Col>
                <Col sm={1} md={1}>
                    <FormGroup>
                        <Input
                            type="select"
                            // {...register("CapacityUnit", {
                            //     required: "Unit is required",
                            // })}
                            onChange={(e) => {
                                setUnit(e.target.value);
                            }}
                            value={unit}
                        >

                            <option value="Tons">Tons</option>
                            <option value="Kg">Kg</option>
                            <option value="Litre">Litre</option>
                            {/* <option value="cubic meter"><span>m</span><sup>3</sup></option> */}
                        </Input>
                        {errors.CapacityUnit && <span style={{ color: "red" }}>{errors.CapacityUnit.message}</span>}
                    </FormGroup>
                </Col>
                <Col sm={2} md={2} className="d-flex text-end mb-4">

                    <Btn
                        type="button"
                        color="success"
                        className="mx-3"
                        onClick={() => {
                            const data = {
                                StorageTypeId: StorageTypeId,
                                StorageCapacity: storageCap,
                                CapacityUnit: unit,
                            };
                            addStorageType(data);
                        }}
                    >
                        Add
                    </Btn>
                    <Btn
                        type="button"
                        color="danger"
                        className="mx-2"

                        onClick={() => {
                            setUnit('Tons');
                            setStorageTypeId('');
                            setStorageCap('');
                        }}
                    >
                        Clear
                    </Btn>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <ul className="list-group mt-3">
                        {storagetypeList.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between mb-2">
                               <P><strong>Type:</strong> {item.StorageTypeName}, <strong>Capacity:</strong>{" "}
                               {item.StorageCapacity} {item.CapacityUnit}
                               </P> 
                               <strong onClick={()=>removeItem(index)} style={{cursor:'pointer'}}  className="fs-4">
                                  x
                               </strong>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="text-end mt-3">
                        <Btn color="success" className="me-3" disabled={storagetypeList.length>0?false:true}>
                            Submit  
                        </Btn>
                        <Btn color="danger" type="button" onClick={(e) => { clearErrors(); resetForm() }}>Reset</Btn>
                    </div>
                </Col>
            </Row>
        </Form>
    );
}
