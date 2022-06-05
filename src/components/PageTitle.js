const PageTitle = ({ title, ...others }) => {
  return (
    <div className="mb-6">
      <h1 {...others}>{title}</h1>
    </div>
  )
}

export default PageTitle
