import { Link, useParams } from 'react-router-dom';
import BasicHeader from '../components/BasicHeader';
import useSWRImmutable from 'swr/immutable';
import axios from 'axios';
import { useState } from 'react';
import CardSkeleton from '../components/CardSkeleton';

function MantramDetailCard({ id, name, mantram, description, mantramBaseId, mantramId, activeId, setActiveId }) {
    const isActive = id === activeId;

    return (
        <div
            onClick={() => setActiveId(isActive ? null : id)}
            className={`p-4 shadow flex items-center ${isActive ? '!items-start' : ''} gap-2 border rounded-lg border-slate-300 hover:shadow-lg`}>
            <div className="flex-1">
                <h1 className="text-[1.25em] font-semibold">{isActive ? name : name.slice(0, 30)}</h1>
                <p className={`text-[0.875em] text-slate-400 ${isActive ? 'hidden' : ''}`}>{(description || mantram).slice(0, 30)}</p>
                <div className={`${isActive ? '' : 'hidden'}`}>
                    <p className="text-slate-500 mb-6">{description || mantram}</p>
                    <Link to={`/mantram/${mantramBaseId}/${mantramId}`} className="bg-blue-600 hover:bg-blue-300 rounded-xl px-4 py-2 text-white">selengkapnya</Link>
                </div>
            </div>
            <span>
                <svg className={`w-[25px] h-[25px] text-slate-800 transition-all ${isActive ? 'rotate-90' : ''}`} xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512">
                    <path fill="currentColor"
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
            </span>
        </div>
    );
}

function MantramBase() {
    const [activeId, setActiveId] = useState(null);
    const { mantramBaseId } = useParams();
    const { data: mantrams, error: mantramError, isLoading } = useSWRImmutable(
        `/api/mantram/${mantramBaseId}`,
        (url) => axios.get(url).then(response => response.data)
    );

    if (mantramError && (mantramError.response.status === 404 || mantramError.response.status === 500)) {
        navigate('/');

        return 'Not found';
    }

    return (
        <div>
            <BasicHeader title={mantrams ? mantrams.mantram_base.name : null} secondaryTitle="Jenis Mantra" />

            <div className="p-4 flex flex-col gap-2">
                {
                    (mantrams && mantrams.mantram_count > 0)
                        ? (
                            <>
                                <h2 className="font-semibold text-[1.25em]">Pilih Mantra</h2>
                                <p>Terdapat {mantrams.mantram_count} mantram</p>
                            </>
                        )
                        : null
                }
                <div className="flex flex-col gap-2 mt-4">
                    {
                        mantrams
                            ? mantrams.mantram_count > 0
                                ? mantrams.mantrams.map(mantram => {
                                    return <MantramDetailCard
                                        key={mantram.id}
                                        id={mantram.id}
                                        mantramBaseId={mantrams.mantram_base.id}
                                        mantramId={mantram.id}
                                        description={mantram.description}
                                        mantram={mantram.mantram}
                                        name={mantram.name}
                                        activeId={activeId}
                                        setActiveId={setActiveId} />
                                })
                                :
                                <div className="flex flex-col justify-center items-center p-6">
                                    <img className="w-[240px] h-[240px]" src="/notfound.jpg" />
                                    <span className="font-semibold">Belum ada mantram yang dibuat</span>
                                </div>
                            : isLoading && <CardSkeleton />
                    }
                </div>
            </div>
        </div>
    );
}

export default MantramBase;
