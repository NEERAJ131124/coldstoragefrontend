import { AlertCircle, Clock, Folder, Home, Star, Trash2 } from "react-feather";

export const fileSidebarButton = [
    {
        id: 1,
        icon: <Home />,
        text: 'Home'
    },
    {
        id: 2,
        icon: <Folder />,
        text: 'All'
    },
    {
        id: 3,
        icon: <Clock />,
        text: 'Recent'
    },
    {
        id: 4,
        icon: <Star />,
        text: 'Starred'
    },
    {
        id: 5,
        icon: <AlertCircle />,
        text: 'Recovery'
    },
    {
        id: 6,
        icon: <Trash2 />,
        text: 'Deleted'
    },
];

export const quickAccessData = [
    {
        id: 1,
        quickClass: 'fa-brands fa-youtube text-danger',
        quickTitle: 'Videos'
    },
    {
        id: 2,
        quickClass: 'fa-solid fa-table-cells text-info',
        quickTitle: 'Apps'
    },
    {
        id: 3,
        quickClass: 'fa-solid fa-file text-secondary',
        quickTitle: 'Document'
    },
    {
        id: 4,
        quickClass: 'fa-solid fa-music text-warning',
        quickTitle: 'Music'
    },
    {
        id: 5,
        quickClass: 'fa-solid fa-download text-primary',
        quickTitle: 'Download'
    },
    {
        id: 6,
        quickClass: 'fa-solid fa-folder text-info',
        quickTitle: 'Folder'
    },
    {
        id: 7,
        quickClass: 'fa-solid fa-file-zipper text-secondary',
        quickTitle: 'Zip'
    },
    {
        id: 8,
        quickClass: 'fa-solid fa-trash text-danger',
        quickTitle: 'Trash'
    }
]

export const filesListData = [
    {
        id: 1,
        name: "Logo.psd",
        size: "2.0 MB",
        modify: "7 hour ago",
        icon: "folder text-info",
        folderClass: "file-zipper",
        title: "Tivo admin",
        folderFiles: "20 files",
        folderTime: '2 Hour ago',
    },
    {
        id: 2,
        name: "Backend.xls",
        size: "3.0 GB",
        modify: "2 Day ago",
        icon: "file-excel text-success",
        folderClass: "folder",
        title: "Viho admin",
        folderFiles: "14 files",
        folderTime: '3 Hour ago',
    },
    {
        id: 3,
        name: "Project.zip",
        size: "1.9 GB",
        modify: "1 Day ago",
        icon: "file-zipper text-secondary",
        folderClass: "file-zipper",
        title: "Unice admin",
        folderFiles: "15 files",
        folderTime: '3 Day ago',
    },
    {
        id: 4,
        name: "Report.font",
        size: "0.9 KB",
        modify: "1 Day ago",
        icon: "folder text-info",
        folderClass: "folder",
        title: "koho admin",
        folderFiles: "10 files",
        folderTime: '1 Day ago',
    },
];
