'use client';

import { useState } from 'react';
import { createLocation, updateLocation, updatePlace } from '@/lib/dbUtils';
import { LocationSelector } from '@/components/LocationSelector';

interface InputProps {
  place: Place;
  location?: Location;
}

export function EditPlace({ place, location }: InputProps) {
  const [name, setName] = useState(place.name);
  const [desc, setDesc] = useState(place.desc);
  const [locationId, setLocationId] = useState(location?.id);
  const [coord, setCoord] = useState({
    latitude: location?.latitude,
    longitude: location?.longitude,
  });

  const changeName = (e) => {
    console.log("> changing name");
    setName(e.target.value);
  };
  const changeDesc = (e) => {
    console.log("> changing desc");
    setDesc(e.target.value);
  };
  const save = async (e) => {
    console.log("> saving changes");

    const updatedLocation = locationId
      ? await updateLocation({
          ...location,
          ...coord,
        })
      : await createLocation(coord);

    await updatePlace({
      ...place,
      name,
      desc,
      locationId: updatedLocation.id,
    });
  };

  return (
    <section>
      <LocationSelector {...{ locationId, coord, setLocationId, setCoord }} />
      <br />
      <input type="text" name="name" value={name} onChange={changeName} />
      <br />
      <textarea value={desc} onChange={changeDesc} />
      <br />
      <button onClick={save}>Save</button>
    </section>
  )
}
