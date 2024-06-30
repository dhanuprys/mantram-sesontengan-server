import { useCallback, useEffect, useState } from 'react';

function useFontChanger() {
    const [fontKey, setFontKey] = useState('m');
    const fontMap = { s: 13, m: 16, l: 20 };

    const setFontSize = useCallback((sizeKey) => {
        const selectedKey = fontMap[sizeKey] ? sizeKey : 'm';

        document.body.style.fontSize = fontMap[selectedKey] + 'px';
        localStorage.setItem('font_map_key', selectedKey);
        setFontKey(selectedKey);
    }, []);

    useEffect(() => {
        const lsValue = localStorage.getItem('font_map_key');
        const selectedKey = fontMap[lsValue] ? lsValue : 'm';

        setFontKey(selectedKey);
        document.body.style.fontSize = fontMap[selectedKey] + 'px';
    }, []);

    return {
        fontKey,
        setFontSize,
        fontMap
    };
}

export default useFontChanger;
