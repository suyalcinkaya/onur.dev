import Balancer from 'react-wrap-balancer'

const PageTitle = ({ title, subtitle, className = 'mb-6', ...rest }) => {
  return (
    <div className={className}>
      <h1 {...rest}>
        <Balancer>{title}</Balancer>
      </h1>
      {subtitle}
    </div>
  )
}

export default PageTitle
