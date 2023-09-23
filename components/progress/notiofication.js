import { useToast } from '@chakra-ui/react'

const toast = useToast()
// const statuses = ['success', 'error', 'warning', 'info']

export const notify = (message, status) => {
    toast({
        position: 'top',
        status: status,
        isClosable: true,
        duration: 9000,
        render: () => (
            <Box color='white' p={3} bg='blue.500'>
                {message}
            </Box>
        ),
    })
}