const PageHeading = ({ description, heading, ...others }) => {
  return (
    <>
      <h1 className="flex items-center text-2xl md:text-3xl font-medium slashed-zero mb-12" {...others}>
        {heading}
      </h1>
      {description && <p className="mb-12">{description}</p>}
    </>
  )
}

export default PageHeading
