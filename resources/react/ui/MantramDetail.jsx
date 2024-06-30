import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BasicHeader from '../components/BasicHeader';
import useSWRImmutable from 'swr/immutable';
import { useEffect, useState } from 'react';
import ParagraphSkeleton from '../components/ParagraphSkeleton';
import useFontChanger from '../hooks/useFontChanger';

function AudioPlayer({ audioUrl }) {
    const [isLoading, setLoading] = useState(true);
    const [seekerPercentage, setSeekerPercetage] = useState(0);
    const [audioPlayer, setAudioPlayer] = useState(null);

    const playAudio = () => {
        if (!audioPlayer) return;

        audioPlayer.play();
    };

    const pauseAndRestart = () => {
        if (!audioPlayer) return;

        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    };

    const isPlaying = audioPlayer && !audioPlayer.paused;

    useEffect(() => {
        if (!audioUrl) return;

        const timeSeeker = function () {
            setSeekerPercetage(this.currentTime / this.duration * 100);
        }

        const audio = new Audio(`/storage/${audioUrl}`);

        audio.preload = 'metadata';
        audio.addEventListener('timeupdate', timeSeeker);
        audio.addEventListener('loadeddata', function () {
            setLoading(false);
        })

        setAudioPlayer(audio);

        return () => {
            audio.pause();
            audio.removeEventListener('timeupdate', timeSeeker);
            audio.remove();
        };
    }, [audioUrl]);

    return (
        <div
            className="z-10 fixed left-0 bottom-0 shadow b border-t bg-slate-50 border-t-slate-200 w-full">
            {
                isPlaying && <div className="relative w-full h-[4px] bg-slate-200">
                    <div style={{ width: `${seekerPercentage}%` }} className="absolute h-full bg-blue-500"></div>
                </div>
            }

            <div className="p-4 flex justify-between items-center">
                <div>
                    {
                        audioUrl
                            ? isLoading ? 'Memuat audio...' : 'Putar audio'
                            : 'Audio tidak tersedia'
                    }
                </div>
                <div>
                    <button onClick={() => { !isPlaying ? playAudio() : pauseAndRestart() }} disabled={!audioUrl || isLoading} className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-black disabled:bg-slate-600">
                        {
                            !isPlaying
                                ? <svg className="w-[20px] h-[20px] text-white" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                </svg>
                                : <svg className="w-[20px] h-[20px] text-white" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512">
                                    <path fill="currentColor"
                                        d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
                                </svg>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}

function MantramDetail() {
    const navigate = useNavigate();
    const { mantramBaseId, mantramId } = useParams();
    const { data: mantram, error: mantramError, isLoading } = useSWRImmutable(
        `/api/mantram/${mantramBaseId}/${mantramId}`,
        (url) => axios.get(url).then(response => response.data)
    );
    const { fontKey, setFontSize } = useFontChanger();

    if (mantramError && (mantramError.response.status === 404 || mantramError.response.status === 500)) {
        navigate('/');

        return 'Not found';
    }

    return (
        <div className="transition-all">
            <BasicHeader title={mantram ? mantram.mantram.name : null} secondaryTitle={mantram ? mantram.mantram_base.name : null} />

            <div className="p-4 flex justify-between items-center">
                <h2 className="font-semibold text-[1.125em] mb-2">Ukuran font</h2>
                <div className="flex gap-2">

                    <div onClick={() => setFontSize('s')} className={`flex items-center gap-2 p-4 rounded hover:cursor-pointer hover:bg-slate-100 ${fontKey === 's' ? 'bg-slate-100' : ''}`}>
                        <div>
                            <svg className="w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z" /></svg>
                        </div>
                    </div>
                    <div onClick={() => setFontSize('m')} className={`flex items-center gap-2 p-4 rounded hover:cursor-pointer hover:bg-slate-100 ${fontKey === 'm' ? 'bg-slate-100' : ''}`}>
                        <div>
                            <svg className="w-[19px] h-[19px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z" /></svg>
                        </div>
                    </div>
                    <div onClick={() => setFontSize('l')} className={`flex items-center gap-2 p-4 rounded hover:cursor-pointer hover:bg-slate-100 ${fontKey === 'l' ? 'bg-slate-100' : ''}`}>
                        <div>
                            <svg className="w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <h2 className="font-semibold text-[1.25em] mb-4">Mantram</h2>
                <div className="text-[1.125em] italic">
                    {
                        mantram
                            ? mantram.mantram.mantram.split("\n").map((mantramLine, idx) => {
                                return <div key={idx}>{mantramLine}</div>
                            })
                            : <ParagraphSkeleton />
                    }
                </div>
            </div>

            <div className="p-4">
                <h2 className="font-semibold text-[1.25em] mb-4">Deskripsi</h2>
                <p>
                    {
                        mantram
                            ? mantram.mantram.description || 'Deskripsi tidak tersedia'
                            : <ParagraphSkeleton />
                    }
                </p>
            </div>

            <AudioPlayer audioUrl={mantram ? mantram.mantram.audio_url : null} />
        </div>
    );
}

export default MantramDetail;
