import { Box, Flex } from '@chakra-ui/core'

// --- Components
import Button from 'components/Button'

// --- Others
import { profiles } from 'constant'
import useColorMode from 'hooks/useColorMode'
import theme from 'styles/theme'

const Footer = () => {
  const { systemTheme } = useColorMode()

  const color = {
    light: theme.colors.gray600,
    dark: theme.colors.gray400
  }

  return (
    <Flex flexDir={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" my={12}>
      <Flex justifyContent="center" alignItems="center" ml={{ md: -3 }} mb={{ base: 2, md: 0 }}>
        {profiles.map((profile, profileIndex) => (
          <a
            key={`profile_${profileIndex}_${profile.name}`}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            title={profile.name}
          >
            <Button type="button" aria-label={profile.name} px={2} color={color[systemTheme]}>
              {profile.icon}
            </Button>
          </a>
        ))}
      </Flex>
      <Box fontSize="sm">
        <strong>onur</strong>
        {' dot '}
        <strong>suyalcinkaya</strong>
        {' at '}
        <strong>gmail</strong>
        {' dot '}
        <strong>com</strong>
      </Box>
    </Flex>
  )
}

export default Footer
