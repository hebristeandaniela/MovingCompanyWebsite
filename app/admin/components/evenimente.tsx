"use client";

import React, { useEffect, useState } from "react";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    updateDoc,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore";
import { db } from "../../services/firebaseService";

type Eveniment = {
    id?: string;
    titlu: string;
    descriere: string;
    image: string;
};

const EventsPage = () => {
    const [evenimente, setEvenimente] = useState<Eveniment[]>([]);
    const [newEvent, setNewEvent] = useState<Eveniment>({ titlu: "", descriere: "", image: "" });
    const [evenimentData, setEvenimentData] = useState<any>(null);
    const [image1, setImage1] = useState<string>("");
    const [image2, setImage2] = useState<string>("");
    const [text1, setText1] = useState<string>("");
    const [text2, setText2] = useState<string>("");

    useEffect(() => {
        const fetchEvenimentData = async () => {
            const docRef = doc(db, "evenimentData", "IgGBOjpgxF2qVra4OgDT");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setEvenimentData(data);
                setImage1(data.image1);
                setImage2(data.image2);
                setText1(data.text1);
                setText2(data.text2);
            }
        };
        fetchEvenimentData();
    }, []);

    useEffect(() => {
        const fetchEvenimente = async () => {
            const querySnapshot = await getDocs(collection(db, "evenimente"));
            const fetchedEvents = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                titlu: doc.data().titlu || "",
                descriere: doc.data().descriere || "",
                image: doc.data().image || "",
            }));
            setEvenimente(fetchedEvents);
        };
        fetchEvenimente();
    }, []);

    const handleAdd = async () => {
        if (!newEvent.titlu || !newEvent.descriere) return;
        const docRef = await addDoc(collection(db, "evenimente"), newEvent);
        setEvenimente([...evenimente, { ...newEvent, id: docRef.id }]);
        setNewEvent({ titlu: "", descriere: "", image: "" });
    };

    const handleDelete = async (id: string) => {
        await deleteDoc(doc(db, "evenimente", id));
        setEvenimente(evenimente.filter((e) => e.id !== id));
    };

    const handleSave = async (event: Eveniment) => {
        if (!event.id) return;
        await updateDoc(doc(db, "evenimente", event.id), {
            titlu: event.titlu,
            descriere: event.descriere,
            image: event.image,
        });
        alert("Eveniment actualizat!");
    };

    const handleSaveEvenimentData = async (e: React.FormEvent) => {
        e.preventDefault();
        await setDoc(doc(db, "evenimentData", "IgGBOjpgxF2qVra4OgDT"), {
            image1,
            image2,
            text1,
            text2,
        }, { merge: true });
        alert("Datele au fost actualizate cu succes!");
    };

    if (!evenimentData) return <div className="p-8 text-gray-600">Încărcare...</div>;

    return (
        // păstrează tot codul de sus

        <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mt-8 md:mt-10 mb-6 text-gray-800 text-center md:text-left">
                Administrare Evenimente
            </h1>

            {/* Adaugă eveniment nou */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow mb-10">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
                    Adaugă Eveniment Nou
                </h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Titlu"
                        value={newEvent.titlu}
                        onChange={(e) => setNewEvent({ ...newEvent, titlu: e.target.value })}
                        className="border border-gray-300 bg-white text-gray-900 p-3 rounded w-full"
                    />
                    <textarea
                        placeholder="Descriere"
                        value={newEvent.descriere}
                        onChange={(e) => setNewEvent({ ...newEvent, descriere: e.target.value })}
                        className="border border-gray-300 bg-white text-gray-900 p-3 rounded w-full"
                    />
                    <input
                        type="text"
                        placeholder="URL Imagine"
                        value={newEvent.image}
                        onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
                        className="border border-gray-300 bg-white text-gray-900 p-3 rounded w-full"
                    />
                    <button
                        onClick={handleAdd}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
                    >
                        Adaugă
                    </button>
                </div>
            </div>

            {/* Listă evenimente */}
            <div className="space-y-6">
                {evenimente.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white rounded-xl p-4 md:p-6 shadow flex flex-col md:flex-row gap-4 md:gap-6"
                    >
                        <div className="w-full md:w-1/2 lg:w-1/3">
                            <img
                                src={event.image}
                                alt="Imagine eveniment"
                                className="w-full h-40 object-cover rounded-md mb-2"
                            />
                            <input
                                type="text"
                                value={event.image}
                                onChange={(e) =>
                                    setEvenimente(prev =>
                                        prev.map(ev => ev.id === event.id ? { ...ev, image: e.target.value } : ev)
                                    )
                                }
                                className="border border-gray-300 bg-white text-gray-900 p-2 rounded w-full"
                                placeholder="URL Imagine"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-3">
                            <input
                                type="text"
                                value={event.titlu}
                                onChange={(e) =>
                                    setEvenimente(prev =>
                                        prev.map(ev => ev.id === event.id ? { ...ev, titlu: e.target.value } : ev)
                                    )
                                }
                                className="border border-gray-300 bg-white text-gray-900 p-3 rounded w-full"
                                placeholder="Titlu"
                            />
                            <textarea
                                value={event.descriere}
                                onChange={(e) =>
                                    setEvenimente(prev =>
                                        prev.map(ev => ev.id === event.id ? { ...ev, descriere: e.target.value } : ev)
                                    )
                                }
                                className="border border-gray-300 bg-white text-gray-900 p-3 rounded w-full min-h-[100px]"
                                placeholder="Descriere"
                            />
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => handleSave(event)}
                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full sm:w-auto"
                                >
                                    Salvează
                                </button>
                                <button
                                    onClick={() => event.id && handleDelete(event.id)}
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full sm:w-auto"
                                >
                                    Șterge
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Formular actualizare date generale */}
            <form
                onSubmit={handleSaveEvenimentData}
                className="mt-12 bg-white p-4 md:p-6 rounded-xl shadow space-y-6"
            >
                <div>
                    <label className="block text-base md:text-lg font-semibold text-gray-800 mb-2">Prima imagine de pe pagină:</label>
                    <input
                        type="text"
                        value={image1}
                        onChange={(e) => setImage1(e.target.value)}
                        className="border border-gray-300 bg-white text-gray-900 p-3 rounded w-full"
                        placeholder="URL imagine 1"
                    />
                </div>
                <div>
                    <label className="block text-base md:text-lg font-semibold text-gray-800 mb-2">A doua imagine de pe pagină:</label>
                    <input
                        type="text"
                        value={image2}
                        onChange={(e) => setImage2(e.target.value)}
                        className="border border-gray-300 bg-white text-gray-900 p-3 rounded w-full"
                        placeholder="URL imagine 2"
                    />
                </div>
                <div>
                    <label className="block text-base md:text-lg font-semibold text-gray-800 mb-2">Ce mai organizam? Sectiune 1:</label>
                    <textarea
                        value={text1}
                        onChange={(e) => setText1(e.target.value)}
                        className="border border-gray-300 bg-white text-gray-900 p-3 rounded w-full min-h-[100px]"
                        placeholder="Text 1"
                    />
                </div>
                <div>
                    <label className="block text-base md:text-lg font-semibold text-gray-800 mb-2">Ce mai organizam? Sectiune 2:</label>
                    <textarea
                        value={text2}
                        onChange={(e) => setText2(e.target.value)}
                        className="border border-gray-300 bg-white text-gray-900 p-3 rounded w-full min-h-[100px]"
                        placeholder="Text 2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
                >
                    Salvează Modificările
                </button>
            </form>
        </div>

    );
};

export default EventsPage;