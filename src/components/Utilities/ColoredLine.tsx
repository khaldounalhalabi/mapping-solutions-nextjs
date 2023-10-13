import React from 'react';

const ColoredLine = ({className}: { className?: string }) => {
    return (
        <hr
            style={{height: 5}}
            className={className}
        />
    );
};

export default ColoredLine;