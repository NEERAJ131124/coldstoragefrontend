import { FormGroup, Input } from "reactstrap";
import { TableColumn } from "react-data-table-component";
import { Badges, Image, P } from "../../../AbstractElements";
import { CategoryTableTypes, CustomCompoentType } from "../../../Types/ECommerce.type";
import { dynamicImage } from "../../../Utils";
import DashboardSvgIcon from "../../../Utils/CommonComponents/DashboardSvgIcon";

export const productListBodyData = [
    {
        name: "Choose Product",
        options: ["Apple iphone 13 Pro", "Wood Chair", "M185 Compact Wireless Mouse"],
    },
    {
        name: "Choose Category",
        options: ["Furniture", "Smart Gadgets", "Electrics"],
    },
    {
        name: "Choose Sub Category",
        options: ["Smart Phones", "Smart Watches", "Wireless headphone"],
    },
    {
        name: "Status",
        options: ["Sold Out", "In Stock", "Pre Order", "Limited Stock"],
    },
    {
        name: "Price",
        options: ["56000.00", "19000.00", "10000.00", "15000.00", "99000.00"],
    },
];

const CustomImage = ({ src, name }: CustomCompoentType) => (
    <div className="product-names">
        <div className="light-product-box">
            <Image className="img-fluid" src={dynamicImage(src)} alt="t-shirt" />
        </div>
        <P>{name}</P>
    </div>
)

const CustomDescrioption = ({ text }: CustomCompoentType) => (
    <P className="f-light">{text}</P>
)

const CustomType = ({ color, text }: CustomCompoentType) => (
    <Badges color={`light-${color}`}>{text}</Badges>
)

export const categoryTableData: CategoryTableTypes[] = [
    {
        id: 1,
        image: 'product/1.png',
        categoryName: 'T-Shirts',
        description: "Special PriceGet at flat ₹229",
        categoryColor: 'primary',
        categoryType: 'Clothing',
        action: true,
    },
    {
        id: 2,
        image: 'product/category/1.png',
        categoryName: 'Shoes',
        description: "Up to ₹300, on orders of ₹1750 and above T&C",
        categoryColor: 'primary',
        categoryType: 'Footwear',
        action: true,
    },
    {
        id: 3,
        image: 'product/category/2.png',
        categoryName: 'Handbags',
        description: "Passed 30+ quality checks performed by experts for Comfort & Design.",
        categoryColor: 'secondary',
        categoryType: 'Accessories',
        action: true,
    },
    {
        id: 4,
        image: 'product/product-categories/1.png',
        categoryName: 'Chairs',
        description: "Passed 30+ quality checks performed by experts for Comfort & Design.",
        categoryColor: 'secondary',
        categoryType: 'Accessories',
        action: true,
    },
    {
        id: 5,
        image: 'product/category/3.png',
        categoryName: 'Toys',
        description: "Assembling Shape Educational Toys (Multicolor)",
        categoryColor: 'success',
        categoryType: 'Electronic',
        action: true,
    },
    {
        id: 6,
        image: 'product/category/4.png',
        categoryName: 'Slipper',
        description: "Easy to wear and comfortable slip on slippers",
        categoryColor: 'primary',
        categoryType: 'Footwear',
        action: true,
    },
    {
        id: 7,
        image: 'product/category/5.png',
        categoryName: 'Cameras',
        description: "Our computers and tablets include all the big brands.",
        categoryColor: 'success',
        categoryType: 'Electronic',
        action: true,
    },
    {
        id: 8,
        image: 'product/2.png',
        categoryName: 'T-Shirts',
        description: "Special PriceGet at flat ₹100",
        categoryColor: 'primary',
        categoryType: 'Clothing',
        action: true,
    },
    {
        id: 9,
        image: 'product/product-categories/watch.png',
        categoryName: 'Watches',
        description: "Experience luxury and precision with our meticulously crafted timepieces",
        categoryColor: 'success',
        categoryType: 'Electronic',
        action: true,
    },
    {
        id: 10,
        image: 'product/12.png',
        categoryName: 'T-Shirts',
        description: "Special PriceGet at flat ₹300",
        categoryColor: 'primary',
        categoryType: 'Clothing',
        action: true,
    },
    {
        id: 11,
        image: 'product/category/1.png',
        categoryName: 'Shoes',
        description: "Up to ₹300, on orders of ₹1750 and above T&C",
        categoryColor: 'primary',
        categoryType: 'Footwear',
        action: true,
    },
    {
        id: 12,
        image: 'product/category/3.png',
        categoryName: 'Toys',
        description: "Assembling Shape Educational Toys (Multicolor)",
        categoryColor: 'success',
        categoryType: 'Electronic',
        action: true,
    },
    {
        id: 13,
        image: 'product/category/4.png',
        categoryName: 'Slipper',
        description: "Easy to wear and comfortable slip on slippers",
        categoryColor: 'primary',
        categoryType: 'Footwear',
        action: true,
    },
    {
        id: 14,
        image: 'product/category/5.png',
        categoryName: 'Cameras',
        description: "Our computers and tablets include all the big brands.",
        categoryColor: 'success',
        categoryType: 'Electronic',
        action: true,
    },
    {
        id: 15,
        image: 'product/product-categories/watch.png',
        categoryName: 'Watches',
        description: "Experience luxury and precision with our meticulously crafted timepieces",
        categoryColor: 'success',
        categoryType: 'Electronic',
        action: true,
    },
    {
        id: 16,
        image: 'product/1.png',
        categoryName: 'T-Shirts',
        description: "Special PriceGet at flat ₹229",
        categoryColor: 'primary',
        categoryType: 'Clothing',
        action: true,
    },
    {
        id: 17,
        image: 'product/category/1.png',
        categoryName: 'Shoes',
        description: "Up to ₹300, on orders of ₹1750 and above T&C",
        categoryColor: 'primary',
        categoryType: 'Footwear',
        action: true,
    },
    {
        id: 18,
        image: 'product/category/2.png',
        categoryName: 'Handbags',
        description: "Passed 30+ quality checks performed by experts for Comfort & Design.",
        categoryColor: 'secondary',
        categoryType: 'Accessories',
        action: true,
    },
    {
        id: 19,
        image: 'product/product-categories/1.png',
        categoryName: 'Chairs',
        description: "Passed 30+ quality checks performed by experts for Comfort & Design.",
        categoryColor: 'secondary',
        categoryType: 'Accessories',
        action: true,
    },
];

export const categoryColumns: TableColumn<CategoryTableTypes>[] = [
    {
        name: '',
        cell: () => (
            <FormGroup check>
                <Input className="checkbox-primary" type="checkbox" />
            </FormGroup>
        ),
        sortable: false,
        width: '3%'
    },
    {
        name: 'Category',
        selector: (row) => row.categoryName,
        sortable: true,
        cell: (row) => <CustomImage src={row.image} name={row.categoryName} />,
        width: '15%'
    },
    {
        name: 'Description',
        selector: (row) => row.description,
        sortable: true,
        cell: (row) => <CustomDescrioption text={row.description} />,
        width: '35%'
    },
    {
        name: 'Category Type',
        selector: (row) => row.categoryType,
        sortable: true,
        cell: (row) => <CustomType color={row.categoryColor} text={row.categoryType} />,
    },
    {
        name: 'Action',
        cell: () => (
            <div className="product-action">
                <DashboardSvgIcon iconId='edit-content' />
                <DashboardSvgIcon iconId='trash1' />
            </div>
        ),
        sortable: true,
    },
];