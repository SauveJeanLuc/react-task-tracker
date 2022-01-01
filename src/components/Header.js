import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {

    const onClick = (e) => {
        console.log(e)
    }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello' onClick={onClick}/>
            <Button color='blue' text='Bonjour' />
            <Button color='red' text='Muraho'/>
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
