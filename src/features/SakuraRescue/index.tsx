import SakuraDanger from './SakuraDanger'
import SakuraSafe from './SakuraSafe'
import './style.css'
import { VStack } from '@chakra-ui/react';
import SaveCounter from './SaveCounter';
import { useSakuraRescue } from './hooks';
import Loadable from '../../components/Loadable';
import MissionReport from './MissionReport';

export default function SakuraRescue() {
  const { username, count, error, isLoading, saveSakuraHandler, isSafe, missionReport, clearMissionReport } = useSakuraRescue();

  return (
    <VStack>
      {isSafe ? <SakuraSafe/> : <SakuraDanger username={username} attemptSavingHandler={saveSakuraHandler} disableButton={isLoading} count={count} /> }
      <Loadable error={error} isLoading={isLoading}>
        {username && <SaveCounter username={username} count={count}/>}
      </Loadable>
      {missionReport && <MissionReport report={missionReport} clearMissionReport={clearMissionReport}/>}
    </VStack>
  )
}