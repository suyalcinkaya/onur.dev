import Balancer from 'react-wrap-balancer'

import cx from '@/lib/cx'

const PageTitle = ({ title, subtitle, className, ...rest }) => {
  return (
    <div className={cx('mb-6', className)}>
      <h1 {...rest}>
        <Balancer>{title}</Balancer>
      </h1>
      {subtitle}
    </div>
  )
}

export default PageTitle
