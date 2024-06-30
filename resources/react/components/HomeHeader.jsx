import { useState } from 'react';
import useFontChanger from '../hooks/useFontChanger';

function HomeHeader() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { fontKey, setFontSize } = useFontChanger();

    return (
        <>
            <div className="sticky top-0 w-full bg-blue-500 flex items-center gap-4 py-6 px-4 shadow">
                <div onClick={() => setSidebarOpen(true)}>
                    <svg className={`w-[25px] h-[25px] text-white 1 transition-all ${isSidebarOpen ? 'rotate-90' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </div>
                <h1 className="text-xl font-semibold text-white">MANTRAM SESONTENGAN</h1>
            </div>
            <div className={`fixed top-0 left-0 z-[50] w-screen h-screen transition-all flex ${isSidebarOpen ? '' : '-translate-x-[100vw]'}`}>
                <div className="w-[80vw] md:w-[20vw] h-screen bg-white shadow-2xl flex flex-col p-2 max-h-screen overflow-auto">
                    <div className="flex justify-center p-8 mb-4">
                        <img className="w-[100px] h-[100px]" src="/hindu.png" />
                    </div>

                    <div className="flex flex-col">
                        <h2 className="px-4 py-1">Ukuran font</h2>
                        <div className="pl-4">
                            <div onClick={() => setFontSize('s')} className={`flex items-center gap-2 p-4 rounded hover:cursor-pointer hover:bg-slate-100 ${fontKey === 's' ? 'bg-slate-100' : ''}`}>
                                <div>
                                    <svg className="w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z" /></svg>
                                </div>
                                <div>Kecil</div>
                            </div>
                            <div onClick={() => setFontSize('m')} className={`flex items-center gap-2 p-4 rounded hover:cursor-pointer hover:bg-slate-100 ${fontKey === 'm' ? 'bg-slate-100' : ''}`}>
                                <div>
                                    <svg className="w-[19px] h-[19px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z" /></svg>
                                </div>
                                <div>Sedang</div>
                            </div>
                            <div onClick={() => setFontSize('l')} className={`flex items-center gap-2 p-4 rounded hover:cursor-pointer hover:bg-slate-100 ${fontKey === 'l' ? 'bg-slate-100' : ''}`}>
                                <div>
                                    <svg className="w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z" /></svg>
                                </div>
                                <div>Besar</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 p-4 rounded hover:cursor-pointer hover:bg-slate-100">
                        <div>
                            <svg className="w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
                        </div>
                        <div>Info Aplikasi</div>
                    </div>
                </div>
                <div className="flex-1 bg-black opacity-15" onClick={() => setSidebarOpen(false)}></div>
            </div>
        </>
    );
}

export default HomeHeader;
