import { ChangeEvent } from "react";

export interface ActiveCallbackProp {
    activeCallBack: (tab: number) => void;
}

export interface ProductTabContentProp {
    activeCallBack: (tab: number) => void;
    steps: number
}

export interface ProductFormNavProps {
    steps: number;
    setSteps: (step: number) => void;
}

export interface ActiveBorderProp {
    activeBorder: (val: number) => void;
}

export interface TooltipProp {
    labelText: string;
    tooltip: string;
    targetId: string;
}

export interface ToolbarBoxProp {
    label?: boolean;
    paragraph: string
}

export interface ProductTagProp {
    title: string;
    subTitle?: boolean;
}

export interface AdvanceCallBackProp {
    activeCallBack: (tab: number) => void;
    activeBorder: (val: number) => void;
}

export interface ShippingDimensionsProps {
    updateFormData: (event: ChangeEvent<HTMLInputElement>) => void;
    length: string;
    width: string;
    height: string;
}

interface VariantItems {
    color: string;
    images: string;
}

export interface ProductDataTypes {
    id: number;
    image: string;
    name: string;
    note: string;
    discription: string;
    discountPrice: string;
    status: string;
    price: number;
    stock: string;
    review: string;
    category: string;
    colors: string[];
    size: string[];
    tags: string[];
    variants: VariantItems[];
    quantity?: number | undefined;
    ribbonClassName?: string;
    sum?: number;
    total?: any;
}

interface FilterValueItems {
    min: number;
    max: number;
}
export interface FilterValueTypes {
    brand: string[];
    color: string;
    value: FilterValueItems;
    sortBy: string;
    searchBy: string;
    category: string[];
}

export interface EccomInitialStateProps {
    productItem: ProductDataTypes[];
    cartData: ProductDataTypes[];
    filterValue: FilterValueTypes;
}

export interface FilterComponentProps {
    onFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filterText: string;
}

export interface CategoryTableTypes {
    id: number,
    image: string,
    categoryName: string,
    description: string,
    categoryColor: string,
    categoryType: string,
    action: true,
}

export interface CustomCompoentType {
    src?: string;
    name?: string;
    text?: string;
    color?: string;
}

export interface ProductListHeaderProp {
    linkTitle: string;
}

export interface ProductListType {
    imageSrc: string;
    productName: string;
    sku: string;
    category: string;
    price: string;
    quantity: string;
    status: string;
    rating: number;
}

export interface OrderHistoryDataTableProps {
    product: string;
    productName: string;
    orderClass?: string;
    order: string;
    size: string;
    color: string;
    articleNumber: string;
    units: string;
    price: string;
}

export interface CheckoutFormType {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
}
export interface ProductQuantityProp {
    dataId: undefined | number;
    modelData: ProductDataTypes | undefined;
}

export interface ModalProductDetailsProp {
    modelData: ProductDataTypes | undefined;
}

export interface ProductModalProps {
    value: boolean;
    setOpenModal: (value: boolean) => void;
    dataId: undefined | number;
    modelData: ProductDataTypes | undefined;
}

export interface ProductHoverProps {
    onClickHandle: (item: ProductDataTypes) => void;
    item: ProductDataTypes;
}

export interface ProductDetailsProps {
    item: ProductDataTypes;
}

interface CommonProductSlideData {
    rowClass?: string;
    image: string;
    title: string;
    text: string;
}
export interface CommonProductSlideProp {
    data: CommonProductSlideData;
}
