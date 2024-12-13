import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { TabContent, TabPane } from 'reactstrap';
import { SearchTabContentProp } from '../../../../Types/SearchResult.type';
import { AppDispatch, RootState } from '../../../../ReduxToolkit/Store';
import { fetchSearchData } from '../../../../ReduxToolkit/Reducers/SearchResultReducer';
import AllTab from './AllTab';
import ImageTab from './ImageTab';
import VideoTab from './VideoTab';

export default function SearchTabContent({ activeTab }: SearchTabContentProp) {
    const { allResult } = useSelector((state: RootState) => state.searchResult);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => { dispatch(fetchSearchData()); }, [dispatch]);

    return (
        <TabContent activeTab={activeTab}>
            <TabPane className='search-links' tabId={1}>
                <AllTab allResult={allResult} />
            </TabPane>
            <TabPane tabId={2}>
                <ImageTab />
            </TabPane>
            <TabPane tabId={3}>
                <VideoTab allResult={allResult} />
            </TabPane>
        </TabContent>
    )
}