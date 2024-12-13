import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

/**
 * Renders a dropdown button with child options for logging in with a popup or redirect
 */
export const SignInButton = () => {
    const { instance } = useMsal();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    /**
     * Handles login actions based on the selected type.
     * @param {string} loginType - The type of login ("popup" or "redirect").
     */
    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch((e) => console.log(e)).then((data) => {console.log(data)});
        } else if (loginType === "redirect") {
            instance.loginRedirect(loginRequest).catch((e) => console.log(e));
        }
    };

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret color="primary">
                Sign In
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => handleLogin("popup")}>
                    Sign in using Popup
                </DropdownItem>
                <DropdownItem onClick={() => handleLogin("redirect")}>
                    Sign in using Redirect
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
