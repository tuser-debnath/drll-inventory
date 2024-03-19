import React from 'react';
import Banner from '../../Components/Banner/Banner';
import OrderDetails from '../../Components/OrderDetails/OrderDetails';
import UserInfo from '../../Components/UserInfo/UserInfo';

const Home = () => {
    return (
        <>
           <Banner/>
           <OrderDetails/>
           <UserInfo/>
        </>
    );
};

export default Home;