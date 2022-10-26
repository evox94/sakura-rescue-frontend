import { Center, Heading, Image, VStack } from '@chakra-ui/react'
import sakura_happy from './sakura_happy.png'

export default function SakuraSafe() {
  return (
    <Center>
      <VStack>
        <Heading>Sakura is safe, for now...</Heading>
        <Image src={sakura_happy} className="sakura_image" alt="Sakura is Happy" />
      </VStack>
    </Center>
  )
}