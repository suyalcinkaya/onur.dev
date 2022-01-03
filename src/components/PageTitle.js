const PageTitle = ({ title, description, isSlugTitle = false, ...others }) => {
  return (
    <div className={!isSlugTitle && 'mb-12 space-y-12'}>
      <h1 className={`flex items-center text-2xl md:text-3xl font-medium tracking-tight`} {...others}>
        {title}
      </h1>
      {description && <p>{description}</p>}
    </div>
  )
}

export default PageTitle
