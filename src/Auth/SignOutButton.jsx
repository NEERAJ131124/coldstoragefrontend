import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

/**
 * Renders a sign-out button as a dropdown menu.
 */
export const SignOutButton = () => {
    const { instance } = useMsal();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    // Logout configuration
    const logoutConfig = {
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/", // For popup logout
    };

    /**
     * Handles logout actions based on the selected type.
     * @param {string} logoutType - The type of logout ("popup" or "redirect").
     */
    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup(logoutConfig);
        } else if (logoutType === "redirect") {
            instance.logoutRedirect({ postLogoutRedirectUri: logoutConfig.postLogoutRedirectUri });
        }
    };

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret color="secondary" className="mt-1">
                Sign Out
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => handleLogout("popup")}>
                    Sign out using Popup
                </DropdownItem>
                <DropdownItem onClick={() => handleLogout("redirect")}>
                    Sign out using Redirect
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
