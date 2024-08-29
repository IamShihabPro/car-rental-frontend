import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setTheme, toggleTheme } from '@/redux/feature/theme/themeSlice';
import { LuSun } from "react-icons/lu";
import { IoMoonSharp } from "react-icons/io5";

const ThemeToggle: React.FC = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

    useEffect(() => {
        // Set initial theme based on localStorage or default to dark mode
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            dispatch(setTheme(false));
        } else {
            dispatch(setTheme(true)); // Default to dark mode
        }
    }, [dispatch]);

    useEffect(() => {
        // Apply the theme to the document element
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return (
        <button
            onClick={() => dispatch(toggleTheme())}
            className="bg-transparent"
        >
            {isDarkMode ? (
                <LuSun className='text-white w-6 h-6' />
            ) : (
                <IoMoonSharp className='text-blue-500 w-6 h-6' />
            )}
        </button>
    );
};

export default ThemeToggle;
