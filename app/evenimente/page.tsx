
"use client";

import HeaderEvenimente from "./components/HeaderEvenimente";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseService";
import MoreInfo from "./components/MoreInfo";
import SocialM from "./components/SocialM";
import EvenimenteList from "./components/EvenimenteList";

type Eveniment = {
    id?: string;
    titlu: string;
    descriere: string;
    image: string;
};

export default function Evenimente() {
    const [evenimente, setEvenimente] = useState<Eveniment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "evenimente"));
                const events: Eveniment[] = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Eveniment[];
                setEvenimente(events);
            } catch (error) {
                console.error("❌ Eroare la preluarea evenimentelor:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen">
                <img src="/assets/logo.jpg" alt="RoEtCo" className="w-30 h-30 mb-2" />
                <h2 className="text-xl font-semibold">Se încarcă...</h2>
            </div>
        );
    }

    return (
        <div>
            <HeaderEvenimente />
            <div className="flex flex-col items-center bg-white min-h-screen py-12 pt-16">
                <MoreInfo />
                <EvenimenteList evenimente={evenimente} />
                <SocialM />
                
            </div>
        </div>
    );
}
