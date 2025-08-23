"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { updateJourney, deleteJourney } from "@/api/apiUtils";
import Link from "next/link";
import { AddPlaceButton } from "@/components/places/AddPlaceButton";

interface InputProps {
  journeyPromise: Promise<Journey>;
  placesPromise: Promise<Places[]>;
}

export const EditJourney = ({ journeyPromise, placesPromise }: InputProps) => {
  const router = useRouter();
  const journey = use(journeyPromise);
  const places = use(placesPromise);
  const [name, setName] = useState(journey.name);
  const [desc, setDesc] = useState(journey.desc);
  const [path, setPath] = useState(journey.path);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleSave = async () => {
    await updateJourney({
      ...journey,
      name,
      desc,
    });

    router.back();
  };
  const handleDelete = async () => {
    await deleteJourney(journey.id);

    router.back();
  };

  return (
    <section>
      <input onChange={changeName} value={name} placeholder="Name" />
      <br />
      <textarea onChange={changeDesc} value={desc} placeholder="Describe this journey" />
      <br />
      <button onClick={handleSave}>Save</button>
      <br />
      <button onClick={handleDelete}>Delete</button>
      <br />
      <AddPlaceButton journeyId={journey.id} />
      <br />
      <ul>
        {path.map(id => {
          const place = places.find(place => place.id === id);
          return <li key={id}><Link href={`/places/${id}`}>{place.name}</Link></li>;
        })}
      </ul>
    </section>
  );
};
