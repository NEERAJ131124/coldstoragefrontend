import { LI, UL } from '../../../../../AbstractElements'
import SvgIcon from '../../../../../Utils/CommonComponents/CommonSvgIcons'

export default function InvoiceRightSide() {
    return (
        <UL className='simple-list flex-row' style={{ listStyle: "none", display: "flex", alignItems: "center", background: "linear-gradient(291deg, #308e87 21.2%, #308e87 83.92%)", padding: "31px 80px", borderBottomLeftRadius: 100, gap: 28 }} >
            <LI>
                <SvgIcon className="stroke-icon" iconId="call" style={{ height: "14px", width: "14px", fill: "#fff", marginRight: "10px" }} />
                <span style={{ color: "#FFFFFF" }}>(239) 555-0108</span>
            </LI>
            <LI style={{ borderLeft: "1px dashed rgba(48, 142, 135, 0.3)", borderRight: "1px dashed rgba(48, 142, 135, 0.3)", padding: "0 22px" }} >
                <SvgIcon className="stroke-icon" style={{ height: "16px", width: "16px", fill: "#fff", marginRight: "10px" }} iconId="email-box" />
                <span style={{ color: "#FFFFFF" }}>Admiro@themesforest.com</span>
            </LI>
            <LI>
                <SvgIcon className="stroke-icon" style={{ height: "16px", width: "16px", fill: "#fff", marginRight: "10px" }} iconId="web" />
                <span style={{ color: "#FFFFFF" }}>{'Website'}: www.Admirothemes.com</span>
            </LI>
        </UL>
    )
}