import { Link, useParams } from 'react-router-dom';
import BasicHeader from '../components/BasicHeader';
import useSWRImmutable from 'swr/immutable';
import axios from 'axios';
import { useState } from 'react';

function MantramDetailCard({ id, name, mantram, description, mantramBaseId, mantramId, activeId, setActiveId }) {
    const isActive = id === activeId;

    return (
        <div
            onClick={() => setActiveId(isActive ? null : id)}
            className={`p-4 shadow flex items-center ${isActive ? '!items-start' : ''} gap-2 border rounded-lg border-slate-300 hover:shadow-lg`}>
            <div className="flex-1">
                <h1 className="text-lg font-semibold">{name}</h1>
                <p className={`text-sm text-slate-400 ${isActive ? 'hidden' : ''}`}>{(description || mantram).slice(0, 30)}</p>
                <div className={`${isActive ? '' : 'hidden'}`}>
                    <p className="text-slate-500 mb-6">{description || mantram}</p>
                    <Link to={`/mantram/${mantramBaseId}/${mantramId}`} className="bg-blue-500 hover:bg-blue-300 rounded-xl px-4 py-2 text-white">selengkapnya</Link>
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
                <h2 className="font-semibold text-xl">Pilih Mantra</h2>
                <p>Terdapat {mantrams ? mantrams.mantram_count : 0} mantram</p>
                <div className="flex flex-col gap-2 mt-4">
                    {
                        mantrams
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
                            : null
                    }
                </div>
            </div>
        </div>
    );
}

export default MantramBase;
