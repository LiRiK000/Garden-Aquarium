import { Box, Button, Container } from '@chakra-ui/react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Box>
      <Container w='100%' m='0' p='0'>
        <h1>Vite + React</h1>
        <Button
          onClick={() => setCount((count) => count + 1)}
          _hover={{
            bgColor: 'black',
            color: 'yellow'
          }}
          bgColor="white"
          color="black"
        >
          count is {count}
        </Button>
      </Container>
    </Box>
  )
}

export default App
