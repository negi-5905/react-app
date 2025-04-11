import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GeneralHomepage from './generalHomepage/generalHomepage';
import InfluencerSignIn from './generalHomepage/components/influencerSignIn';
import BrandSignIn from './generalHomepage/components/brandSignIn';
import NotFoundPage from './generalHomepage/components/NotFoundPage';
import InfluencerDashboard from './influencerDashboard/influencerDashboard';
import AvailableOpportunity from './influencerDashboard/availabeOpportunity';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GeneralHomepage />} /> 
      <Route path="/influencer-dashboard" element={<InfluencerDashboard />} />
      <Route path="/available-opportunity" element={<AvailableOpportunity />} />
      <Route path="/influencer-signin" element={<InfluencerSignIn />} /> 
      <Route path="/brand-signin" element={<BrandSignIn />} />
      <Route path="*" element={<NotFoundPage />} /> 
    </Routes>
  );
}

export default App;