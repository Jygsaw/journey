'use client';

import { use, useState } from 'react';
import { createLocation, updateLocation, updatePlace } from '@/lib/dbUtils';
import { UserContext } from '@/contexts/UserContext';
import { LocationSelector } from '@/components/LocationSelector';

interface InputProps {
  placePromise: Promise<Place>;
  locationPromise: Promise<Location>;
}

export function EditPlace({ placePromise, locationPromise }: InputProps) {
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
      : await createLocation({
          ...coord,
          createdBy: user.id,
        });

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
