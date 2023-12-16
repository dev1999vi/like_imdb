import React, {useState} from 'react';
import ContentWrapper from '../../../components/content_wrapper/ContentWrapper';
import SwitchTabs from '../../../components/switch_tabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import { Carousel } from '../../../components/carousel/Carousel';

const Trending = () => {
  const [endpoint, setEndpoint] = useState('day');
  const {data, loading} = useFetch(`/trending/all/${endpoint}`);
   const onTabChange = (tab) =>{
    setEndpoint(tab.toLowerCase());
   }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>Trending</span>
            <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending;