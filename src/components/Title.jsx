const Title = ({ caption, title }) => {
    return (
        <h1>
            <span className="text-green fill-green">{caption}</span>
            {title}
        </h1>
    )
}

export default Title