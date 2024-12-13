const ConfigDB = {
    settings: {
        layout_type: 'ltr',
        layout_class: 'compact-wrapper',
        sidebar: {
            type: 'compact-wrapper',
            iconType: 'stroke-svg',
        },
        sidebar_setting: 'default-sidebar',
    },
    color: {
        primary_color: localStorage.getItem('primary') || '#308e87',
        secondary_color: localStorage.getItem('secondary') || '#f39159',
        mix_background_layout: 'light',
    },
    router_animation: 'fadeIn',
};

export default ConfigDB;