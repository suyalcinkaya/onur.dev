const PageHeading = ({ description, heading, ...others }) => {
  return (
    <>
      <h1 className="flex items-center text-3xl md:text-4xl font-extrabold mb-6" {...others}>
        {heading}
      </h1>
      {description && <p className="mb-12">{description}</p>}
    </>
  )
}

export default PageHeading
