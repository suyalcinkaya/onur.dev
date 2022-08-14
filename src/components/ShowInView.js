import { useInView } from 'react-intersection-observer'

const ShowInView = ({ children, rootMargin = '0px', triggerOnce = true, ...rest }) => {
  const { ref, inView } = useInView({
    rootMargin,
    triggerOnce
  })

  return (
    <div ref={ref} {...rest}>
      {inView && children}
    </div>
  )
}

export default ShowInView
