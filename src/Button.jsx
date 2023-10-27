import PropTypes from 'prop-types'
// eslint-disable-next-line react/prop-types
export function Button ({text}){
    return <button>
        {text}
    </button>
}
Button.prototype = {
    text: PropTypes.string.isRequired
}