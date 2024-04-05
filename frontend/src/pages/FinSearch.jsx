import React from 'react'
import AuthWrap from '../components/auth/AuthWrap.jsx'
import SearchInput from '../components/Apivideo/SearchInput.jsx';
import VideoBox from '../components/Apivideo/VideoBox.jsx';
function FinSearch() {
  return (
   <AuthWrap>
    <div>
      <SearchInput/>
      <VideoBox />
    </div>
   </AuthWrap>
  )
}

export default FinSearch