import React from 'react'

class Header extends React.Component {
    render() {
        const date = new Date();
        const month = date.toLocaleString('default', { month: 'long' });
        const myDate = date.getDate();
        const year = date.getFullYear();
        const day = date.toLocaleDateString('default', { weekday: 'long' });
        return (
            <div className='main-header-div'>
                <div className='background-div'></div>
                <div className='date-month-div'>
                    <span>{myDate}</span>
                    <span>{month}</span>
                    <span>{year}</span>
                    <span>{day}</span>
                </div>
            </div>
        )
    }
}

export default Header
