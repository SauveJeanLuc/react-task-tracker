import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <div>
            <h1 style={headingStyle}>{title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}
export default Header
