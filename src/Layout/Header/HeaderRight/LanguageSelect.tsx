import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { H6, LI, UL } from '../../../AbstractElements'
import { languagesData } from '../../../Data/Layout/RightHeader';
import { Href } from '../../../Utils/Constants';

export default function LanguageSelect() {
    const [langdropdown, setLangdropdown] = useState(false);
    const [selected, setSelected] = useState('us');
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setSelected(lng);
    };
    const languageSelection = () => {
        setLangdropdown(!langdropdown);
    };
    return (
        <LI className="custom-dropdown">
            <div className={`translate_wrapper ${langdropdown ? 'active' : ''}`}>
                <div className="current_lang" onClick={languageSelection}>
                    <a className="lang" href={Href}>
                        <i className={`fi fi-${selected}`}/>
                        <H6 className="lang-txt f-w-700 ms-1">{selected}</H6>
                    </a>
                </div>
                <UL className={`simple-list custom-menu profile-menu language-menu py-0 more_lang ${langdropdown ? 'active' : ''}`}>
                    {languagesData.map((item, index) => (
                        <LI className="d-block" key={index}>
                            <a className="lang" data-value={item.language} onClick={() => changeLanguage(item.data)} href={Href}>
                                <i className={`fi fi-${item.data}`}/>
                                <div className="lang-txt">{item.language}</div>
                            </a>
                        </LI>
                    ))}
                </UL>
            </div>
        </LI>
    )
}
