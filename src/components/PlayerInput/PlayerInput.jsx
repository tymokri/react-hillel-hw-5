import React, {useState} from 'react';

const PlayerInput = ({id, label, onSubmit}) => {
    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(id, userName);
    };

    return (
        <form
            className="column"
            onSubmit={handleSubmit}
        >
            <label
                className="header"
                htmlFor="userName"
            >
                {label}
            </label>
            <input
                id="userName"
                type="text"
                placeholder="Github username"
                autoComplete="off"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button
                className="button"
                type="submit"
                disabled={!userName}
            >
                Submit
            </button>
        </form>
    );
};

export default PlayerInput;