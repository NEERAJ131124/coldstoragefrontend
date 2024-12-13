import React, { useEffect, useState } from 'react'

export default function Loader() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(false);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, [show]);
    return (
        <>
            {show && (
                <div className="loader-wrapper">
                    <div className="loader"><span></span><span></span><span></span><span></span><span></span></div>
                </div>
            )}
        </>
    )
}