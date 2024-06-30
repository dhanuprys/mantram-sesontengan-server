import { useNavigate } from 'react-router-dom';

function BasicHeader({ title, secondaryTitle }) {
    const navigate = useNavigate();

    return (
        <div className="bg-blue-500 flex items-center gap-4 p-4 shadow">
            <div onClick={() => navigate(-1)}>
                <svg className="w-[25px] h-[25px] text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
            </div>
            <div className="flex flex-col">
                <span className="text-white">{secondaryTitle}</span>
                <h1 className="text-[1.25em] font-semibold text-white">{title}</h1>
            </div>
        </div>

    );
}

export default BasicHeader;
