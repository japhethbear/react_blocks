import React, { useState } from 'react'

const Main = (props) => {
    return (
        <div style={{
            margin: '20px',
            width: '1000px',
            height: '415px',
            borderWidth: '3px',
            borderColor: 'black',
            borderStyle: 'solid',
            backgroundColor: '#e06666',
        }}>
            <div>
                {props.children}
            </div>
            {/* <div>
                {props.otherChildren}
            </div> */}
        </div>)   
}

export default Main;