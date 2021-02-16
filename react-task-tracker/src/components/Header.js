import PropTypes from 'prop-types' //impt
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()
    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                {
                    location.pathname === '/'
                    &&
                    (<Button color={!showAdd ? 'green' : 'red'} text={!showAdd ? 'Add' : 'Close'} onClick={onAdd} />)
                }

            </header>
            <h2 className='header'>A simple todo list application built using MERN STACK</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in Js
// const headingStyle = {
//     color: 'red',
//     backgroundColor:'black',
// }

export default Header
