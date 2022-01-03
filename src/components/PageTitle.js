const PageTitle = ({ title, description, isSlugTitle = false, ...others }) => {
  return (
    <>
      <h1
        className={`flex items-center text-2xl md:text-3xl font-medium tracking-tight ${!isSlugTitle && 'mb-12'} `}
        {...others}
      >
        {title}
      </h1>
      {description && <p>{description}</p>}
    </>
  )
}

export default PageTitle
