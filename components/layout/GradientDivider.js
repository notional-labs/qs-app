
import { Box } from '@chakra-ui/react';

function HorizontalDivider() {
    return (
        <Box w='full' h={'1px'} bg={'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 44.27%, rgba(255, 255, 255, 0) 100%)'}/>
    )
}

function VerticalDivider() {
    return (
        <Box w={'1px'} bg={'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 44.27%, rgba(255, 255, 255, 0) 100%)'} />
    )
}
export default function GradientDivider({orientation = 'horizontal'}) {
    return (
        <>
            {orientation == 'horizontal' ? <HorizontalDivider /> : <VerticalDivider />}
        </>
    )
}