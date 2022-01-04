const PageTitle = ({ title, description, isSlugTitle = false, ...others }) => {
  return (
    <div className={!isSlugTitle ? 'mb-12 space-y-12' : ''}>
      <h1 {...others}>{title}</h1>
      {description && <div>{description}</div>}
    </div>
  )
}

export default PageTitle
