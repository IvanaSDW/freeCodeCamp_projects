import '../stylesheets/Button.css'

export default function Button({ text, isClick, handleClick }) {
    return (
        <button
            className={isClick ? 'click-button' : 'restart-button'}
            onClick={handleClick}>
            {text}
        </button>
    );
}