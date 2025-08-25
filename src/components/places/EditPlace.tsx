"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { createLocation, updateLocation, updatePlace, deletePlace } from "@/api/apiUtils";
import { UserContext } from "@/contexts/UserContext";
import { LocationSelector } from "@/components/LocationSelector";

interface InputProps {
  placePromise: Promise<Place>;
  locationPromise: Promise<Location>;
}

export function EditPlace({ placePromise, locationPromise }: InputProps) {
  const router = useRouter();
  const user = use(UserContext);
  const place = use(placePromise);
  const location = use(locationPromise);
  const [name, setName] = useState(place.name);
  const [desc, setDesc] = useState(place.desc);
  const [locationId, setLocationId] = useState(location?.id);
  const [coord, setCoord] = useState({
    latitude: location?.latitude,
    longitude: location?.longitude,
  });

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleSave = async () => {
    const updatedLocation = locationId
      ? await updateLocation({
        ...location,
        longitude: coord[0],
        latitude: coord[1],
      })
      : await createLocation({
        longitude: coord[0],
        latitude: coord[1],
        createdBy: user.id,
      });

    await updatePlace({
      ...place,
      name,
      desc,
      locationId: updatedLocation.id,
    });

    router.back();
  };
  const handleDelete = async () => {
    await deletePlace(place.id);

    router.back();
  };

  return (
    <section>
      <LocationSelector {...{ locationId, coord, setLocationId, setCoord }} />
      <br />
      <input type="text" onChange={changeName} value={name} placeholder="Name" />
      <br />
      <textarea onChange={changeDesc} value={desc} placeholder="Description" />
      <br />
      <button onClick={handleSave}>Save</button>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </section>
  );
}
