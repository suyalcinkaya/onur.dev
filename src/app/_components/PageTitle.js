import Balancer from 'react-wrap-balancer'

import cx from '@/lib/cx'

export const PageTitle = ({ title, subtitle, className, ...rest }) => {
  return (
    <div className={cx('mb-6', className)}>
      <Balancer as="h1" {...rest}>
        {title}
      </Balancer>
      {subtitle}
    </div>
  )
}
