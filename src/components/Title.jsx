const Title = ({ caption, title }) => {
    return (
        <div>
            <span className="text-green">{caption}</span>
            {title}
        </div>
    )
}

export default Title