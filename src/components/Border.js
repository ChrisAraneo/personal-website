import React from 'react';
import '../styles/Border.css'

class Border extends React.Component {

    state = {
        isActive: false
    }

    render() {
        const show = (this.props.active && !this.state.isActive);
        const delay = (this.props.delay ? String(this.props.delay) : '0')
        return (
            <div className='border-wrapper' style={{ width: '100%', minHeight: '2px' }}>
                <div className={`border ${show ? `border-center-in-${delay}` : `border-center-out-${delay}`}`} style={{ maxWidth: '40%', margin: '0 auto', ...this.props.style }}>{this.props.children}</div>
            </div>
        );
    }
}

export default Border;