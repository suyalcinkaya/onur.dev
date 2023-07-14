export const OpenGraphImage = ({ title, description, url }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          height: '100%',
          width: '100%',
          backgroundImage:
            'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 50,
          left: 50,
          fontSize: 36,
          background: 'black',
          color: 'white',
          padding: '0.5rem 1rem'
        }}
      >
        {`onur.dev${url ? `/${url}` : ''}`}
      </div>
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <p style={{ fontSize: 80, lineHeight: 1 }}>{title}</p>
        {description && <p style={{ fontSize: 36 }}>{description}</p>}
      </span>
    </div>
  )
}
