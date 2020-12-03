import { Box, Heading, Stack } from '@chakra-ui/react'

// --- Icons
import External from 'components/icons/External'

const Card = ({ title, primaryText, secondaryText, url = undefined, ...others }) => (
  <Stack spacing={2} {...others}>
    {primaryText && <Box color="gray.500">{primaryText}</Box>}
    <Box
      as={url ? 'a' : 'div'}
      {...(url && {
        pos: 'relative',
        href: url,
        rel: 'noopener noreferrer',
        target: 'blank'
      })}
      w="fit-content"
    >
      <Heading
        as="h3"
        fontSize="xl"
        size="xl"
        pos={url && 'relative'}
        w={url && 'calc(100% + 20px)'}
        pb="1px"
        mb="-1px"
        borderBottomWidth="1px"
        borderBottomStyle="solid"
        borderBottomColor="transparent"
        transition="border-bottom 200ms ease-in-out"
        {...(url && { _hover: { borderBottomColor: 'black' } })}
      >
        {title}
        {url && (
          <Box pos="absolute" top="3px" right={0}>
            <External height={14} width={14} />
          </Box>
        )}
      </Heading>
    </Box>
    {secondaryText && <Box color="gray.500">{secondaryText}</Box>}
  </Stack>
)

export default Card
