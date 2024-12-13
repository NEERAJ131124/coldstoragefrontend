import { GridTableBodyItems } from "../../Types/UiKits.type";

export const gridOptionsSubTitle = [
    {
        text: "Bootstrap grid system allow all six breakpoints, and any breakpoints you can customize."
    }
];

export const gridColumnSubTitle = [
    {
        text: 'Use predefined grid classes using ',
        code: '.col-md-*'
    },
    {
        text: ' class to set the grid system.'
    }
];

export const verticalAlignSubTitle = [
    {
        text: 'Use ',
        code: 'align-items-*'
    },
    {
        text: ' class to set the Vertical alignment.'
    }
];

export const horizontalAlignSubTitle = [
    {
        text: 'Set horizontal alignment using',
        code: ' justify-content-* '
    },
    {
        text: 'class.'
    }
];

export const nestingSubTitle = [
    {
        text: 'To nest your content with the default grid, add a new',
        code: '.row'
    },
    {
        text: ' and set of ',
        code: '.col-sm-*'
    },
    {
        text: ' columns within an existing ',
        code: '.col-sm-*'
    },
    {
        text: '  column.'
    }
];

export const orderSubTitle = [
    {
        text: 'Using',
        code: ' .order '
    },
    {
        text: 'class set the order position.'
    }
];

export const offsetSubTitle = [
    {
        text: 'Offset the grid column using',
        code: ' .offset-grid '
    },
    {
        text: 'class.'
    }
];

export const gridtableHeadData = [
    {
        text1: 'Extra small',
        text2: '<576px'
    },
    {
        text1: 'Small',
        text2: '≥576px'
    },
    {
        text1: 'Medium',
        text2: '≥768px'
    },
    {
        text1: 'Large',
        text2: '≥992px'
    },
    {
        text1: 'Extra large',
        text2: '≥1200px'
    },
    {
        class: 'digits',
        text1: 'Extra extra large',
        text2: '≥1400px'
    },
];

export const gridTableBodyData: GridTableBodyItems[] = [
    {
        id: 1,
        head: 'Grid behavior',
        data: [
            {
                id: 1,
                text: 'Horizontal at all times'
            },
            {
                id: 2,
                span: 5,
                text: 'Collapsed to start, horizontal above breakpoints'
            }
        ]
    },
    {
        id: 2,
        head: 'Max container width',
        data: [
            {
                id: 1,
                text: 'None (auto)'
            },
            {
                id: 2,
                text: '540px'
            },
            {
                id: 3,
                text: '720px'
            },
            {
                id: 4,
                text: '960px'
            },
            {
                id: 5,
                text: '1140px'
            },
            {
                id: 6,
                text: '1320px'
            }
        ]
    },
    {
        id: 3,
        head: 'Class prefix',
        data: [
            {
                id: 1,
                text: <code>{'.col-'}</code>
            },
            {
                id: 2,
                text: <code>{'.col-sm-'}</code>
            },
            {
                id: 3,
                text: <code>{'.col-md-'}</code>
            },
            {
                id: 4,
                text: <code>{'.col-lg-'}</code>
            },
            {
                id: 5,
                text: <code>{'.col-xl-'}</code>
            },
            {
                id: 6,
                text: <code>{'.col-xxl-'}</code>
            }
        ]
    },
    {
        id: 4,
        head: '# of columns',
        data: [
            {
                id: 1,
                span: 6,
                text: '12'
            }
        ]
    },
    {
        id: 5,
        head: 'Gutter width',
        data: [
            {
                id: 1,
                span: 6,
                text: '1.5rem (.75rem on left and right)'
            }
        ]
    },
    {
        id: 6,
        head: 'Nestable',
        data: [
            {
                id: 1,
                span: 6,
                text: 'Yes'
            }
        ]
    },
    {
        id: 7,
        head: 'Offsets',
        data: [
            {
                id: 1,
                span: 6,
                text: 'Yes'
            }
        ]
    },
    {
        id: 8,
        head: 'Column ordering',
        data: [
            {
                id: 1,
                span: 6,
                text: 'Yes'
            }
        ]
    },
];

export const gridColumnData = [1, 2, 2, 3, 4, 5, 7, 6, 6, 8, 4, 9, 3, 10, 2, 12];

export const verticalAlignmentData = [
    {
        id: 1,
        align: 'start',
        data: [
            { id: 1, text: 'one column' },
            { id: 2, text: 'two column' },
        ]
    },
    {
        id: 2,
        align: 'center',
        data: [
            { id: 1, text: 'one column' },
            { id: 2, text: 'two column' },
        ]
    },
    {
        id: 3,
        align: 'end',
        data: [
            { id: 1, text: 'one column' },
            { id: 2, text: 'two column' },
        ]
    }
];

export const gridOrderBodyData = [
    {
        xs: 3,
        class: 'order-3',
        text: 'First Item (order-3)'
    },
    {
        xs: 5,
        class: 'order-first',
        text: 'Second Item (order-first)'
    },
    {
        xs: 4,
        class: 'order-last',
        text: 'Third Item (order-last)'
    },
    {
        xs: 3,
        class: 'order-2',
        text: 'Fourth Item (order-2)'
    },
    {
        xs: 4,
        class: 'col-sm-2 order-5',
        text: 'fifth Item (order-5)'
    },
    {
        xs: 4,
        class: 'col-sm-6 order-4',
        text: 'sixth Item (order-4)'
    }
];

export const offsetBodyData = [
    {
        sm: 5,
        xs: 4,
        class: 'offset-sm-3 offset-2',
        text: 'col-5 offset-3'
    },
    {
        sm: 2,
        xs: 4,
        class: 'offset-sm-2 offset-1',
        text: 'col-2 offset-2'
    },
    {
        sm: 4,
        xs: 5,
        class: 'offset-2',
        text: 'col-4 offset-2'
    },
    {
        sm: 3,
        xs: 4,
        class: 'offset-sm-2 offset-1',
        text: 'col-3 offset-2'
    }
]
