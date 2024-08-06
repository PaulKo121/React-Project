import React from "react";

const showDate = () => {
    const today = new Date();
    const dateString = today.toLocaleDateString();
    const timeString = today.toLocaleTimeString();
    alert(`今天的日期是: ${dateString} ${timeString}`);
}

const popUpDate = () => {
    return (
        <>
            <button onClick={showDate}>按下已顯示今天日期</button>
        </>
    );
};

export default popUpDate;