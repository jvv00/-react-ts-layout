import { mode } from '@chakra-ui/theme-tools'

export const globalStyles = {
    color: {
        primary: {
            100: '#f7fafc',
            900: '#1a202c',
        },
    },
    styles: {
        global: (props: any) => ({
            body: {
                bg: mode('gray.50', 'gray.800')(props),
                color: mode('gray.800', 'gray.50')(props),
            },
        }),
    },
}
