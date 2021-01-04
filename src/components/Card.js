import { Box, Heading, Stack, Text } from '@chakra-ui/react'

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
        target: '_blank'
      })}
      w="fit-content"
    >
      <Text
        fontSize="xl"
        size="xl"
        fontWeight="bold"
        lineHeight="shorter"
        {...(url && {
          pos: 'relative',
          w: 'calc(100% + 20px)',
          mb: '-1px',
          pb: '1px',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'transparent',
          transition: 'border-bottom 200ms ease-in-out',
          _hover: { borderBottomColor: 'black' }
        })}
      >
        {title}
        {url && (
          <Box pos="absolute" top="3px" right={0}>
            <External height={14} width={14} />
          </Box>
        )}
      </Text>
    </Box>
    {secondaryText && <Box color="gray.500">{secondaryText}</Box>}
  </Stack>
)

export default Card
