import './Link.css'

function Link({ url, title }) {
  return (
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        {title}
    </a>
  )
}

export default Link