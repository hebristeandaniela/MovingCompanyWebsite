"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseService";
import { Solutii } from "../types/solutii";
import HeaderSolutii from "../solutii/components/HeaderSolutii";
const SolutiiPage = () => {
    const [data, setData] = useState<Solutii[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("🔄 Fetching solutions...");
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "solutii"));
                const items: Solutii[] = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }) as Solutii);

                console.log("✅ Solutions fetched:", items);
                setData(items);
            } catch (error) {
                console.error("❌ Error fetching solutions: ", error);
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
            <HeaderSolutii />
            <div className="flex flex-col items-center bg-white min-h-screen py-12 pt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-6xl relative z-10">
                    {data.map((item) => {
                        console.log("🔍 Rendering solution:", item.id, item.nume);

                        return (
                            <div key={item.id} className="flex flex-col bg-gray-100 shadow-md rounded-lg overflow-hidden w-80 p-4">
                                <img
                                    src={item.image_url || "/assets/placeholder.jpg"}
                                    alt={item.nume}
                                    className="w-full h-64 object-cover rounded-md"
                                />
                                <div className="p-3">
                                    <h3 className="text-black text-left text-lg font-semibold mt-2">{item.nume}</h3>
                                    <p className="text-sm text-left text-gray-700 mt-2">{item.descriere}</p>

                                    <Link href={`/solutii/${item.id}`} className="text-blue-500 hover:underline">
                                        Vezi detalii
                                    </Link>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div> 
        </div>
    );
};

export default SolutiiPage;
