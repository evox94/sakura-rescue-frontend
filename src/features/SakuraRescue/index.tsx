import SakuraDanger from './SakuraDanger'
import SakuraSafe from './SakuraSafe'
import './style.css'
import { Alert, AlertIcon, Spinner, VStack } from '@chakra-ui/react';
import SaveCounter from './SaveCounter';
import { useSakuraRescue } from './hooks';

export default function SakuraRescue() {
  const { username, count, error, isLoading, saveSakuraHandler, isSafe } = useSakuraRescue();

  const errorExists = error != undefined;

  return (
    <VStack>
      {isSafe ? <SakuraSafe/> : <SakuraDanger username={username} attemptSavingHandler={saveSakuraHandler} disableButton={isLoading} /> }
      {isLoading ? <Spinner /> : !errorExists ? username && <SaveCounter username={username} count={count} /> : <>
        <Alert status='error'>
          <AlertIcon />
          {error}
        </Alert>
      </>}
    </VStack>
  )
}