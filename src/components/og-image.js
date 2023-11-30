export const OpenGraphImage = ({ title, description, icon, url }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative'
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
          top: 60,
          left: 60,
          fontSize: '2.5rem',
          lineHeight: 1,
          background: '#2563eb',
          color: '#fff',
          padding: '1rem 1.75rem',
          borderRadius: 9999
        }}
      >
        {`onur.dev${url ? `/${url}` : ''}`}
      </div>
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          position: 'absolute',
          bottom: 100,
          left: 60,
          width: '80%'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {icon}
          <span
            style={{
              fontSize: '5.25rem',
              lineHeight: 1,
              fontWeight: 600
            }}
          >
            {title}
          </span>
        </div>
        {description && <span style={{ fontSize: '2.5rem', lineHeight: '2.75rem' }}>{description}</span>}
      </span>
    </div>
  )
}
