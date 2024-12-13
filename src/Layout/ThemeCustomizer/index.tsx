import NavCustomizer from './NavCustomizer/NavCustomizer';
import TabCustomizer from './TabCustomizer/TabCustomizer';
import { setOpenCus } from '../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../ReduxToolkit/Store';

export default function ThemeCustomizer() {
  const { openCus } = useSelector((state: RootState) => state.themeCustomizer)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(setOpenCus(!openCus));
  };
  return (
    <>
      <div className='sidebar-pannle-main' onClick={toggle}>
        <NavCustomizer />
      </div>
      <section className={`setting-sidebar ${openCus ? 'open' : ''}`}>
        <TabCustomizer toggle={toggle} />
      </section>
    </>
  )
}