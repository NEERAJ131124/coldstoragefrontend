import React, { ChangeEvent, useEffect, useState } from 'react';
import { SidebarMenuItem } from '../../../../Types/Layout.type';
import { menuList } from '../../../../Data/Layout/SidebarMenuList';
import BookmarkContainer from './BookmarkContainer';

export default function BookmarkHeader() {
    const [bookmarkItems, setBookmarkItems] = useState<SidebarMenuItem[]>([]);
    const [bookmarkList, setBookmarkList] = useState<SidebarMenuItem[]>([]);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const searchKey = event.target.value.toLowerCase();
        if (searchKey !== "") {
            const suggestionArray: SidebarMenuItem[] = [];
            
            const deepSearchFun = (menuItem: SidebarMenuItem, searchKeyValue: string, mainTitle?: string, icon?: string) => {
                if (menuItem.title?.toLowerCase().includes(searchKeyValue) && menuItem.path) {
                    suggestionArray.push({ ...menuItem, mainTitle, icon });
                }
                if (!menuItem.items) return;
                menuItem.items.forEach((subItem) => {
                    deepSearchFun(subItem, searchKeyValue, mainTitle, menuItem.icon || icon);
                });
            };
            
            menuList.forEach((mainItem) => {
                mainItem.items?.forEach((data) => {
                    deepSearchFun(data, searchKey, data.title, data.icon);
                });
            });
            
            setBookmarkItems(suggestionArray);
        } else {
            setBookmarkItems([]);
        }
    };

    useEffect(() => {
        const suggestionArray: SidebarMenuItem[] = [];

        const getBookMarkList = (menuItem: SidebarMenuItem) => {
            if (menuItem.bookmark && menuItem.path) {
                suggestionArray.push({ ...menuItem });
            }
            if (!menuItem.items) return;
            menuItem.items.forEach(getBookMarkList);
        };

        menuList.forEach((mainItem) => {
            mainItem.items?.forEach(getBookMarkList);
        });

        setBookmarkList(suggestionArray);
    }, []);

    const handleBookmark = (event: React.MouseEvent<HTMLElement, MouseEvent>, item: SidebarMenuItem) => {
        const updatedList = [...bookmarkList];
        const foundIndex = updatedList.findIndex((bookmarkItem) => bookmarkItem.title === item.title);
        if (foundIndex === -1) {
            item.bookmark = true;
            updatedList.push(item);
            event.currentTarget.classList.add("starred");
        } else {
            item.bookmark = false;
            updatedList.splice(foundIndex, 1);
            event.currentTarget.classList.remove("starred");
        }
        setBookmarkList(updatedList);
    };

    return (
        <BookmarkContainer bookmarkList={bookmarkList} handleSearch={handleSearch} bookmarkItems={bookmarkItems} handleBookmark={handleBookmark}/>
    );
}