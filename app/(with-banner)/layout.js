export default function layout({ children }) {
  return (
    <div>
      <marquee style={{ background: '#fff', color: 'purple' }}>
        This banner will be displayed in the about and the contact page because
        the 2 folders are in a group
      </marquee>
      {children}
    </div>
  )
}
