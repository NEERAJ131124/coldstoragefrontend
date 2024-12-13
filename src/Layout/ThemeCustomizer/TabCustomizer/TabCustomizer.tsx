import { TabCustomizerType } from '../../../Types/Layout.type'
import CustomizerFooter from './CustomizerFooter'
import CustomizerHeader from './CustomizerHeader'
import LayoutType from './LayoutType'
import SidebarIcon from './SidebarIcon'
import SidebarType from './SidebarType'
import ThemeColorMode from './ThemeColorMode'
import UnlimitedColor from './UnlimitedColor'

export default function TabCustomizer({ toggle }: TabCustomizerType) {
  return (
    <>
      <CustomizerHeader toggle={toggle} />
      <div className="customizer-body">
        <ThemeColorMode />
        <SidebarIcon/>
        <LayoutType/>
        <SidebarType/>
        <UnlimitedColor/>
      </div>
      <CustomizerFooter/>
    </>
  )
}