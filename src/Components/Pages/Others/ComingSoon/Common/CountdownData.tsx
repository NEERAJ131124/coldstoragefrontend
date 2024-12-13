/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown';
import { CountdownRendererProps } from '../../../../../Types/Others.type';
import { LI, UL } from '../../../../../AbstractElements';

export default function CountdownData() {
    const [style, setStyle] = useState({});
    useEffect(() => {
        setTimeout(function () {
            setStyle({ style: { display: "none" } });
        }, 1000);
    }, []);

    const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRendererProps) => {
        if (completed) {
            return "You are good to go!";
        } else {
            return (
                <div>
                    <UL className="simple-list flex-row">
                        <LI>
                            <span id="days" className="time digits">
                                {days}
                            </span>
                            <span className="title">days</span>
                        </LI>
                        <LI>
                            <span className="time digits" id="hours">
                                {hours}
                            </span>
                            <span className="title">Hours</span>
                        </LI>
                        <LI>
                            <span className="time digits" id="minutes">
                                {minutes}
                            </span>
                            <span className="title">Minutes</span>
                        </LI>
                        <LI>
                            <span className="time digits" id="seconds">
                                {seconds}
                            </span>
                            <span className="title">Seconds</span>
                        </LI>
                    </UL>
                </div>
            );
        }
    };
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var countdown = new Date(year, month, day + 15).getTime();

    return <Countdown date={countdown} renderer={renderer} />;
};