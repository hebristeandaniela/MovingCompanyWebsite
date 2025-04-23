'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const TermeniSiConditii = () => {
  return (
    <div className="w-full bg-white px-24 py-12 text-gray-800 leading-relaxed">
      <div className="text-center mb-10">
        <img
          src="/gdpr-illustration.svg"
          alt="GDPR Illustration"
          className="mx-auto mb-4 max-w-xs"
        />
        <h1 className="text-4xl font-bold">GDPR - Consimțământ</h1>
        <p className="text-base mt-2">
          Acordul explicit al utilizatorului privind colectarea și prelucrarea datelor sale personale în conformitate cu
          Regulamentul General privind Protecția Datelor.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-2">Stimate beneficiar,</h2>
      <p className="text-justify mb-4">
        În colectarea acestor date, conform legii, trebuie să vă furnizăm informații despre noi, motivele pentru care
        colectăm datele și cum le vom utiliza, precum și drepturile pe care le aveți cu privire la datele dumneavoastră
        cu caracter personal.
      </p>
      <p className="text-justify mb-4">
        Prin aceasta vă solicităm să ne exprimați consimțământul pentru a putea utiliza datele dumneavoastră cu caracter
        personal, în scopurile specificate aici.
      </p>
      <p className="text-justify mb-8">
        Prin continuarea unei colaborări sau utilizarea serviciilor oferite de RO ET CO INTERNATIONAL S.A., vă exprimați
        acordul pentru prelucrarea datelor dumneavoastră personale în conformitate cu scopurile specificate în această
        politică de confidențialitate.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Cine suntem?</h2>
      <p className="text-justify mb-8">
        RO ET CO INTERNATIONAL S.A., cu sediul în Oradea, județul Bihor, activează din 1993 pe piața tehnologiei
        informației, oferind echipamente IT, birotică, telecomunicații și soluții profesionale. Compania este membră
        ARIES Transilvania și a Camerei de Comerț și Industrie Bihor, fiind certificată pentru ISO 9001:2008
        (managementul calității) și ISO 14001:2005 (management de mediu).
      </p>

      <h2 className="text-2xl font-semibold mb-2">Scopul prelucrării datelor personale:</h2>
      <p className="text-justify mb-4">
        Scopul prelucrării datelor: Datele colectate prin formularele de contact sau abonare sunt utilizate exclusiv pentru:
      </p>
      <ul className="mb-6 pl-6 space-y-2">
        <li className="flex items-start gap-2">
          <CheckCircle className="text-blue-600 mt-1" size={20} />
          <span>Oferirea de informații despre produsele și serviciile noastre.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="text-blue-600 mt-1" size={20} />
          <span>Contactarea în vederea colaborării sau suportului tehnic.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="text-blue-600 mt-1" size={20} />
          <span>Îmbunătățirea experienței utilizatorilor pe site.</span>
        </li>
      </ul>

      <p className="text-justify mb-4">
        <strong>Durata stocării datelor:</strong> Datele personale sunt stocate doar pentru perioada necesară îndeplinirii
        scopului pentru care au fost colectate, conform Regulamentului GDPR.
      </p>

      <p className="text-justify mb-4">
        <strong>Consimțământul dumneavoastră:</strong> Prin utilizarea site-ului nostru și completarea formularelor, vă
        exprimați acordul pentru prelucrarea datelor conform scopurilor menționate. Aveți dreptul de a vă retrage
        consimțământul în orice moment, conform procedurilor stabilite în Politica noastră de confidențialitate.
      </p>

      <p className="text-justify mb-4">
        <strong>Divulgarea către terți:</strong> Datele dumneavoastră personale nu vor fi transferate sau dezvăluite către
        terți în absența consimțământului dumneavoastră explicit, cu excepția cazurilor în care acest lucru este impus de
        lege sau este necesar pentru realizarea scopului declarat.
      </p>

      <p className="text-justify mb-8">
        <strong>Drepturile dumneavoastră:</strong> Conform GDPR, aveți dreptul de acces, rectificare, ștergere,
        restricționare, portabilitate și opoziție în ceea ce privește prelucrarea datelor dumneavoastră personale. Pentru
        exercitarea acestor drepturi sau pentru orice întrebări suplimentare referitoare la prelucrarea datelor personale,
        vă rugăm să ne contactați la Telefon: 0259-463939 sau pe Email: roetco@roetco.ro.
      </p>

      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Înapoi la Contact
        </Link>
      </div>
    </div>
  );
};

export default TermeniSiConditii;
