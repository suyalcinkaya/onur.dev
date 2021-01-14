import styled from '@emotion/styled'

// --- Icons
import External from 'components/icons/External'

const Box = styled.div``

const Card = ({ title, primaryText, secondaryText, url = undefined, ...others }) => (
  <div {...others}>
    {primaryText && <div className="text-gray-500">{primaryText}</div>}
    <Box
      as={url ? 'a' : 'div'}
      className={`max-w-max mt-2 block ${url && 'relative'}`}
      {...(url && {
        href: url,
        rel: 'noopener noreferrer',
        target: '_blank'
      })}
    >
      <div
        className={
          url &&
          'relative -mb-px pb-px border-b border-solid border-transparent transition-colors duration-200 ease-in-out hover:border-black'
        }
        style={{ width: url && 'calc(100% + 20px)' }}
      >
        <p className="text-xl leading-tight font-semibold">{title}</p>
        {url && (
          <div className="absolute top-0.5 right-0">
            <External height={14} width={14} />
          </div>
        )}
      </div>
    </Box>
    {secondaryText && <div className="text-gray-500 mt-2">{secondaryText}</div>}
  </div>
)

export default Card
