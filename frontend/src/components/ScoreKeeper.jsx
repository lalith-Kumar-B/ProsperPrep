import React from 'react'
import { useRecoilValue } from 'recoil'
import { globalScoreAtom } from '../store/atoms'
function ScoreKeeper() {
    const score = useRecoilValue(globalScoreAtom);
  return (
    <div className="text-lg mt-2">
        Score: {score}
    </div>
  )
}

export default ScoreKeeper
