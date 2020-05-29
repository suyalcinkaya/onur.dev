// --- Components
import Box from 'components/Box'
import Flex from 'components/Flex'
import Text from 'components/Text'
import { Like, Play, Soundcloud, Youtube } from 'components/icons'

// --- Others
import useColorMode from 'hooks/useColorMode'
import theme from 'styles/theme'

const MusicCard = (props) => {
  const { description, imageUrl, likeCount, playCount, title, url } = props
  const { colorMode } = useColorMode()

  const borderColor = {
    light: '#E2E8F0',
    dark: theme.colors.gray700
  }

  return (
    <Text
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      css={{
        display: 'block',
        transition: 'all 0.15s ease-out',
        '&:hover': {
          boxShadow: '0px 4px 20px rgba(0,0,0,0.05)'
        }
      }}
    >
      <Box border="1px solid" borderColor={borderColor[colorMode]} p="1rem" borderRadius={6}>
        <Flex flexDirection={{ _: 'column', md: 'row' }}>
          <Flex alignItems="center" justifyContent="center">
            {url.includes('soundcloud') ? (
              <Soundcloud color="#ff7700" height={60} width={60} />
            ) : (
              <Youtube color="#FF0000" height={60} width={60} />
            )}
          </Flex>
          <Flex flexDirection="column" pl={{ md: '1.5rem' }} pt={{ _: '0.75rem', md: 0 }} lineHeight={1.5}>
            <Text fontSize={18} fontWeight={500}>
              {title}
            </Text>
            <Text color="gray700" fontSize={14} my="0.25rem">
              {description}
            </Text>
            <Flex color="gray600" fontSize={14}>
              {playCount}
              {'+ plays'}
              {' • '}
              {likeCount}
              {'+ likes'}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Text>
  )
}

export default MusicCard
