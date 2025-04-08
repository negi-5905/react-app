import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GeneralHomepage from './generalHomepage/generalHomepage';
import InfluencerSignIn from './generalHomepage/components/influencerSignIn';
import BrandSignIn from './generalHomepage/components/brandSignIn';
import NotFoundPage from './generalHomepage/components/NotFoundPage';

function App() {
  return (
    <Routes>
      {/* Define your routes */}
      <Route path="/" element={<GeneralHomepage />} /> {/* Main landing page */}
      <Route path="/influencer-signin" element={<InfluencerSignIn />} /> {/* Influencer Sign In page */}
      <Route path="/brand-signin" element={<BrandSignIn />} /> {/* Brand Sign In page */}
      <Route path="*" element={<NotFoundPage />} /> {/* Fallback route */}
    </Routes>
  );
}

export default App;