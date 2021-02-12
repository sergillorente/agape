import React from 'react';

import MeetingSection from '../components/MeetingSection/MeetingSection';
import HistorySection from '../components/HistorySection/HistorySection';
import LocationSection from '../components/LocationSection/LocationSection';
import VlogSection from '../components/VlogSection/VlogSection';

const HomePage = () => {
    return (
        <>
            <MeetingSection />
            <HistorySection />
            <LocationSection />
            <VlogSection />
        </>
    )
};

export default HomePage;