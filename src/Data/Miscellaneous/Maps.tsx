
export const worldMapSubheading = [
    {
        text: "Below Map is displaying the world map.",
    },
];

export const usaMapSubHeading = [
    {
        text: "Below Map is displaying the USA map.",
    },
];
export const indiaMapSubHeading = [
    {
        text: "Below Map is displaying the India map.",
    },
];

export const australiaMapSubHeading = [
    {
        text: "Below Map is displaying the Australia map.",
    },
];

const worldPosition = { lat: 50, lng: 10 };
const usaPosition = { lat: 37.0902, lng: -95.7129 }
const indiaPosition = { lat: 20.5937, lng: 78.9629 }

export const worldMapProps = {
    center: worldPosition,
    zoom: 2,
    maxZoom: 10,
    attributionControl: true,
    zoomControl: true,
    doubleClickZoom: true,
    scrollWheelZoom: true,
    dragging: true,
    easeLinearity: 0.35,
};

export const usaMapProps = {
    center: usaPosition,
    zoom: 4,
    minZoom: 2,
    maxZoom: 10
}

export const indiaMapProps = {
    center: indiaPosition,
    zoom: 5,
}

export const centerAustralia = { lat: -25.2744, lng: 130.7751 };

export const australiaMapProps = {
    center: centerAustralia,
    zoom: 4,
    zoomControl: true,
    doubleClickZoom: true,
    scrollWheelZoom: true,
    dragging: true,
}
export const containerStyle = {
    height: "500px",
};
export const defaultCenter = {
    lat: -3.745,
    lng: -38.523,
};
