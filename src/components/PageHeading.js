const PageHeading = ({ children, ...others }) => {
  return (
    <h1 className="flex items-center text-3xl md:text-4xl font-extrabold mb-6" {...others}>
      {children}
    </h1>
  )
}

export default PageHeading
