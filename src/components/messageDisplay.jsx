import React from "react";

const MessageDisplay = ({ message, visible }) => {
        return(
            <div className="mt-4">
                {visible?(
                    <p className="text-green font-semibold">{message}</p>
                ):(
                    <p className="text-gray-400 italic">Message is Hidden.</p>
                )}
            </div>
        );
};
export default  MessageDisplay;