import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const CalendarInput = ({ qn, setSel }) => {
    const [currentMonth, setCurrentMonth] = useState(dayjs().month());
    const [currentYear, setCurrentYear] = useState(dayjs().year());
    const [selectedDate, setSelectedDate] = useState(null);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    useEffect(() => {
        if (selectedDate == null) setSel(false);
        else setSel(true);
    }, [selectedDate]);

    useEffect(() => {
        setSelectedDate(null);
    }, [qn]);


    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const handleDateClick = (day) => {
        const date = dayjs()
            .year(currentYear)
            .month(currentMonth)
            .date(day);
        setSelectedDate(date.format("DD-MM-YYYY"));
    };

    const startOfMonth = dayjs().year(currentYear).month(currentMonth).startOf("month");
    const endOfMonth = dayjs().year(currentYear).month(currentMonth).endOf("month");
    const startDay = startOfMonth.day();
    const daysInMonth = endOfMonth.date();

    const getCalendarDays = () => {
        const days = [];
        for (let i = 0; i < startDay; i++) {
            days.push(null); // Empty slots for days from the previous month
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }
        return days;
    };

    const calendarDays = getCalendarDays();

    return (
        <div className="max-w-md mx-auto p-2 bg-white mt-5 md:mt-20 rounded-lg shadow-lg">
            {/* Header with Dropdowns and Navigation Arrows */}
            <div className="flex justify-between items-center mb-4">
                {/* Prev Arrow */}
                <button
                    className="p-2 text-gray-700 hover:text-gray-900 rounded-full focus:outline-none"
                    onClick={handlePrevMonth}
                >
                    <div className="text-2xl p-2 size-[50px] bg-[#EDE8E3] rounded-full">{"<"}</div>
                </button>

                {/* Month and Year Dropdowns */}
                <div className="flex items-center space-x-2">
                    <select
                        value={currentMonth}
                        onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
                        className="py-2 border rounded bg-gray-100"
                    >
                        {Array.from({ length: 12 }).map((_, index) => (
                            <option key={index} value={index}>
                                {dayjs().month(index).format("MMMM")}
                            </option>
                        ))}
                    </select>
                    <select
                        value={currentYear}
                        onChange={(e) => setCurrentYear(parseInt(e.target.value))}
                        className="px-4 py-2 border rounded bg-gray-100"
                    >
                        {Array.from({ length: 10 }, (_, i) => currentYear - 5 + i).map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Next Arrow */}
                <button
                    className="p-2 text-gray-700 hover:text-gray-900 rounded-full focus:outline-none"
                    onClick={handleNextMonth}
                    aria-label="Next Month"
                >
                    <div className="text-2xl p-2 size-[50px] bg-[#EDE8E3] rounded-full">{">"}</div>
                </button>
            </div>

            {/* Days of the Week */}
            <div className="grid grid-cols-7 gap-1 text-center font-semibold text-gray-700">
                {daysOfWeek.map((day) => (
                    <div key={day} className="py-2">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mt-2">
                {calendarDays.map((day, index) => (
                    <div
                        key={index}
                        className={`py-2 text-center rounded cursor-pointer ${day &&
                            selectedDate ===
                            dayjs().year(currentYear).month(currentMonth).date(day).format("DD-MM-YYYY")
                            ? "bg-[#45C486] text-white"
                            : "text-gray-700"
                            } ${day ? "hover:bg-[#45C486] bg-[#EDE8E3]" : "bg-white"
                            }`}
                        onClick={() => day && handleDateClick(day)}
                    >
                        {day || ""}
                    </div>
                ))}
            </div>

            {/* Selected Date */}
            {selectedDate && (
                <div className="mt-4 text-center">
                    <p className="text-lg">Selected Date: {selectedDate}</p>
                </div>
            )}
        </div>
    );
};

export default CalendarInput;
