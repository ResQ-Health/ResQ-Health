import React, { useState, useEffect, useRef } from 'react';

interface LocationSuggestion {
    display_name: string;
    lat: string;
    lon: string;
}

const LocationSearch = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setShowSuggestions(true);

        if (value.length > 2) {
            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(value)}&limit=5`
                );
                const data = await response.json();
                setSuggestions(data);
            } catch (error) {
                console.error('Error fetching locations:', error);
                setSuggestions([]);
            }
        } else {
            setSuggestions([]);
        }
    };

    const handleUseMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                        );
                        const data = await response.json();
                        if (data.display_name) {
                            setInputValue(data.display_name);
                            setShowSuggestions(false);
                        }
                    } catch (error) {
                        console.error('Error getting location:', error);
                        alert('Unable to get your location. Please enter it manually.');
                    }
                },
                (error) => {
                    console.error('Error getting location:', error);
                    alert('Unable to get your location. Please enter it manually.');
                }
            );
        } else {
            alert('Geolocation is not supported by your browser');
        }
    };

    const handleSuggestionClick = (suggestion: LocationSuggestion) => {
        setInputValue(suggestion.display_name);
        setShowSuggestions(false);
    };

    return (
        <div className="relative" ref={searchRef}>
            <div className='flex  w-full items-center gap-[8px]'>
                <img src="./location.png" className='object-contain size-[24px]' alt="location" />
                <input
                    placeholder='Enter your location'
                    className='h-[40px] rounded-[8px] w-auto text-[#000000] pl-[12px] focus:outline-none'
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={() => setShowSuggestions(true)}
                />
            </div>

            {showSuggestions && (
                <div className="absolute z-50 w-full min-w-[331px] mt-[13px] bg-white rounded-md shadow-lg max-h-60 overflow-auto">
                    <div
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-blue-600"
                        onClick={handleUseMyLocation}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Use my location
                    </div>
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={`${suggestion.lat}-${suggestion.lon}-${index}`}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion.display_name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LocationSearch; 